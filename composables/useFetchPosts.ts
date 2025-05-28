import type { Post } from '~/types'

export const useFetchPosts = (page: Ref<number>, itemsPerPage: number = 8) => {
  const url = useRuntimeConfig().public.apiUrl

  const { data, pending, error } = useAsyncData(`posts-page-${page.value}`,
    async () => {
      try {
        return $fetch<{ posts: Post[], total: number }>(url, {
          params: {
            limit: itemsPerPage,
            skip: (page.value - 1) * itemsPerPage,
          },
        })
      }
      catch (err) {
        console.error('Error fetching posts:', err)
        return { posts: [], total: 0 }
      }
    },
    {
      watch: [page],
      server: true,
      immediate: true,
    },
  )

  const posts = computed<Post[]>(() => data.value?.posts ?? [])
  const total = computed<number>(() => data.value?.total ?? 0)

  return { page, posts, total, pending, error }
}
