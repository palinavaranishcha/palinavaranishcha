import { Link } from 'react-router-dom'

interface Painting {
  id: number
  number: string
  title: string
  src: string
}

const paintings: Painting[] = [
  { id: 1, number: '01', title: 'Untitled I',   src: '/images/paintings/painting-1.jpg' },
  { id: 2, number: '02', title: 'Untitled II',  src: '/images/paintings/painting-2.jpg' },
  { id: 3, number: '03', title: 'Untitled III', src: '/images/paintings/painting-3.jpg' },
  { id: 4, number: '04', title: 'Untitled IV',  src: '/images/paintings/painting-4.jpg' },
  { id: 5, number: '05', title: 'Untitled V',   src: '/images/paintings/painting-5.jpg' },
  { id: 6, number: '06', title: 'Untitled VI',  src: '/images/paintings/painting-6.jpg' },
  { id: 7, number: '07', title: 'Untitled VII', src: '/images/paintings/painting-7.jpg' },
]

export default function Work() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="hero-label">Contemporary Artist</p>
          <h1>
            Palina<br />
            Varanishcha
          </h1>
          <p className="hero-description">
            Contemporary artist and painter exploring color, form, emotion and the relationship
            between the inner world and the surrounding space.
          </p>
        </div>
      </section>

      <section className="works" id="work">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Selected works</p>
            <h2>Paintings</h2>
          </div>

          <div className="painting-grid">
            {paintings.map(painting => (
              <article key={painting.id} className="painting">
                <a href={painting.src} target="_blank" rel="noreferrer">
                  <div className="painting-image">
                    <img
                      src={painting.src}
                      alt={`${painting.title} — Painting by Palina Varanishcha`}
                      loading="lazy"
                    />
                  </div>
                </a>
                <div className="painting-info">
                  <span className="painting-number">{painting.number}</span>
                  <h3>{painting.title}</h3>
                  <p>Painting</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <p className="section-label">About the artist</p>
            <h2>
              Painting as a way<br />
              of seeing the world.
            </h2>
            <p>
              Palina Varanishcha is a contemporary artist and painter. Her practice explores color,
              form, atmosphere and personal experience through painting.
            </p>
            <Link to="/about" className="text-link">
              About Palina
            </Link>
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
