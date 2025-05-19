// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/i18n'],
  ssr: true,
  components: true,
  devtools: { enabled: true },
  app: {
    baseURL: '/',
  },
  css: ['~/assets/style/main.css'],
  ui: {
    colorMode: true,
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/:lang(post/**)?': { prerender: true },
    '/_nuxt/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable',
      },
    },
    '/images/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable',
      },
    },
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'netlify',
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'ru', language: 'ru-RU', name: 'Русский' },
    ],
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
    baseUrl: 'https://demo-nuxt-blog.netlify.app/',
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
    domains: ['picsum.photos'],
    provider: 'netlify',
    alias: {
      photo: 'https://picsum.photos/',
    },
    screens: {
      xs: 320,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
})
