<template>
  <USlideover
    v-model:open="open"
    class="mobile-menu lg:hidden"
    side="left"
  >
    <UButton
      variant="soft"
      icon="i-heroicons-bars-3"
    >
      <span class="sr-only">{{ $t('accessibility.open') }}</span>
    </UButton>
    <template #content>
      <UContainer
        as="nav"
        class="flex flex-col flex-grow"
      >
        <div
          class="py-6 border-b border-mutedgrey flex items-center justify-between gap-6"
        >
          <LogoLink />
          <UButton
            class="ml-auto"
            icon="i-heroicons-x-mark"
            variant="link"
            @click="open = false"
          >
            <span class="sr-only">Close.</span>
          </UButton>
        </div>
        <ul class="py-6">
          <li
            v-for="link in links"
            :key="link.id"
            class="mb-4 first:mt-0 last:mb-0"
          >
            <NavLink
              :link="link"
              @click="open = false"
            />
          </li>
        </ul>
        <LoginBtn />
        <div
          class="mt-auto py-6 flex justify-between border-t border-mutedgrey"
        >
          <ul class="flex flex-wrap gap-4">
            <li
              v-for="item in lang.available.value"
              :key="item.label"
            >
              <UButton
                variant="outline"
                :icon="item.icon"
                :label="item.label"
                :ui="{
                  label: 'sr-only',
                  base: 'p-3 rounded-full' + (item.isCurrent ? ' bg-primary text-inverted' : ' ring-mutedgrey'),
                  leadingIcon: 'size-5',
                }"
                :to="item.to"
              />
            </li>
          </ul>
          <ThemeSwitcher />
        </div>
      </UContainer>
    </template>
  </USlideover>
</template>

<script setup lang="ts">
import type { NavLink } from '~/types'

const LogoLink = defineAsyncComponent(() => import('@/components/ui/LogoLink.vue'))
const NavLink = defineAsyncComponent(() => import('@/components/ui/NavLink.vue'))
const LoginBtn = defineAsyncComponent(() => import('@/components/ui/LoginBtn.vue'))
const ThemeSwitcher = defineAsyncComponent(() => import('@/components/ui/ThemeSwitcher.vue'))

defineProps<{
  links: NavLink[]
}>()

const open = ref<boolean>(false)
const lang = useLang()
</script>
