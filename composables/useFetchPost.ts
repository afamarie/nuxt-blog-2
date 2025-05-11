import type { Post } from '~/types'

export const useFetchPost = () => {
  const url = useRuntimeConfig().public.apiUrl
  const id = useRoute().params.id as string

  if (!id) {
    throw new Error('ID is required')
  }

  const { data: post, status, error } = useLazyFetch<Post>(url + id)

  return { post, status, error }
}
