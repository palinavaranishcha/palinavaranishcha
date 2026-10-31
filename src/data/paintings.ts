export type PaintingStatus = 'available' | 'unavailable' | 'temporarily-unavailable'

export interface Painting {
  id: number
  number: string
  title: string
  src: string
  collection?: string
  // Omitted means 'unavailable'.
  status?: PaintingStatus
  colors?: string
  medium?: string
  dimensions?: string
  year?: number
  description?: string
  price?: number
}

export const STATUS_LABELS: Record<PaintingStatus, string> = {
  'unavailable': 'not available',
  'temporarily-unavailable': 'temporarily not available',
  'available': 'available',
}

export function paintingStatus(painting: Painting): PaintingStatus {
  return painting.status ?? 'unavailable'
}

export function isAvailable(painting: Painting): boolean {
  return painting.status === 'available'
}

export const paintings: Painting[] = [
  { id: 1, number: '01', title: 'Untitled I',   src: 'images/paintings/painting-1.jpg', collection: 'first-collection', status: 'available', dimensions: '60 x 80 cm', description: 'test description', price: 500 },
  { id: 2, number: '02', title: 'Untitled II',  src: 'images/paintings/painting-2.jpg', collection: 'first-collection', status: 'temporarily-unavailable', description: 'test description' },
  { id: 3, number: '03', title: 'Untitled III', src: 'images/paintings/painting-3.jpg', collection: 'first-collection', status: 'available', dimensions: '50 x 70 cm' },
  { id: 4, number: '04', title: 'Untitled IV',  src: 'images/paintings/painting-4.jpg', collection: 'second-collection' },
  { id: 5, number: '05', title: 'Untitled V',   src: 'images/paintings/painting-5.jpg', collection: 'second-collection', status: 'available', dimensions: '40 x 50 cm' },
  { id: 6, number: '06', title: 'Untitled VI',  src: 'images/paintings/painting-6.jpg', collection: 'third-collection', status: 'temporarily-unavailable' },
  { id: 7, number: '07', title: 'Untitled VII', src: 'images/paintings/painting-7.jpg', collection: 'third-collection' },
  // Mock entries reusing existing images — replace with real paintings.
  { id: 8,  number: '08', title: 'Untitled VIII', src: 'images/paintings/painting-2.jpg', collection: 'first-collection',  status: 'available', dimensions: '70 x 100 cm', description: 'test description', price: 750 },
  { id: 9,  number: '09', title: 'Untitled IX',   src: 'images/paintings/painting-4.jpg', collection: 'second-collection', status: 'available', dimensions: '50 x 60 cm', description: 'test description', price: 450 },
  { id: 10, number: '10', title: 'Untitled X',    src: 'images/paintings/painting-6.jpg', collection: 'third-collection',  status: 'available', dimensions: '80 x 80 cm', description: 'test description', price: 900 },
  { id: 11, number: '11', title: 'Untitled XI',   src: 'images/paintings/painting-7.jpg', collection: 'third-collection',  status: 'available', dimensions: '40 x 40 cm',  price: 300 },
  { id: 12, number: '12', title: 'Untitled XII',  src: 'images/paintings/painting-3.jpg', collection: 'second-collection', status: 'available', dimensions: '60 x 90 cm',  price: 650 },
  { id: 13, number: '13', title: 'Untitled XIII', src: 'images/paintings/painting-1.jpg', collection: 'first-collection',  status: 'available', dimensions: '50 x 50 cm',  price: 400 },
  { id: 14, number: '14', title: 'Untitled XIV',  src: 'images/paintings/painting-5.jpg', collection: 'second-collection', status: 'available', dimensions: '60 x 80 cm',  price: 550 },
  { id: 15, number: '15', title: 'Untitled XV',   src: 'images/paintings/painting-6.jpg', collection: 'third-collection',  status: 'available', dimensions: '30 x 40 cm',  price: 250 },
  { id: 16, number: '16', title: 'Untitled XVI',  src: 'images/paintings/painting-2.jpg', collection: 'first-collection',  status: 'available', dimensions: '90 x 120 cm', price: 1200 },
  { id: 17, number: '17', title: 'Untitled XVII', src: 'images/paintings/painting-7.jpg', collection: 'third-collection',  status: 'available', dimensions: '40 x 60 cm',  price: 350 },
  { id: 18, number: '18', title: 'Untitled XVIII', src: 'images/paintings/painting-4.jpg', collection: 'second-collection', status: 'available', dimensions: '70 x 70 cm', price: 700 },
  { id: 19, number: '19', title: 'Untitled XIX',  src: 'images/paintings/painting-3.jpg', collection: 'first-collection',  status: 'available', dimensions: '50 x 70 cm',  price: 500 },
  { id: 20, number: '20', title: 'Untitled XX',   src: 'images/paintings/painting-1.jpg', collection: 'second-collection', status: 'available', dimensions: '60 x 60 cm',  price: 600 },
  { id: 21, number: '21', title: 'Untitled XXI',  src: 'images/paintings/painting-5.jpg', collection: 'third-collection',  status: 'available', dimensions: '80 x 100 cm', price: 950 },
  { id: 22, number: '22', title: 'Untitled XXII', src: 'images/paintings/painting-6.jpg', collection: 'first-collection',  status: 'available', dimensions: '40 x 50 cm',  price: 320 },
  { id: 23, number: '23', title: 'Untitled XXIII', src: 'images/paintings/painting-2.jpg', collection: 'second-collection', status: 'available', dimensions: '50 x 60 cm', price: 480 },
  { id: 24, number: '24', title: 'Untitled XXIV', src: 'images/paintings/painting-7.jpg', collection: 'third-collection',  status: 'available', dimensions: '100 x 120 cm', price: 1500 },
]
