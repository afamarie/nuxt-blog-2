import url from '~/server/url'
import type { Post } from '~/types/index'

export default defineEventHandler<Post | unknown>(async (event) => {
  const id = event.context.params?.id

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID is required',
    })
  }

  try {
    const post = await $fetch<Post>(`${url}${id}`)
    return post
  }
  catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch post',
    })
  }
})
