import { Link, useParams } from 'react-router-dom'
import { paintings } from '../data/paintings'
import { collections } from '../data/collections'

export default function PaintingDetail() {
  const { id } = useParams<{ id: string }>()
  const painting = paintings.find(p => p.id === Number(id))

  if (!painting) {
    return (
      <main>
        <section className="painting-detail">
          <div className="container">
            <p>Painting not found.</p>
            <Link to="/" className="text-link">Back to work</Link>
          </div>
        </section>
      </main>
    )
  }

  const collection = collections.find(c => c.slug === painting.collection)

  return (
    <main>
      <section className="painting-detail">
        <div className="container">
          <div className="painting-detail-grid">
            <div className="painting-detail-image">
              <img
                src={painting.src}
                alt={`${painting.title} — Painting by Palina Varanishcha`}
              />
            </div>

            <div className="painting-detail-info">
              <span className="painting-number">{painting.number}</span>
              <h1 className="painting-detail-title">{painting.title}</h1>
              {painting.dimensions && (
                <p className="painting-dimensions">{painting.dimensions}</p>
              )}
              {collection && (
                <p className="painting-collection-link">
                  <Link to={`/collections/${collection.slug}`} className="text-link">
                    {collection.name}
                  </Link>
                </p>
              )}
              {painting.description && (
                <p className="painting-description">{painting.description}</p>
              )}
              {painting.available ? (
                <Link to={`/available?painting=${painting.id}`} className="button">
                  Request to purchase
                </Link>
              ) : (
                <p className="painting-status">Not available for purchase</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
