import { Asterisk} from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <h2>The Curiosity Machine<span>.</span></h2>
          <p>A little curiosity goes a long way.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#about">About</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 The Curiosity Machine. All rights reserved.</p>
        <span>Stay curious <Asterisk size={15} strokeWidth={2.5} /></span>
      </div>
    </footer>
  )
}

export default Footer