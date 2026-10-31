import { Link, useParams } from 'react-router-dom'
import { paintings, paintingStatus, isAvailable, STATUS_LABELS, type PaintingStatus } from '../data/paintings'
import { collections } from '../data/collections'

const LEGEND_ORDER: PaintingStatus[] = ['unavailable', 'temporarily-unavailable', 'available']

export default function CollectionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const collection = collections.find(c => c.slug === slug)
  const collectionPaintings = paintings.filter(p => p.collection === slug)

  if (!collection) {
    return (
      <main>
        <section className="page-hero">
          <div className="container">
            <p>Collection not found.</p>
            <Link to="/collections" className="text-link">all collections</Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Collection</h1>
          <h2>“{collection.name}”</h2>
          {collection.description && <p>{collection.description}</p>}
        </div>
      </section>

      <section className="collection-detail">
        <div className="container collection-detail-grid">
          <ul className="status-legend">
            {LEGEND_ORDER.map(status => (
              <li key={status}>
                <span className={`status-dot status-dot--${status}`} aria-hidden="true" />
                {STATUS_LABELS[status]}
              </li>
            ))}
          </ul>

          <div className="collection-paintings">
            {collectionPaintings.map(painting => {
              const status = paintingStatus(painting)
              return (
                <article key={painting.id} className="collection-painting">
                  <Link to={`/paintings/${painting.id}`}>
                    <img
                      src={painting.src}
                      alt={`${painting.title} — Painting by Palina Varanishcha`}
                      loading="lazy"
                    />
                  </Link>
                  <div className="collection-painting-info">
                    <h3>
                      <span
                        className={`status-dot status-dot--${status}`}
                        title={STATUS_LABELS[status]}
                      />
                      {painting.title}
                      <span className="visually-hidden"> ({STATUS_LABELS[status]})</span>
                    </h3>
                    {painting.dimensions && <p>{painting.dimensions}</p>}
                    {isAvailable(painting) && (
                      <Link to={`/available?painting=${painting.id}`} className="text-link">
                        request to purchase
                      </Link>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
