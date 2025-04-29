// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@pinia/nuxt', '@nuxtjs/i18n'],
  ssr: true,
  components: true,
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt-blog/',
  },
  css: ['~/assets/style/main.css'],
  ui: {
    colorMode: false,
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'github_pages',
    prerender: {
      routes: ['/en', '/'],
    },
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'ru', language: 'ru-RU', name: 'Русский' },
    ],
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
  },
  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './assets/icons',
      },
    ],
  },
})
