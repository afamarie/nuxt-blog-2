<template>
  <div class="default-layout">
    <AppHeader />
    <main class="app-main">
      <UContainer>
        <slot />
      </UContainer>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const i18nHead = useLocaleHead()

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
}))
</script>
