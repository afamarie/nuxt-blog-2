export const useTheme = () => {
  const nuxtApp = useNuxtApp()

  const toggleMode = (): void => {
    nuxtApp.$colorMode.preference = nuxtApp.$colorMode.value === 'dark' ? 'light' : 'dark'
  }

  const icon = computed<string>(() => {
    return nuxtApp.$colorMode.value === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun'
  })

  return { toggleMode, icon }
}
