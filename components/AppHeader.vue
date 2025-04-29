<template>
  <header class="app-header">
    <UContainer class="flex items-center justify-between">
      <NuxtLink to="#">
        <NuxtPicture
          src="/images/logo.png"
          width="84"
          height="24"
        />
      </NuxtLink>
      <nav class="nav">
        <ul>
          <li>
            <NuxtLink to="#">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">About</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="btns-group">
        <USelect
          v-model="selectedLocale"
          :items="availableLocales"
          value-key="code"
          :ui="{
            itemLabel: 'sr-only',
          }"
        >
          <template #trailing>
            <span />
          </template>
        </USelect>
        <UButton
          as="nuxt-link"
          to="#"
          @click="$router.push('/register')"
        >
          Register
        </UButton>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const selectedLocale = ref(locale.value)

watch(selectedLocale, (newLocale) => {
  setLocale(newLocale)
})

const availableLocales = computed(() => {
  return locales.value.map((locale) => {
    return {
      code: locale.code,
      label: locale.name,
      icon: 'i-custom-' + locale.code,
    }
  })
})
</script>

<style lang="scss" scoped>
.app-header {}
</style>
