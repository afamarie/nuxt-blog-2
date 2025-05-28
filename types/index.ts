interface Post {
  id: number
  title: string
  body: string
  img: string
}

interface NavLink {
  id: string
  name: string
  target?: '_self' | '_blank'
  url: string
}

interface Contact {
  name: string
  url?: string
  target?: '_self' | '_blank'
  icon?: string
}
interface Address {
  id: string
  name: string
  contacts: Contact[]
}

export type { Post, NavLink, Address }
