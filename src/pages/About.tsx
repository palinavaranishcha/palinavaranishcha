import { Link } from 'react-router-dom'

const portrait = { src: 'images/paintings/myphoto.jpg', alt: 'Palina Varanishcha, contemporary artist' }

// Placeholder photos of the artist — replace with final images when ready.
const photos = [
  { src: 'images/paintings/artist-photo-1.jpeg', alt: 'Palina Varanishcha in the studio' },
  { src: 'images/paintings/artist-photo-2.jpeg', alt: 'Palina Varanishcha in the studio' },
  { src: 'images/paintings/artist-photo-3.jpeg', alt: 'Palina Varanishcha in the studio' },
  { src: 'images/paintings/myphoto.jpg', alt: 'Palina Varanishcha' },
]

export default function About() {
  return (
    <main>
      <section className="page-hero page-hero--about">
        <div className="container">
          <h1>Behind the art</h1>
          <h2>Palina Varanishcha</h2>
          <p>
            Contemporary artist and painter exploring color, form, emotion and the relationship
            between the inner world and the surrounding space.
          </p>
        </div>
      </section>

      <div className="about-portrait">
        <img src={portrait.src} alt={portrait.alt} />
      </div>

      <section className="section-block">
        <h2>How did I become an artist?</h2>
        <p>
          My artistic practice is rooted in painting and in the exploration of color, atmosphere
          and personal experience. I am interested in the way an image can communicate emotions
          and ideas without relying on words.
        </p>
      </section>

      <div className="container photo-row">
        {photos.map(photo => (
          <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />
        ))}
      </div>

      <section className="section-block">
        <h2>What inspires me?</h2>
        <p>
          Through painting, I explore the relationship between shape, color and space, allowing
          each work to develop its own atmosphere and visual language.
        </p>
      </section>

      <section className="section-block section-block--last">
        <img className="about-mark" src="images/paintings/logo.jpg" alt="" />
        <h2>My mission</h2>
        <p>
          My work is an ongoing process of observation, experimentation and discovery. I am
          interested in creating paintings that invite the viewer to slow down, look closely and
          experience their own emotional response.
        </p>
        <Link to="/collections" className="text-link">
          tap to see my paintings
        </Link>
      </section>
    </main>
  )
}
