
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
                    Discover something new ↗
                </a>
            </div>


            <div className="hero-visual">
                <div className="orbit orbit-one">
                    <div className="planet">
                        <div className="planet-crater crater-one"></div>
                        <div className="planet-crater crater-two"></div>
                        <div className="planet-crater crater-three"></div>
                    </div>
                </div>

                <span className="star star-one">✦</span>
                <span className="star star-two">✧</span>
                <span className="star star-three">✦</span>
                <span className="star star-four">·</span>
            </div>

        </section>
    )
}

export default Hero
