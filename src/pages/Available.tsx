import { Link, useSearchParams } from 'react-router-dom'
import { paintings } from '../data/paintings'

const EMAIL = 'palinavaranishcha@gmail.com'

export default function Available() {
  const [searchParams] = useSearchParams()
  const preselected = searchParams.get('painting')
  const available = paintings.filter(p => p.available)

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
      <section className="available-page">
        <div className="container">
          <p className="section-label">Available works</p>
          <h1>Request to purchase</h1>
          {available.length === 0 ? (
            <p className="available-intro">
              No paintings are currently available for purchase. Please check back soon or{' '}
              <a href={`mailto:${EMAIL}`}>get in touch</a> directly.
            </p>
          ) : (
            <>
              <p className="available-intro">
                Select a painting and enter your email address. Clicking Send will open your mail
                app with a pre-filled message.
              </p>
              <ul className="available-list">
                {available.map(p => (
                  <li key={p.id}>
                    <Link to={`/paintings/${p.id}`} className="available-list-thumb">
                      <img src={p.src} alt={p.title} />
                    </Link>
                    <Link to={`/paintings/${p.id}`} className="available-list-title">
                      {p.title}
                    </Link>
                    {p.dimensions && <span className="available-list-meta">{p.dimensions}</span>}
                    <span className="available-badge">
                      {p.price ? `Available for $${p.price}` : 'Available for commission'}
                    </span>
                  </li>
                ))}
              </ul>
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
                <button type="submit" className="button">Send enquiry</button>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
