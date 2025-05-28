<template>
  <div class="index-page">
    <h1 class="text-3xl leading-none sm:text-4xl lg:text-[84px]">
      {{ $t('articles') }}
    </h1>
    <section class="pb-10 lg:pb-32">
      <h2 class="sr-only">
        {{ $t('accessibility.blog_posts_list') }}
      </h2>
      <ul
        id="posts-list"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-8 lg:gap-y-1 pt-6 pb-2 lg:pt-18"
      >
        <template v-if="pending">
          <li
            v-for="i in 4"
            :key="'skeleton-' + i"
          >
            <PostCardSkeleton />
          </li>
        </template>
        <template v-else>
          <li
            v-for="(post, i) in posts"
            :key="post.id"
          >
            <PostCard
              :post="post"
              :is-lazy="i > 3"
            />
          </li>
        </template>
      </ul>
      <UPagination
        :page="page"
        :total="total"
        :items-per-page="itemsPerPage"
        :ui="{ list: 'gap-2' }"
        :to="to"
        :default-page="1"
        :disabled="pending"
      >
        <template
          v-if="page === 1"
          #prev
        >
          <span v-show="false" />
        </template>
        <template
          v-if="page * itemsPerPage >= total"
          #next
        >
          <span v-show="false" />
        </template>
      </UPagination>
    </section>
  </div>
</template>

<script setup lang="ts">
import PostCard from '@/components/ui/PostCard.vue'
import PostCardSkeleton from '@/components/ui/CardSkeleton.vue'

const itemsPerPage = 8
const { t } = useI18n()
const route = useRoute()
const page = computed<number>(() => Number(route.query.page ?? 1))
const { posts, total, pending } = useFetchPosts(page, itemsPerPage)

const to = (pageNumber: number) => ({
  query: { page: pageNumber },
  hash: '#posts-list',
})

definePageMeta({
  name: 'home',
  title: 'Articles',
})

useHead({
  title: t('seo.home.title'),
  meta: [
    {
      name: 'description',
      content: t('seo.home.description'),
    },
  ],
})
</script>
