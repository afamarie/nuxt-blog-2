<template>
  <ULink
    :to="localePath(link.url)"
    :target="link.target"
    class="text-primary hover:text-highlighted"
  >
    {{ $t(link.name) }}
  </ULink>
</template>

<script setup lang="ts">
import type { NavLink } from '~/types'

defineProps<{
  link: NavLink
}>()

const localePath = useLocalePath()
</script>
