<template>
  <ClientOnly>
    <UButton
      :icon="theme.icon.value"
      class="p-3.5 rounded-full"
      variant="soft"
      @click="theme.toggleMode"
    >
      <span class="sr-only">{{ $t('accessibility.color_mode') }}</span>
    </UButton>
    <template #fallback>
      <USkeleton class="bg-primary-400 size-12 rounded-full" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const theme = useTheme()
</script>
