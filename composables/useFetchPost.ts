import type { Post } from '~/types'

export const useFetchPost = () => {
  const url = useRuntimeConfig().public.apiUrl
  const id = useRoute().params.id

  if (!id) {
    throw new Error('ID is required')
  }

  const { data: post, pending, error } = useLazyFetch<Post>(url + id)

  return { post, pending, error }
}
