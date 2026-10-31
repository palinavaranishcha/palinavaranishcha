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
    description: 'Collection description',
    coverSrc: 'images/paintings/painting-1.jpg',
  },
  {
    slug: 'second-collection',
    name: 'Second Collection',
    description: 'Collection description',
    coverSrc: 'images/paintings/painting-4.jpg',
  },
  {
    slug: 'third-collection',
    name: 'Third Collection',
    description: 'Collection description',
    coverSrc: 'images/paintings/painting-6.jpg',
  },
]
