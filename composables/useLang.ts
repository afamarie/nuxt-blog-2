export const useLang = () => {
  const { locale, locales } = useI18n()
  const switchPath = useSwitchLocalePath()

  const available = computed(() => locales.value.map(loc => ({
    label: loc.name ?? loc.code,
    icon: `i-custom-${loc.code}`,
    type: 'link',
    to: switchPath(loc.code),
    isCurrent: loc.code === locale.value,
  })) || [])

  return { available, locale, switchPath }
}
