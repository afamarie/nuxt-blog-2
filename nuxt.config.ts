// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/i18n'],
  ssr: true,
  components: false,
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  app: {
    baseURL: '/',
  },
  css: ['~/assets/style/main.css'],
  vue: {
    compilerOptions: {
      whitespace: 'condense',
    },
  },
  ui: {
    colorMode: true,
    fonts: false,
    theme: {
      colors: ['primary', 'secondary'],
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      i18n: {
        baseUrl: 'https://demo-nuxt-blog.netlify.app/',
      },
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
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' },
    ],
    lazy: true,
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      fallbackLocale: 'en',
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
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
    dir: 'public/images',
    provider: 'netlify',
    domains: ['picsum.photos'],
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
