export default defineAppConfig({
  ui: {
    colors: {
      primary: 'neutral',
      secondary: 'lilac',
    },
    container: {
      base: 'px-4 sm:px-6 md:px-14 lg:px-28',
    },
    card: {
      slots: {
        root: 'rounded-none',
        body: 'py-4 px-0 sm:p-0 bg-pink',
        footer: 'py-2 sm:py-4 px-0 sm:px-0',
      },
      variants: {
        variant: {
          solid: {
            root: 'bg-default text-primary',
          },
        },
      },
      defaultVariants: {
        variant: 'solid',
      },
    },
    pagination: {
      slots: {
        item: 'p-3 rounded-xl text-md cursor-pointer',
        prev: 'p-3 rounded-xl text-md cursor-pointer',
        next: 'p-3 rounded-xl text-md cursor-pointer',
        last: 'hidden',
        first: 'hidden',
      },
    },
  },
})
