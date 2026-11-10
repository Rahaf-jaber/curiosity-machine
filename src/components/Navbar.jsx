
import { useState } from 'react'
import { Asterisk, ArrowUpRight} from 'lucide-react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">

      <a href="#home" className="logo" onClick={closeMenu}>
        <span className="logo-symbol">
          <Asterisk size={22} strokeWidth={2.5} />
        </span>
        <span>
          The Curiosity
          <br />
          Machine
        </span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#explore" onClick={closeMenu}>
            Explore
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
      </ul>

      <a href="#explore" className="nav-cta">
        Get Curious <ArrowUpRight size={16} />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

    </nav>
  )
}

export default Navbar
