<template>
  <NuxtLinkLocale
    class="post-card"
    :to="{ name: 'posts-id', params: { id: post.id } }"
  >
    <UCard as="article">
      <!-- <NuxtPicture :src="post?.image" /> -->
      <template #header>
        {{ post?.title }}
      </template>
      <template #footer>
        {{ post?.preview }}
      </template>
    </UCard>
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
import type { Post } from '~/types'

defineProps<({
  post: Post
})>()
</script>
