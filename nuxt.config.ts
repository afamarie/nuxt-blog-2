// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/i18n'],
  ssr: true,
  components: true,
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt-blog/',
  },
  css: ['~/assets/style/main.css'],
  ui: {
    colorMode: true,
  },
  routeRules: {
    '/': { prerender: true },
    '/en': { prerender: true },
    '/post/**': { prerender: true },
    '/en/post/**': { prerender: true },
    '/policy': { static: true },
    '/_nuxt/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Type': 'application/javascript',
      },
    },
    '/api/**': {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'gh-pages',
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
  image: {
    inject: true,
    quality: 80,
    format: ['webp', 'avif'],
    dir: 'public',
    screens: {
      xs: 320,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
})
