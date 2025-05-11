import url from '~/server/url'
import type { Post } from '~/types/index'

export default defineEventHandler<Post | unknown>(async () => {
  try {
    const resp = await fetch(url)
    const { posts } = await resp.json()
    return posts
  }
  catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch posts',
    })
  }
})
