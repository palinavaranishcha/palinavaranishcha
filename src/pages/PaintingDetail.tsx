import { Link, useParams } from 'react-router-dom'
import { paintings, isAvailable } from '../data/paintings'
import { collections } from '../data/collections'

const EMAIL = 'palinavarani@gmail.com'
const INSTAGRAM = 'https://www.instagram.com/palina.sol'

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
    <main className="painting-page">
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
              <h1 className="painting-detail-title">{painting.title}</h1>
              {painting.colors && (
                <p className="painting-detail-colors">{painting.colors}</p>
              )}
              {isAvailable(painting) && painting.price && (
                <p className="painting-detail-price">{painting.price} €</p>
              )}

              <div className="painting-detail-specs">
                {painting.medium && <p>{painting.medium}</p>}
                {painting.dimensions && <p>{painting.dimensions}</p>}
                {painting.year && <p>{painting.year}</p>}
              </div>

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

              <hr className="painting-detail-rule" />

              {isAvailable(painting) ? (
                <div className="painting-detail-inquire">
                  <p className="painting-detail-note">
                    for inquiries please use email or instagram direct message.
                  </p>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Inquiry: ${painting.title}`)}`}
                    className="painting-detail-link"
                  >
                    inquire via email
                  </a>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="painting-detail-link"
                  >
                    inquire via instagram
                  </a>
                  <p className="painting-detail-note">
                    certificate of authenticity included.
                    <br />
                    shipping worldwide.
                  </p>
                </div>
              ) : (
                <p className="painting-status">not available for purchase</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
