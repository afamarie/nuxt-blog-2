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
        id="posts-list"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-8 lg:gap-y-1 pt-6 pb-2 lg:pt-18"
      >
        <li
          v-for="post in posts"
          :key="post.id"
        >
          <PostCard :post="post" />
        </li>
        <li
          v-if="pending"
          class="col-span-full"
        >
          <USkeleton />
        </li>
      </ul>
      <!-- eslint-disable vue/no-lone-template -->
      <UPagination
        v-model:page="page"
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
          <template />
        </template>
        <template
          v-if="page * itemsPerPage >= total"
          #next
        >
          <template />
        </template>
      </UPagination>
    </section>
  </div>
</template>

<script setup lang="ts">
const title = 'Articles'
const itemsPerPage = 8
const page = ref<number>(1)

const { posts, total, pending, error } = useFetchPosts(page, itemsPerPage)

const to = (pageNumber: number) => ({
  query: { page: pageNumber },
  hash: '#posts-list',
})

useQueryPagination(page)

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
