import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-name">Palina Varanishcha</div>

        <nav className="footer-navigation">
          <Link to="/">Work</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <p className="copyright">
          © {new Date().getFullYear()} Palina Varanishcha. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
