import heroImage from "../assets/VEJUNE-2.jpg";

function Hero() {
  return (
    <section className="hero">
      <div
        className="hero__image"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero__overlay" />

        <div className="hero__content">
          <p className="hero__eyebrow">Makeup artist • Beauty artist • Online trainings</p>

          <h1 className="hero__title">Grožis slypi detalėse</h1>


          <div className="hero__actions">
            <a
              href="https://www.treatwell.lt/"
              target="_blank"
              rel="noreferrer"
              className="hero__button hero__button--primary"
            >
              Registruotis procedūrai
            </a>

            <a
              href="https://contribee.com/"
              target="_blank"
              rel="noreferrer"
              className="hero__button hero__button--secondary"
            >
              Pirkti mokymus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;