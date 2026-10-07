import { Link, useParams } from 'react-router-dom'
import { paintings } from '../data/paintings'
import { collections } from '../data/collections'

export default function CollectionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const collection = collections.find(c => c.slug === slug)
  const collectionPaintings = paintings.filter(p => p.collection === slug)

  if (!collection) {
    return (
      <main>
        <section className="works">
          <div className="container">
            <p>Collection not found.</p>
            <Link to="/collections" className="text-link">All collections</Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="works">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Collection</p>
            <h1 className="section-h1">{collection.name}</h1>
            {collection.description && (
              <p className="collection-description">{collection.description}</p>
            )}
          </div>

          <div className="painting-grid">
            {collectionPaintings.map(painting => (
              <article key={painting.id} className="painting">
                <Link to={`/paintings/${painting.id}`}>
                  <div className="painting-image">
                    <img
                      src={painting.src}
                      alt={`${painting.title} — Painting by Palina Varanishcha`}
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="painting-info">
                  <h3>{painting.title}</h3>
                  <p>Painting{painting.dimensions ? ` · ${painting.dimensions}` : ''}</p>
                  {painting.available && painting.price && (
                    <p className="painting-price">${painting.price}</p>
                  )}
                </div>
                {painting.available && (
                  <Link
                    to={`/available?painting=${painting.id}`}
                    className="text-link purchase-link"
                  >
                    Request to purchase →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
