import { ArrowUpRight} from 'lucide-react'

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <span className="hero-label">WELCOME TO THE CURIOUS SIDE</span>

                <h1>
                    Feed your <span>curiosity.</span>
                </h1>

                <p>
                    A little curiosity goes a long way.
                    Explore fascinating ideas, discover new perspectives,
                    and never stop asking questions.
                </p>

                <a href="#explore" className="hero-button">
                    Discover something new <ArrowUpRight size={17} />
                </a>
            </div>


            <div className="hero-art">
                <div className="orbit orbit-one"></div>
                <div className="orbit orbit-two"></div>

                <span className="star star-one">✦</span>
                <span className="star star-two">✧</span>
                <span className="star star-three">✦</span>

                <div className="planet">
                    <div className="planet-ring"></div>
                    <div className="planet-surface"></div>
                </div>

                <div className="floating-note">
                    <span className="note-icon">✧</span>
                    <span>Something<br/>unexpected awaits.</span>
                </div>

            </div>

        </section>
    )
}

export default Hero
