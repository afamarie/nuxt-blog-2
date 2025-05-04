<!-- eslint-disable vue/no-lone-template -->
<template>
  <UPagination
    v-model:page="page"
    :total="total"
    :items-per-page="itemsPerPage"
    variant="soft"
    active-color="primary"
    :ui="{ list: 'gap-2' }"
  >
    <template
      v-if="page === 1"
      #prev
    >
      <template />
    </template>
    <template
      v-if="page*itemsPerPage >= total"
      #next
    >
      <template />
    </template>
  </UPagination>
</template>

<script setup lang="ts">
const props = defineProps<({
  total: number
  itemsPerPage: number
})>()

const page = defineModel<number>({
  default: 1,
  type: Number,
})
</script>
