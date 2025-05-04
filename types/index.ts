interface Post {
  id: string
  createdAt: string
  title: string
  preview: string
  image: string
  description: string
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
