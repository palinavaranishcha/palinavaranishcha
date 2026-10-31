import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <NavLink to="/" className="logo">
          <img src="images/paintings/logo.jpg" alt="" />
          <span className="logo-name">Palina.Sol</span>
        </NavLink>

        <nav className="main-navigation">
          <NavLink to="/collections" className={({ isActive }) => isActive ? 'active' : ''}>
            collections
          </NavLink>
          <NavLink to="/available" className={({ isActive }) => isActive ? 'active' : ''}>
            available
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            about
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
