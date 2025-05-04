<!-- eslint-disable vue/no-lone-template -->
<template>
  <UPagination
    v-model:page="page"
    :total="total"
    :items-per-page="itemsPerPage"
    :to="to"
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
  hash?: string
})>()

const page = defineModel<number>({
  default: 1,
  type: Number,
})

function to(page: number) {
  return {
    query: { page },
    hash: props.hash ? '#' + props?.hash : null,
  }
}
</script>
