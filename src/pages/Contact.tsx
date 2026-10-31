export default function Contact() {
  return (
    <main className="page-fill">
      <section className="contact-page">
        <div className="container">
          <h1>Contact me</h1>
          <p className="contact-intro">
            For any enquiries, commissions or collaborations, click the link below to drop me an
            email and I'll get back to you as soon as I can. Thank you!
          </p>

          <div className="contact-details">
            <a
              href="https://www.instagram.com/palina.sol"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <svg
                className="contact-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span>
                <span className="contact-label">instagram</span>
                <span className="contact-value">@palina.sol</span>
              </span>
            </a>

            <a href="mailto:palinavarani@gmail.com" className="contact-item">
              <svg
                className="contact-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="12" fill="currentColor" />
                <rect x="6" y="8" width="12" height="8.5" rx="1" fill="#ffffff" />
                <path d="M6.5 8.6 12 12.6l5.5-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span>
                <span className="contact-label">email</span>
                <span className="contact-value contact-value--link">palinavarani@gmail.com</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
