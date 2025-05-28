<template>
  <NuxtLinkLocale
    class="block"
    :to="{ name: 'home' }"
  >
    <img
      class="dark:hidden"
      src="/images/logo-light.png"
      alt="Blog"
      width="108"
      height="50"
    >
    <img
      class="hidden dark:block"
      src="/images/logo-dark.png"
      alt="Blog"
      width="108"
      height="50"
    >
    <span class="sr-only">{{ $t('accessibility.homepage') }}</span>
  </NuxtLinkLocale>
</template>
