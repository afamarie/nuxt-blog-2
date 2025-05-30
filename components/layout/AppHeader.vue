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
        <UDropdownMenu
          :items="localeItems"
          :ui="{
            itemLeadingIcon: 'size-6',
          }"
        >
          <UButton
            variant="outline"
            :icon="`i-custom-${locale}`"
            :label="$t('accessibility.lang')"
            :ui="{
              label: 'sr-only',
              base: 'p-3.5 rounded-full ring-mutedgrey',
            }"
          />
        </UDropdownMenu>
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

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const links = [
  { id: 'home', name: 'home', url: 'home' },
  { id: 'about', name: 'about_us', url: 'about' },
  { id: 'blog', name: 'blog', url: 'blog' },
  { id: 'contact', name: 'contact', url: 'contact' },
]

const localeItems = computed<DropdownMenuItem[]>(() => locales.value.map(loc => (
  {
    label: loc.name ?? loc.code,
    icon: 'i-custom-' + loc.code,
    type: 'link',
    to: switchLocalePath(loc.code),
  }
)))

const localeIcon = computed(() => 'i-custom-' + locale.value)
</script>
