export const useQueryPagination = (page: Ref<number>) => {
  const route = useRoute()

  watch(
    () => route.query.page,
    (newPage) => {
      if (page.value !== Number(newPage) && newPage !== undefined) {
        page.value = Number(newPage) || 1
      }
    },
    { immediate: true },
  )
}
