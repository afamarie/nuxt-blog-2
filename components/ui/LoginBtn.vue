<template>
  <UButton
    class="flex text-xl leading-none text-center justify-center"
    :to="localePath('login')"
    :ui="{
      base: 'py-4 px-8 rounded-full',
    }"
  >
    {{ $t('login') }}
  </UButton>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
