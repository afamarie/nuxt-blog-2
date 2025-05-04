<template>
  <footer class="app-footer pt-12 lg:pt-33 pb-7.5 bg-secondary-400">
    <UContainer class="grid md:grid-cols-3 gap-8 md:gap-y-10">
      <p class="md:col-span-2">
        Is there a project?
      </p>
      <NuxtLink
        class="md:col-span-2 text-6xl md:text-8xl lg:text-[112px] leading-none underline decoration-1 underline-offset-[0.75rem] hover:text-lilac transition"
        to="https://qtim.pro/"
        target="_blank"
      >Let’s work together</NuxtLink>
      <address class="not-italic md:pt-3 md:col-span-1 md:max-w-38">
        <ul class="grid gap-4 md:gap-7">
          <li
            v-for="address in addresses"
            :key="address.id"
          >
            <p class="mb-2">
              {{ address.name }}
            </p>
            <ul>
              <li
                v-for="(contact, i) in address.contacts"
                :key="i"
              >
                <NuxtLink
                  v-if="contact.link"
                  :to="contact.link"
                  target="_blank"
                  class="inline-block hover:[&>.name]:underline hover:[&>.icon]:bg-lilac"
                >
                  <span class="name decoration-1">{{ contact.name }}</span>
                  <span
                    v-if="contact.icon"
                    class="icon flex items-center justify-center mt-2 size-8 bg-primary rounded-full transition-colors"
                  >
                    <UIcon
                      class="size-3"
                      :name="contact.icon"
                    />
                  </span>
                </NuxtLink>
                <span v-else>{{ contact.name }}</span>
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
              <ULink
                class="underline decoration-1 underline-offset-[0.25rem] hover:text-lilac transition"
                :to="link.url"
                target="_blank"
              >{{ link.name }}</ULink>
            </li>
          </ul>
        </li>
        <li class="md:order-3 md:col-start-3">
          <ul class="md:flex md:flex-wrap md:justify-end gap-y-2 md:gap-x-4 lg:gap-x-8">
            <li
              v-for="link in business"
              :key="link.id"
              class="max-md:mt-3"
            >
              <NuxtLinkLocale
                class="underline decoration-1 underline-offset-[0.25rem] hover:text-lilac transition"
                :to="link.url"
                target="_blank"
              >
                {{ link.name }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </li>
        <li class="flex md:relative md:top-7.5 md:order-2 md:col-start-2 md:aspect-[2/1]">
          <ULink
            to="https://qtim.pro/"
            target="_blank"
            class="flex-grow mt-10 md:mt-16 text-ellipsis leading-none text-center px-10 py-4 rounded-3xl md:content-end md:p-7.5 text-3xl lg:text-[2rem] md:w-full md:h-full bg-primary hover:bg-lightblack text-white hover:text-lilac-400 md:rounded-t-full"
          >
            Go
          </ULink>
        </li>
      </ul>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
import type { FooterLink, Address } from '~/types'

const social: FooterLink[] = [
  {
    id: '1',
    name: 'Facebook',
    url: 'https://www.facebook.com/',
  },
  {
    id: '2',
    name: 'Instagram',
    url: 'https://www.instagram.com/',
  },
  {
    id: '3',
    name: 'Telegram',
    url: 'https://t.me/qtim71',
  },
]

const business: FooterLink[] = [
  {
    id: '1',
    name: 'Behance',
    url: 'https://www.behance.net/',
  },
  {
    id: '2',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
  },
  {
    id: '3',
    name: 'Privacy Policy',
    url: '/policy',
  },
]

const addresses: Address[] = [
  {
    id: '1',
    name: 'For all questions',
    contacts: [
      {
        name: '+7 (920) 278—00—68',
        link: 'tel:79202780068',
      },
      {
        name: 'qtim@agency.com',
        link: 'mailto:qtim@agency.com',
      },
    ],
  },
  {
    id: '2',
    name: 'Office in Russia',
    contacts: [
      {
        name: '139 Ruben Station Lake Drew, NM 52678',
        link: 'https://maps.app.goo.gl/A65SXs8BPStroRfd6',
        icon: 'custom-location',
      },
    ],
  },
  {
    id: '3',
    name: 'Office in Dubai',
    contacts: [
      {
        name: '139 Ruben Station Lake Drew, NM 52678',
        link: 'https://maps.app.goo.gl/A65SXs8BPStroRfd6',
        icon: 'custom-location',
      },
    ],
  },
]
</script>
