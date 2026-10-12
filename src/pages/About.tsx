import { useEffect, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { paintings } from '../data/paintings'

const photo = { src: 'images/paintings/myphoto.jpg', alt: 'Palina Varanishcha, contemporary artist' }

export default function About() {
  const trackRef = useRef<HTMLDivElement>(null)

  // The track holds three identical sets of paintings. Scrolling starts in the middle set and,
  // once it settles near either edge, jumps by exactly one set so the loop never runs out.
  function setWidth() {
    const items = trackRef.current?.children
    if (!items || items.length < paintings.length * 2) return 0
    return (items[paintings.length] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft
  }

  useLayoutEffect(() => {
    if (trackRef.current) trackRef.current.scrollLeft = setWidth()
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let timer: number
    function recenter() {
      const width = setWidth()
      if (!track || !width) return
      if (track.scrollLeft < width * 0.5) track.scrollLeft += width
      else if (track.scrollLeft > width * 1.5) track.scrollLeft -= width
    }
    function onScroll() {
      window.clearTimeout(timer)
      timer = window.setTimeout(recenter, 120)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.clearTimeout(timer)
      track.removeEventListener('scroll', onScroll)
    }
  }, [])

  function scroll(direction: 1 | -1) {
    const track = trackRef.current
    const item = track?.firstElementChild as HTMLElement | undefined
    if (!track || !item) return
    track.scrollBy({ left: direction * item.offsetWidth, behavior: 'smooth' })
  }

  // Continuous auto-scroll at a constant speed; paused while the pointer or focus is on the
  // carousel. Scroll snapping is disabled meanwhile, otherwise it fights the per-frame movement.
  useEffect(() => {
    const track = trackRef.current
    const carousel = track?.parentElement
    if (!track || !carousel) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const SPEED = 40 // px per second
    let paused = false
    let position = track.scrollLeft
    let last = performance.now()
    let frame = 0
    track.style.scrollSnapType = 'none'
    const tick = (now: number) => {
      const elapsed = Math.min(now - last, 100)
      last = now
      // Adopt movement made by the user (arrows, swipe) instead of overwriting it.
      if (Math.abs(track.scrollLeft - position) > 2) position = track.scrollLeft
      if (!paused) {
        position += (SPEED * elapsed) / 1000
        const width = setWidth()
        if (width && position > width * 1.5) position -= width
        // scrollLeft only takes whole pixels; the sub-pixel remainder is applied as a transform
        // (see .photo-carousel-item) so the motion stays smooth at low speeds.
        const whole = Math.floor(position)
        track.scrollLeft = whole
        track.style.setProperty('--frac', String(position - whole))
      }
      frame = window.requestAnimationFrame(tick)
    }
    frame = window.requestAnimationFrame(tick)
    const pause = () => { paused = true }
    const resume = () => {
      paused = false
      position = track.scrollLeft + Number(track.style.getPropertyValue('--frac') || 0)
    }
    carousel.addEventListener('mouseenter', pause)
    carousel.addEventListener('mouseleave', resume)
    carousel.addEventListener('focusin', pause)
    carousel.addEventListener('focusout', resume)
    return () => {
      window.cancelAnimationFrame(frame)
      track.style.scrollSnapType = ''
      track.style.removeProperty('--frac')
      carousel.removeEventListener('mouseenter', pause)
      carousel.removeEventListener('mouseleave', resume)
      carousel.removeEventListener('focusin', pause)
      carousel.removeEventListener('focusout', resume)
    }
  }, [])

  return (
    <main>
      <section className="about-page">
        <div className="container">
          <h1 className="about-name">Palina Varanishcha</h1>

          <div className="about-page-grid">
            <div className="about-text">
              <p className="section-label">About the artist</p>
              <p className="about-intro">
                Contemporary artist and painter exploring color, form, emotion and the relationship
                between the inner world and the surrounding space.
              </p>
              <p>
                My artistic practice is rooted in painting and in the exploration of color,
                atmosphere and personal experience. I am interested in the way an image can
                communicate emotions and ideas without relying on words.
              </p>
              <p>
                Through painting, I explore the relationship between shape, color and space,
                allowing each work to develop its own atmosphere and visual language.
              </p>
              <p>
                My work is an ongoing process of observation, experimentation and discovery. I am
                interested in creating paintings that invite the viewer to slow down, look closely
                and experience their own emotional response.
              </p>
              <Link to="/" className="text-link">
                View my work
              </Link>
            </div>

            <div className="about-photo">
              <img src={photo.src} alt={photo.alt} />
            </div>
          </div>

          <div className="about-carousel">
            <div className="photo-carousel">
              <div className="photo-carousel-track" ref={trackRef}>
                {[0, 1, 2].flatMap(copy =>
                  paintings.map(painting => (
                    <Link
                      key={`${copy}-${painting.id}`}
                      to={`/paintings/${painting.id}`}
                      className="photo-carousel-item"
                      aria-hidden={copy !== 1 || undefined}
                      tabIndex={copy === 1 ? undefined : -1}
                    >
                      <img src={painting.src} alt={painting.title} />
                    </Link>
                  ))
                )}
              </div>
              <button
                className="carousel-btn carousel-btn-prev"
                onClick={() => scroll(-1)}
                aria-label="Previous paintings"
              >
                {'\u2190'}
              </button>
              <button
                className="carousel-btn carousel-btn-next"
                onClick={() => scroll(1)}
                aria-label="Next paintings"
              >
                {'\u2192'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-preview">
        <div className="container">
          <p className="section-label">Contact</p>
          <h2>Interested in my work?</h2>
          <p>
            For exhibitions, collaborations, artwork enquiries or other questions, please get in
            touch.
          </p>
          <Link to="/contact" className="button">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  )
}
