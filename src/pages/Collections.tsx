import { Link } from 'react-router-dom'
import { collections } from '../data/collections'

export default function Collections() {
  return (
    <main>
      <section className="collections-page">
        <div className="container">
          <p className="section-label">Works</p>
          <h1>Collections</h1>
          <div className="collection-grid">
            {collections.map(col => (
              <article key={col.slug} className="collection-card">
                <Link to={`/collections/${col.slug}`}>
                  <div className="collection-image">
                    <img src={col.coverSrc} alt={col.name} loading="lazy" />
                  </div>
                  <div className="collection-info">
                    <h2>{col.name}</h2>
                    {col.description && <p>{col.description}</p>}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
