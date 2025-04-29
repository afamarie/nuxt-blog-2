<template>
  <section class="index-page">
    <h1>Articles</h1>
    <ul
      ref="postsListRef"
      class="posts-list"
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
    <PostsPagination
      ref="paginationRef"
      v-model="page"
      :items-per-page="itemsPerPage"
      :total="total"
      @update:page="handlePageUpdate"
    />
  </section>
</template>

<script setup lang="ts">
import type { Post } from '~/types'

const postsListRef = ref<HTMLUListElement | null>(null)
// const { data: posts } = await useLazyFetch<Post[]>('/api/posts/all')
const page = ref<number>(useRoute().query.page ? Number(useRoute().query.page) : 1)
const total = posts.value?.length || 0
const itemsPerPage = 8

const handlePageUpdate = () => {
  useRouter().push({
    query: {
      page: page.value,
    },
  })

  if (postsListRef.value) {
    postsListRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}

const paginatedPosts = computed<Post[]>(() => {
  const start = (page.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return posts.value?.slice(start, end) || []
})
</script>
