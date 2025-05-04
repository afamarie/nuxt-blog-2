<template>
  <div class="post-page">
    <h1 class="text-3xl leading-none sm:text-4xl lg:text-[84px]">
      {{ post?.title }}
    </h1>
    <div class="pt-8 lg:pt-22">
      <NuxtPicture
        class="[&>img]:bg-primary-400 [&>img]:w-full [&>img]:max-h-[700px] [&>img]:object-cover"
        :src="post?.image"
        :alt="post?.title"
        width="1216"
        height="700"
      />
      <section class="py-6 lg:pt-18 lg:pb-20">
        <h2>About</h2>
        <p class="text-2xl leading-tight lg:text-4xl pt-4 lg:pt-8">
          {{ post?.description }}
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types'

const { id } = useRoute().params
const { data: post } = await useFetch<Post>(`/api/posts/${id}`)

if (!id || !post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}

definePageMeta({
  name: 'post',
})

useHead({
  title: post.value?.title,
  meta: [
    {
      name: 'description',
      content: post.value?.preview,
    },
  ],
})
</script>
