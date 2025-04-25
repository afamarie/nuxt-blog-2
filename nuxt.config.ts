// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@pinia/nuxt',
    '@prisma/nuxt',
  ],
  components: true,
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
})
