import type { Post } from '~/types'

export const useFetchPosts = (page: Ref<number>, itemsPerPage: number = 8) => {
  const url = useRuntimeConfig().public.apiUrl

  const { data, pending, error } = useLazyAsyncData(`posts-page-${page.value}`,
    () =>
      $fetch<{ posts: Post[], total: number }>(url, {
        params: {
          limit: itemsPerPage,
          skip: (page.value - 1) * itemsPerPage,
        },
      }),
    {
      watch: [page],
    },
  )

  const posts = computed(() => data.value?.posts ?? [])
  const total = computed(() => data.value?.total ?? 0)

  return { page, posts, total, pending, error }
}
