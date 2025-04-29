import url from '~/server/url'
import type { Post } from '~/types/index'

export default defineEventHandler(async () => {
  try {
    const posts = await $fetch<Post[]>(url)
    return posts
  }
  catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch posts',
    })
  }
})
