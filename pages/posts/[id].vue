<template>
  <section class="post-page">
    <h1>{{ post?.title }}</h1>
    <!-- <NuxtPicture :src="post?.image" /> -->
    <h2>About</h2>
    <p>{{ post?.description }}</p>
  </section>
</template>

<script setup lang="ts">
import type { Post } from '~/types'

const id = useRoute().params.id
const { data: post } = await useLazyFetch<Post>(`/api/posts/${id}`)
</script>
