import url from '~/server/url'

export default defineEventHandler(async () => {
  try {
    const posts = await $fetch(url)
    return posts
  }
  catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch post',
    })
  }
})
