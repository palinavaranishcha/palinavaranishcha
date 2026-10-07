import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <NavLink to="/" className="logo">
          <img src="images/paintings/logo.jpg" alt="Palina Varanishcha" />
        </NavLink>

        <nav className="main-navigation">
          <NavLink to="/collections" className={({ isActive }) => isActive ? 'active' : ''}>
            Collections
          </NavLink>
          <NavLink to="/available" className={({ isActive }) => isActive ? 'active' : ''}>
            Available
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
