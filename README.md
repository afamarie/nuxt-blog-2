# 🪄 Nuxt Blog Website

This is a multi-language website built with [Nuxt 3](https://nuxt.com) and deployed on [Netlify](https://www.netlify.com/). It's designed as a case project to showcase Nuxt's SSR capabilities, image optimization, custom UI, and internationalization support.

## ✍️ Demo

[Deployment Link](https://demo-nuxt-blog.netlify.app/) 

## ✨ Features

- ✅ Server-Side Rendering (SSR)
- 🌐 Multilingual support (English default, Russian optional)
- 🖼 Optimized image handling with Nuxt Image & Netlify provider
- 🎨 Custom UI with [@nuxt/ui](https://ui.nuxt.com)
- ⚡ Static prerendering for performance and SEO
- 📦 Deployed on Netlify with CDN caching

## 🧰 Tech Stack

- **Nuxt 3** (Vue 3, Composition API)
- **TypeScript**
- **@nuxt/ui** for styling and theming
- **@nuxt/image** for responsive and optimized images
- **@nuxtjs/i18n** for internationalization
- **Netlify** for deployment
- **ESLint + vue-tsc** for linting and type-checking

## 🌍 Localization

Supports two locales:

- 🇷🇺 `ru` — Русский (default)
- 🇺🇸 `en` — English

## 🚀 Deployment

The project uses **Netlify** for deployment, with prerendering enabled for optimal performance.

### Netlify Settings

- Uses `nitro.preset: 'netlify'`
- Static assets are cached with long-term headers
- Images are optimized and served from Netlify's CDN

## 📁 Project Structure

├── assets/ # Global styles, fonts<br>
├── components/ # UI components (modularized)<br>
├── composables/ # Custom composables (fetching, theming)<br>
├── i18n/locales/ # Translation files (en.json, ru.json)<br>
├── layouts/ # App layout (default.vue)<br>
├── pages/ # Blog routes (index, post/)<br>
├── public/ # Static files (images, robots.txt)<br>
├── types/ # Global TypeScript types<br>

## 🛠 Development

### Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

####  Environment Variables
Create a **.env** file:<br>
NUXT_PUBLIC_API_URL="https://dummyjson.com/posts/"

#### Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

#### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

#### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
