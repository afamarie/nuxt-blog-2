<template>
  <UCard
    class="post-card hover:-translate-y-6 group transform transition duration-300"
    as="article"
  >
    <NuxtLinkLocale
      class="grid justify-stretch"
      :to="{ name: 'post', params: { id: post.id } }"
    >
      <NuxtPicture
        class="[&>img]:bg-primary-400 [&>img]:w-full [&>img]:aspect-square [&>img]:object-cover"
        :src="post?.image"
        width="280"
        height="280"
        format="avif,webp"
        densities="x1 x2"
        loading="lazy"
        :alt="post?.title"
      />
      <h3 class="text-xl leading-6 line-clamp-3 mt-3 md:mt-6">
        {{ post?.preview }}
      </h3>
    </NuxtLinkLocale>
    <template #footer>
      <NuxtLinkLocale
        class="block text-xl text-lilac-400 transform transition duration-300 pointer-fine:translate-y-6 pointer-fine:opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        :to="{ name: 'post', params: { id: post.id } }"
      >
        Read more
      </NuxtLinkLocale>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { Post } from '~/types'

defineProps<({
  post: Post
})>()
</script>
