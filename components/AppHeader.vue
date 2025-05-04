<template>
  <header class="app-header">
    <UContainer class="flex justify-between items-center flex-wrap gap-y-6 gap-x-8 lg:gap-x-23 py-6 lg:py-8 lg:px-10">
      <NuxtLinkLocale
        class="block"
        :to="{ name: 'home' }"
      >
        <NuxtImg
          src="~/images/logo.png"
          alt="Логотип QTim"
          format="avif,webp"
          densities="x1 x2"
          width="84"
          height="24"
        />
        <span class="sr-only">Homepage</span>
      </NuxtLinkLocale>
      <nav class="ml-auto">
        <ul class="flex flex-wrap justify-end gap-x-6 lg:gap-x-14 gap-y-6 text-xl leading-none">
          <li>
            <ULink
              to="https://qtim.pro/"
              class="text-primary hover:text-highlighted"
              target="_blank"
            >Works</ULink>
          </li>
          <li>
            <ULink
              to="https://qtim.pro/"
              class="text-primary hover:text-highlighted"
              target="_blank"
            >About</ULink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-4">
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
          class="text-xl leading-none"
          as="nuxt-link"
          to="https://qtim.pro/"
          target="_blank"
          :ui="{
            base: 'py-4 px-8 rounded-full',
          }"
        >
          Let’s work
        </UButton>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed<DropdownMenuItem[]>(() =>
  locales.value.map(loc => ({
    label: loc.name ?? loc.code,
    icon: `i-custom-${loc.code}`,
    type: 'link',
    to: switchLocalePath(loc.code),
  })),
)

const currentLocale = computed(() =>
  locales.value.find(l => l.code === locale.value) ?? { code: 'ru', name: 'Русский' },
)
</script>
