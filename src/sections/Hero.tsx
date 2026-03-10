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
          <p className="hero__eyebrow">
            MAKEUP ARTIST • BEAUTY ARTIST • ONLINE TRAININGS
          </p>

          <h1 className="hero__title">
            Grožis slypi
            <br />
            detalėse
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;