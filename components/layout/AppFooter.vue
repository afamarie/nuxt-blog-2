<template>
  <footer class="app-footer pt-12 lg:pt-33 pb-7.5 bg-secondary">
    <UContainer class="grid md:grid-cols-3 gap-8 md:gap-y-10">
      <p class="md:col-span-2">
        {{ $t('got_a_story') }}
      </p>
      <NuxtLink
        class="self-start md:col-span-2 text-6xl md:text-8xl lg:text-[112px] leading-none underline decoration-1 underline-offset-[0.75rem] hover:text-muted transition"
        to="#"
      >{{ $t('become_author') }}
      </NuxtLink>
      <address class="not-italic md:pt-3 md:col-span-1 md:self-center">
        <ul class="grid gap-4 md:gap-7">
          <li
            v-for="address in addresses"
            :key="address.id"
          >
            <p class="mb-2">
              {{ $t(address.name) }}
            </p>
            <ul>
              <li
                v-for="(contact, i) in address.contacts"
                :key="i"
              >
                <NuxtLink
                  v-if="contact.url"
                  :to="contact.url"
                  :target="contact.target"
                  class="inline-block hover:[&>.name]:underline hover:[&>.icon]:bg-muted"
                >
                  <span class="name decoration-1">{{ $t(contact.name) }}</span>
                  <span
                    v-if="contact.icon"
                    class="icon flex items-center justify-center mt-2 size-8 bg-primary text-secondary rounded-full transition-colors"
                  >
                    <UIcon
                      class="size-3"
                      :name="contact.icon"
                    />
                  </span>
                </NuxtLink>
                <span v-else>{{ $t(contact.name) }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </address>
      <ul class="items-end justify-between md:col-span-full md:grid md:gap-8 lg:gap-17 md:grid-cols-3">
        <li class="md:order-1">
          <ul class="md:flex md:flex-wrap gap-y-2 md:gap-x-4 lg:gap-x-8">
            <li
              v-for="link in social"
              :key="link.id"
              class="max-md:mt-3"
            >
              <NuxtLinkLocale
                class="underline decoration-1 underline-offset-[0.25rem] hover:text-muted transition"
                :to="link.url"
                :target="link.target"
              >
                {{ $t(link.name) }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </li>
        <li class="md:order-3 md:col-start-3">
          <ul class="md:flex md:flex-wrap md:justify-end md:text-right gap-y-2 md:gap-x-4 lg:gap-x-8">
            <li
              v-for="link in business"
              :key="link.id"
              class="max-md:mt-3"
            >
              <NuxtLinkLocale
                class="underline decoration-1 underline-offset-[0.25rem] hover:text-muted transition"
                :to="link.url"
                :target="link.target"
              >
                {{ $t(link.name) }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </li>
        <li class="flex md:relative md:top-7.5 md:order-2 md:col-start-2 md:aspect-[2/1]">
          <NuxtLinkLocale
            to="/"
            class="flex-grow mt-10 md:mt-16 text-ellipsis leading-none text-center px-10 py-4 rounded-3xl md:content-end md:p-7.5 text-3xl lg:text-[2rem] md:w-full md:h-full text-inverted bg-primary hover:bg-inverted hover:scale-105 md:rounded-t-full transition"
          >
            Go
          </NuxtLinkLocale>
        </li>
      </ul>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
import type { NavLink, Address } from '~/types'

const social: NavLink[] = [
  {
    id: '1',
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    target: '_blank',
  },
  {
    id: '2',
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    target: '_blank',
  },
  {
    id: '3',
    name: 'Telegram',
    url: 'https://t.me/',
    target: '_blank',
  },
]

const business: NavLink[] = [
  {
    id: '1',
    name: 'Behance',
    url: 'https://www.behance.net/',
    target: '_blank',
  },
  {
    id: '2',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    target: '_blank',
  },
  {
    id: '3',
    name: 'privacy_policy',
    url: 'policy',
    target: '_self',
  },
]

const addresses: Address[] = [
  {
    id: '1',
    name: 'questions',
    contacts: [
      {
        name: '+0 (000) 000—00—00',
        url: 'tel:0000000000',
        target: '_blank',
      },
      {
        name: 'email@email.com',
        url: 'mailto:email@email.com',
        target: '_blank',
      },
    ],
  },
  {
    id: '2',
    name: 'editors_office',
    contacts: [
      {
        name: 'Fascination street 89',
        url: 'https://www.google.com/maps',
        icon: 'gravity-ui:location-arrow',
        target: '_blank',
      },
    ],
  },
]
</script>
