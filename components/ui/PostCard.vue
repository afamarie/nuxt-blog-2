<template>
  <UCard
    v-if="post.id"
    class="post-card hover:-translate-y-6 group transform transition duration-300"
    as="article"
  >
    <NuxtLinkLocale
      class="grid justify-stretch"
      :to="{ name: 'post', params: { id: post.id } }"
    >
      <NuxtPicture
        :src="`photo/id/${post.id}/280/`"
        :img-attrs="{ class: 'bg-primary-400 w-full aspect-square' }"
        fit="cover"
        width="280"
        height="280"
        format="avif,webp"
        densities="x1 x2"
        :loading="isLazy ? 'lazy' : 'eager'"
        :alt="post?.title"
      />
      <h3 class="text-xl leading-6 line-clamp-3 mt-3 md:mt-6">
        {{ post?.title }}
      </h3>
      <span
        class="block py-2 sm:py-4 px-0 sm:px-0 text-xl text-secondary transform transition duration-300 pointer-fine:translate-y-6 pointer-fine:opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        :to="{ name: 'post', params: { id: post.id } }"
      >
        {{ $t('read_more') }}
      </span>
    </NuxtLinkLocale>
  </UCard>
</template>

<script setup lang="ts">
import type { Post } from '~/types'

defineProps<({
  post: Post
  isLazy?: boolean
})>()
</script>
