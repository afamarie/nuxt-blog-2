interface Post {
  id: number
  title: string
  body: string
}

interface FooterLink {
  id: string
  name: string
  url: string
}

interface Contact {
  name: string
  link?: string
  icon?: string
}
interface Address {
  id: string
  name: string
  contacts: Contact[]
}

export type { Post, FooterLink, Address }
