import { Link } from 'react-router-dom'
import { paintings } from '../data/paintings'

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
                  <span className="painting-number">{painting.number}</span>
                  <h3>{painting.title}</h3>
                  <p>Painting</p>
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
