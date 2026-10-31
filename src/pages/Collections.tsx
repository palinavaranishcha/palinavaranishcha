import { Link } from 'react-router-dom'
import { collections } from '../data/collections'

export default function Collections() {
  return (
    <main>
      <section className="page-hero page-hero--ruled">
        <div className="container">
          <h1>Collections</h1>
          <p>
            Series of paintings grouped by theme. Each collection explores its own atmosphere,
            colour and visual language.
          </p>
        </div>
      </section>

      {collections.map(col => (
        <article key={col.slug} className="collection-row">
          <Link to={`/collections/${col.slug}`} className="collection-row-image">
            <img src={col.coverSrc} alt={col.name} loading="lazy" />
          </Link>
          <div className="collection-row-info">
            <h2>{col.name}</h2>
            {col.description && <p>{col.description}</p>}
            <Link to={`/collections/${col.slug}`} className="text-link">
              view collection
            </Link>
          </div>
        </article>
      ))}
    </main>
  )
}
