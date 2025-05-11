import type { Post } from '~/types'

export const useFetchPosts = (itemsPerPage: number = 8) => {
  const url = useRuntimeConfig().public.apiUrl
  const page = ref<number>(useRoute().query.page ? Number(useRoute().query.page) : 1)

  const { data, pending, error, refresh } = useLazyAsyncData(
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

  return {
    page,
    total,
    posts,
    pending,
    error,
    refresh,
  }
}
