<template>
  <div class="index-page">
    <h1 class="text-3xl leading-none sm:text-4xl lg:text-[84px]">
      {{ title }}
    </h1>
    <section class="pb-10 lg:pb-32">
      <h2 class="sr-only">
        Blog posts list
      </h2>
      <ul
        v-if="posts && posts.length > 0"
        id="posts-list"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-8 lg:gap-y-1 pt-6 pb-2 lg:pt-18"
      >
        <li
          v-for="post in paginatedPosts"
          :key="post.id"
        >
          <PostCard
            :post="post"
          />
        </li>
      </ul>
      <p v-else>
        No articles yet
      </p>
      <PostsPagination
        v-if="posts && posts.length > 0"
        v-model="page"
        :items-per-page="itemsPerPage"
        :total="total"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types'

const posts = ref<Post[]>()
const total = ref<number>(0)
const itemsPerPage = 8
const title = 'Articles'

const paginatedPosts = computed<Post[]>(() => {
  const start = (page.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return posts.value?.slice(start, end) || []
})

const page = computed<number>({
  get() {
    return Number(useRoute().query?.page) || 1
  },
  set(v: number) {
    useRouter().push({ query: { page: v }, hash: '#posts-list' })
  },
})

watchEffect(() => {
  const { data } = useFetch<Post[]>('/api/posts/all')
  posts.value = data.value || []
  total.value = posts.value.length
})

definePageMeta({
  name: 'home',
  title: 'Articles',
})

useHead({
  title: 'Articles',
  meta: [
    {
      name: 'description',
      content: 'Read articles about amazing facts',
    },
  ],
})
</script>
