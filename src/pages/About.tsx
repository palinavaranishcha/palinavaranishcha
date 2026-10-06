import { useState } from 'react'
import { Link } from 'react-router-dom'

const photos = [
  { src: '/images/paintings/myphoto.jpg', alt: 'Palina Varanishcha, contemporary artist' },
  { src: '/images/paintings/myphoto(copy).jpg', alt: 'Palina Varanishcha in the studio' },
]

export default function About() {
  const [index, setIndex] = useState(0)

  return (
    <main>
      <section className="about-page">
        <div className="container">
          <div className="about-page-grid">
            <div className="about-photo">
              <div className="photo-carousel">
                <div
                  className="photo-carousel-track"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {photos.map((photo, i) => (
                    <img key={i} src={photo.src} alt={photo.alt} />
                  ))}
                </div>
                {photos.length > 1 && (
                  <div className="carousel-controls">
                    <button
                      className="carousel-btn"
                      onClick={() => setIndex(i => (i - 1 + photos.length) % photos.length)}
                      aria-label="Previous photo"
                    >
                      ←
                    </button>
                    <button
                      className="carousel-btn"
                      onClick={() => setIndex(i => (i + 1) % photos.length)}
                      aria-label="Next photo"
                    >
                      →
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="about-text">
              <p className="section-label">About the artist</p>
              <h1>
                Palina<br />
                Varanishcha
              </h1>
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
