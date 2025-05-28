<template>
  <PostPageSkeleton v-if="pending" />
  <div
    v-else
    class="post-page"
  >
    <h1 class="text-3xl leading-none sm:text-4xl lg:text-[84px]">
      {{ post?.title }}
    </h1>
    <div class="pt-8 lg:pt-22">
      <NuxtPicture
        :src="`photo/id/${post?.id}/1216/700`"
        :alt="post?.title"
        :img-attrs="{ class: 'bg-primary-400 w-full max-h-[700px]' }"
        fit="cover"
        format="avif,webp"
        densities="x1 x2"
        width="1216"
        height="700"
      />
      <section class="py-6 lg:pt-18 lg:pb-20">
        <h2>{{ $t("about") }}</h2>
        <p class="text-2xl leading-tight lg:text-4xl pt-4 lg:pt-8">
          {{ post?.body }}
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const PostPageSkeleton = defineAsyncComponent(() => import('@/components/ui/PageSkeleton.vue'))
const { post, pending } = useFetchPost()

definePageMeta({
  name: 'post',
})

useHead({
  title: post.value?.title,
  meta: [
    {
      name: 'description',
      content: post.value?.title,
    },
  ],
})
</script>
