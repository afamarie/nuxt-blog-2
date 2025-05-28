<template>
  <div class="default-layout min-h-screen flex flex-col">
    <AppHeader />
    <UContainer
      as="main"
      class="flex-grow pt-6 sm:pt-8 lg:pt-27"
    >
      <slot />
    </UContainer>
    <AppFooter hydrate-on-visible />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>
