export default function Contact() {
  return (
    <main>
      <section className="contact-page">
        <div className="container">
          <p className="section-label">Contact</p>
          <h1>Contact me</h1>
          <p className="contact-intro">
            For any enquiries, commissions or collaborations, click the link below to drop me an
            email and I'll get back to you as soon as I can. Thank you!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <p className="contact-label">Email</p>
              <a href="mailto:palinavarani@gmail.com">palinavarani@gmail.com</a>
            </div>

            <div className="contact-item">
              <p className="contact-label">Instagram</p>
              <a
                href="https://www.instagram.com/palina.sol"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                @palina.sol
              </a>
            </div>

            <div className="contact-item">
              <p className="contact-label">Artist</p>
              <p>Palina Varanishcha</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
