<template>
  <UPagination
    v-model:page="page"
    :total="total"
    :items-per-page="itemsPerPage"
    @update:page="$emit('update:page', $event)"
  >
    <template #first>
      <span />
    </template>
    <template #last>
      <span />
    </template>
    <template
      v-if="page === 1"
      #prev
    >
      <span />
    </template>
    <template
      v-if="page*itemsPerPage >= total"
      #next
    >
      <span />
    </template>
  </UPagination>
</template>

<script setup lang="ts">
const page = defineModel<number>({
  default: 1,
  type: Number,
})

defineProps<({
  total: number
  itemsPerPage: number
})>()

defineEmits<{
  (e: 'update:page', page: number): void
}>()
</script>
