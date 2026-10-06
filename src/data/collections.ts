export interface Collection {
  slug: string
  name: string
  description: string
  coverSrc: string
}

export const collections: Collection[] = [
  {
    slug: 'first-collection',
    name: 'First Collection',
    description: '',
    coverSrc: '/images/paintings/painting-1.jpg',
  },
]
