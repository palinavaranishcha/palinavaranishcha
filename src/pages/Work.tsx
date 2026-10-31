import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { paintings, isAvailable, type Painting } from '../data/paintings'
import { collections } from '../data/collections'

const SLIDE_COUNT = 5
const SLIDE_INTERVAL_MS = 5000

function pickRandomAvailable(count: number): Painting[] {
  const pool = paintings.filter(isAvailable)
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, count)
}

function formatDetails(painting: Painting): string {
  return [painting.dimensions, painting.price ? `${painting.price} €` : null]
    .filter(Boolean)
    .join('  ·  ')
}

function HeroCarousel({ slides }: { slides: Painting[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return
    const timer = window.setTimeout(
      () => setIndex(i => (i + 1) % slides.length),
      SLIDE_INTERVAL_MS,
    )
    return () => window.clearTimeout(timer)
  }, [index, slides.length])

  if (slides.length === 0) return null

  const go = (next: number) => setIndex((next + slides.length) % slides.length)
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <section className="hero-carousel" aria-roledescription="carousel" aria-label="Available paintings">
      {slides.map((painting, i) => (
        <Link
          key={painting.id}
          to={`/paintings/${painting.id}`}
          className={`hero-slide${i === index ? ' active' : ''}`}
          aria-hidden={i !== index}
          tabIndex={i === index ? 0 : -1}
        >
          <img src={painting.src} alt={`${painting.title} — Painting by Palina Varanishcha`} />
          <div className="hero-slide-info">
            <h2>{painting.title}</h2>
            <p>{formatDetails(painting)}</p>
          </div>
        </Link>
      ))}

      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="hero-arrow hero-arrow-prev"
            aria-label="Previous painting"
            onClick={() => go(index - 1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="hero-arrow hero-arrow-next"
            aria-label="Next painting"
            onClick={() => go(index + 1)}
          >
            ›
          </button>
          <span className="hero-counter">
            {pad(index + 1)} / {pad(slides.length)}
          </span>
          <div className="hero-dots">
            {slides.map((painting, i) => (
              <button
                key={painting.id}
                type="button"
                className={i === index ? 'active' : ''}
                aria-label={`Show ${painting.title}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

function AvailableSlider({ works }: { works: Painting[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [canScroll, setCanScroll] = useState(false)

  // Distance between the left edges of two neighbouring cards.
  function step() {
    const items = trackRef.current?.children
    if (!items || items.length < 2) return 0
    return (items[1] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    function update() {
      if (!track) return
      const max = track.scrollWidth - track.clientWidth
      const s = step()
      setCanScroll(max > 1)
      setAtStart(track.scrollLeft <= 1)
      setAtEnd(track.scrollLeft >= max - 1)
      // Once the track can't scroll any further, the last card is the "current" one.
      setCurrent(track.scrollLeft >= max - 1 ? works.length - 1 : s ? Math.round(track.scrollLeft / s) : 0)
    }
    update()
    track.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      track.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [works.length])

  function scroll(direction: 1 | -1) {
    trackRef.current?.scrollBy({ left: direction * step(), behavior: 'smooth' })
  }

  return (
    <section className="available-slider" aria-label="Available paintings">
      <div className="container">
        <div className="slider-heading">
          <h2>Available</h2>
        </div>

        <div className="slider-track" ref={trackRef}>
          {works.map(painting => (
            <article key={painting.id} className="slider-card">
              <Link to={`/paintings/${painting.id}`}>
                <div className="slider-card-image">
                  <img
                    src={painting.src}
                    alt={`${painting.title} — Painting by Palina Varanishcha`}
                    loading="lazy"
                  />
                </div>
                <h3>
                  {painting.title}
                  {painting.dimensions ? `, ${painting.dimensions}` : ''}
                </h3>
                {painting.price && <p>{painting.price} €</p>}
              </Link>
            </article>
          ))}
        </div>
        <Link to="/available" className="section-link">
          all available
        </Link>
        {canScroll && (
          <div className="slider-controls">
            <button
              type="button"
              aria-label="Previous painting"
              onClick={() => scroll(-1)}
              disabled={atStart}
            >
              ‹
            </button>
            <span>
              {current + 1} / {works.length}
            </span>
            <button
              type="button"
              aria-label="Next painting"
              onClick={() => scroll(1)}
              disabled={atEnd}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default function Work() {
  const [heroSlides] = useState(() => pickRandomAvailable(SLIDE_COUNT))
  // Newest first, like a "new in" shelf.
  const availableWorks = paintings.filter(isAvailable).sort((a, b) => b.id - a.id)

  return (
    <main>
      <HeroCarousel slides={heroSlides} />

      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <h2>The story</h2>
            <p>
              Palina Varanishcha is a contemporary artist and painter. Her practice explores color,
              form, atmosphere and personal experience through painting.
            </p>
            <Link to="/about" className="button">
              More about Palina
            </Link>
          </div>
        </div>
      </section>

      {availableWorks.length > 0 && <AvailableSlider works={availableWorks} />}

      <section className="collections-preview">
        <div className="container">
          <div className="section-heading">
            <h2>Collections</h2>
          </div>
          <div className="collection-grid">
            {collections.map(col => (
              <article key={col.slug} className="collection-card">
                <Link to={`/collections/${col.slug}`}>
                  <div className="collection-image">
                    <img src={col.coverSrc} alt={col.name} loading="lazy" />
                  </div>
                  <div className="collection-info">
                    <h3>{col.name}</h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <Link to="/collections" className="section-link">
            all collections
          </Link>
        </div>
      </section>

      <section className="contact-preview">
        <div className="container">
          <h2>Looking for a personalised collectible art?</h2>
          <p>
            I am open to creating commissioned work. I have already completed some projects and
            would be glad to make a unique piece for you.
          </p>
          <Link to="/contact" className="button button-solid">
            Find out more
          </Link>
        </div>
      </section>
    </main>
  )
}
