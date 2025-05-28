<template>
  <header class="app-header">
    <UContainer class="flex justify-between items-center flex-wrap gap-y-6 gap-x-8 lg:gap-x-23 py-6 lg:py-8 lg:px-10">
      <LogoLink class="mr-auto" />
      <MobileMenu :links="links" />
      <nav class="ml-auto max-lg:hidden">
        <ul class="flex flex-wrap justify-end gap-x-6 lg:gap-x-14 gap-y-6 text-xl leading-none">
          <li
            v-for="link in links"
            :key="link.id"
          >
            <NavLink :link="link" />
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-4 ml-auto max-lg:hidden">
        <ThemeSwitcher />
        <ClientOnly>
          <UDropdownMenu
            :items="(lang.available.value as DropdownMenuItem[])"
            :ui="{
              itemLeadingIcon: 'size-6',
            }"
          >
            <UButton
              variant="outline"
              :icon="langIcon"
              :label="$t('accessibility.lang')"
              :ui="{
                label: 'sr-only',
                base: 'p-3.5 rounded-full ring-mutedgrey',
              }"
            />
          </UDropdownMenu>
          <template #fallback>
            <USkeleton class="bg-primary-400 size-12 rounded-full" />
          </template>
        </ClientOnly>
        <LoginBtn />
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

import LogoLink from '@/components/ui/LogoLink.vue'
import ThemeSwitcher from '@/components/ui/ThemeSwitcher.vue'
import NavLink from '@/components/ui/NavLink.vue'
import LoginBtn from '@/components/ui/LoginBtn.vue'
import MobileMenu from '@/components/layout/MobileMenu.vue'
import { ClientOnly } from '#components'

const lang = useLang()

const links = [
  { id: 'home', name: 'home', url: 'home' },
  { id: 'about', name: 'about_us', url: 'about' },
  { id: 'blog', name: 'blog', url: 'blog' },
  { id: 'contact', name: 'contact', url: 'contact' },
]

const langIcon = computed<string>(() => {
  return 'i-custom-' + lang.locale.value
})
</script>
