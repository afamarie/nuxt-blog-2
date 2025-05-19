<template>
  <header class="app-header">
    <UContainer class="flex justify-between items-center flex-wrap gap-y-6 gap-x-8 lg:gap-x-23 py-6 lg:py-8 lg:px-10">
      <NuxtLinkLocale
        class="block"
        :to="{ name: 'home' }"
      >
        <ClientOnly>
          <img
            :src="src"
            alt="Blog"
            width="108"
            height="50"
          >
          <span class="sr-only">Homepage</span>
        </ClientOnly>
      </NuxtLinkLocale>
      <nav class="ml-auto">
        <ul class="flex flex-wrap justify-end gap-x-6 lg:gap-x-14 gap-y-6 text-xl leading-none">
          <li>
            <ULink
              to="#"
              class="text-primary hover:text-highlighted"
            >Special</ULink>
          </li>
          <li>
            <ULink
              to="#"
              class="text-primary hover:text-highlighted"
            >Stories</ULink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-4">
        <ClientOnly>
          <UDropdownMenu
            :items="availableLocales"
            :ui="{
              itemLeadingIcon: 'size-6',
            }"
          >
            <UButton
              variant="outline"
              :icon="`i-custom-${currentLocale.code}`"
              :label="currentLocale.name"
              :ui="{
                label: 'sr-only',
                base: 'p-3.5 rounded-full ring-mutedgrey',
                leadingIcon: 'size-6',
              }"
            />
          </UDropdownMenu>
          <UButton
            :icon="icon"
            class="p-3.5 rounded-full"
            variant="ghost"
            @click="toggleMode"
          />
        </ClientOnly>
        <UButton
          class="text-xl leading-none"
          as="nuxt-link"
          to="#"
          :ui="{
            base: 'py-4 px-8 rounded-full',
          }"
        >
          Log in
        </UButton>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const nuxtApp = useNuxtApp()

const availableLocales: DropdownMenuItem = locales.value.map(loc => ({
  label: loc.name ?? loc.code,
  icon: `i-custom-${loc.code}`,
  type: 'link',
  to: switchLocalePath(loc.code),
}))

const currentLocale = computed(() =>
  locales.value.find(l => l.code === locale.value) ?? { code: 'ru', name: 'Русский' },
)

const toggleMode = (): void => {
  nuxtApp.$colorMode.preference = nuxtApp.$colorMode.value === 'dark' ? 'light' : 'dark'
}

const icon = computed<string>(() => {
  return nuxtApp.$colorMode.value === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun'
})

const src = computed<string>(() => {
  return nuxtApp.$colorMode.value === 'dark' ? '/images/logo-dark.png' : '/images/logo-light.png'
})
</script>
