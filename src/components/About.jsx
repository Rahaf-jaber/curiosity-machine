import { Asterisk} from 'lucide-react'

function About() {
  return (
    <section className="about" id="about">

      <div className="about-content">
        <span className="about-label">
          A LITTLE ABOUT US
        </span>

        <h2>
          Curiosity is where
          <span> everything begins.</span>
        </h2>

        <p>
          The Curiosity Machine is a space for exploring
          the little questions that lead to big discoveries.
          From science and creativity to psychology and
          everyday life, we make learning an enjoyable journey.
        </p>

        <div className="about-points">
          <span>Explore new ideas.</span>
          <span>Discover unexpected connections.</span>
          <span>Never stop asking questions.</span>
        </div>
      </div>

      <div className="about-visual">
        <div className="about-circle circle-one"></div>
        <div className="about-circle circle-two"></div>

        <span className="about-star star-one"><Asterisk size={22} strokeWidth={2.5} /></span>
        <span className="about-star star-two">✦</span>

        <p>Stay curious.</p>
      </div>

    </section>
  )
}

export default About
