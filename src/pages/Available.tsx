import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { paintings, isAvailable, type Painting } from '../data/paintings'

const EMAIL = 'palinavarani@gmail.com'
// Two rows per page: four columns on desktop, two at the 900px breakpoint (see style.css).
const TWO_COLUMN_QUERY = '(max-width: 900px)'

function usePageSize() {
  const [twoColumns, setTwoColumns] = useState(() => window.matchMedia(TWO_COLUMN_QUERY).matches)

  useEffect(() => {
    const mq = window.matchMedia(TWO_COLUMN_QUERY)
    const onChange = () => setTwoColumns(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return twoColumns ? 4 : 8
}

function AvailablePages({ works }: { works: Painting[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)
  const pageSize = usePageSize()

  const pages: Painting[][] = []
  for (let i = 0; i < works.length; i += pageSize) {
    pages.push(works.slice(i, i + pageSize))
  }

  // Pages are regrouped when the layout switches, so start again from the first one.
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 })
    setPage(0)
  }, [pageSize])

  // Distance between the left edges of two neighbouring pages (page width + gap).
  function step() {
    const items = trackRef.current?.children
    if (!items || items.length < 2) return 0
    return (items[1] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    function update() {
      const s = step()
      if (!track || !s) return
      setPage(Math.round(track.scrollLeft / s))
    }
    update()
    track.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      track.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [pages.length])

  function scroll(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: (page + direction) * step(), behavior: 'smooth' })
  }

  return (
    <section className="available-works">
      <div className="container">
        <div className="available-pages" ref={trackRef}>
          {pages.map((items, i) => (
            <div key={i} className="available-grid" aria-hidden={i !== page}>
              {items.map(p => (
                <article key={p.id} className="available-card">
                  <Link
                    to={`/paintings/${p.id}`}
                    className="available-card-image"
                    tabIndex={i === page ? 0 : -1}
                  >
                    <img src={p.src} alt={p.title} loading="lazy" />
                  </Link>
                  <h3>
                    <Link to={`/paintings/${p.id}`} tabIndex={i === page ? 0 : -1}>
                      {p.title}
                    </Link>
                  </h3>
                  {p.dimensions && <p>{p.dimensions}</p>}
                </article>
              ))}
            </div>
          ))}
        </div>

        {pages.length > 1 && (
          <div className="slider-controls">
            <button
              type="button"
              aria-label="Previous page"
              onClick={() => scroll(-1)}
              disabled={page === 0}
            >
              ‹
            </button>
            <span>
              {page + 1} / {pages.length}
            </span>
            <button
              type="button"
              aria-label="Next page"
              onClick={() => scroll(1)}
              disabled={page >= pages.length - 1}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default function Available() {
  const [searchParams] = useSearchParams()
  const preselected = searchParams.get('painting')
  const available = paintings.filter(isAvailable)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const paintingId = (form.elements.namedItem('painting') as HTMLSelectElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const painting = available.find(p => String(p.id) === paintingId)
    const subject = encodeURIComponent(`Artwork enquiry: ${painting?.title ?? paintingId}`)
    const body = encodeURIComponent(
      `Hi Palina,\n\nI am interested in "${painting?.title ?? paintingId}"${painting?.dimensions ? ` (${painting.dimensions})` : ''}.\n\nMy email: ${email}`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <main>
      <section className="page-hero page-hero--ruled">
        <div className="container">
          <h1>Available</h1>
          <h2>request to purchase</h2>
          {available.length === 0 ? (
            <p>
              No paintings are currently available for purchase. Please check back soon or{' '}
              <a href={`mailto:${EMAIL}`}>get in touch</a> directly.
            </p>
          ) : (
            <p>
              Choose a painting below and send a request. Clicking Send will open your mail app
              with a pre-filled message.
            </p>
          )}
        </div>
      </section>

      {available.length > 0 && (
        <>
          <AvailablePages works={available} />

          <section className="request-section">
            <div className="container">
              <h2 className="request-heading">Send a request</h2>
              <form className="purchase-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="painting">Painting</label>
                  <select
                    id="painting"
                    name="painting"
                    defaultValue={preselected ?? String(available[0].id)}
                  >
                    {available.map(p => (
                      <option key={p.id} value={String(p.id)}>
                        {p.title}{p.dimensions ? ` — ${p.dimensions}` : ''}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="email">Your email</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <button type="submit" className="form-submit">Send enquiry</button>
              </form>
            </div>
          </section>
        </>
      )}
    </main>
  )
}
