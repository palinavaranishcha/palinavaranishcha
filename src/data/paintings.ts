export interface Painting {
  id: number
  number: string
  title: string
  src: string
  collection?: string
  available?: boolean
  dimensions?: string
  description?: string
  price?: number
}

export const paintings: Painting[] = [
  { id: 1, number: '01', title: 'Untitled I',   src: '/images/paintings/painting-1.jpg', collection: 'first-collection', available: true, dimensions: '60 × 80 cm', price: 500 },
  { id: 2, number: '02', title: 'Untitled II',  src: '/images/paintings/painting-2.jpg', collection: 'first-collection' },
  { id: 3, number: '03', title: 'Untitled III', src: '/images/paintings/painting-3.jpg', collection: 'first-collection', available: true, dimensions: '50 × 70 cm' },
  { id: 4, number: '04', title: 'Untitled IV',  src: '/images/paintings/painting-4.jpg', collection: 'first-collection' },
  { id: 5, number: '05', title: 'Untitled V',   src: '/images/paintings/painting-5.jpg', collection: 'first-collection' },
  { id: 6, number: '06', title: 'Untitled VI',  src: '/images/paintings/painting-6.jpg', collection: 'first-collection' },
  { id: 7, number: '07', title: 'Untitled VII', src: '/images/paintings/painting-7.jpg', collection: 'first-collection' },
]
