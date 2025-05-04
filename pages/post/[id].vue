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
        format="avif,webp"
        densities="x1 x2"
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
const post = ref<Post | null>()

definePageMeta({
  name: 'post',
})

watchEffect(() => {
  const { data } = useLazyFetch<Post>(`/api/posts/${id}`)
  post.value = data.value || null

  useHead({
    title: post.value?.title,
    meta: [
      {
        name: 'description',
        content: post.value?.preview,
      },
    ],
  })
})
</script>
