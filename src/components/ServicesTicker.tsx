const services = [
  "Proginis makiažas",
  "Nuotakos makiažas",
  "Antakių korekcija",
  "Antakių laminavimas",
  "Blakstienų laminavimas",
  "Individualūs mokymai",
  "Online mokymai",
];

function ServicesTicker() {
  const tickerItems = [...services, ...services];

  return (
    <section className="ticker" id="paslaugos" aria-label="Services">
      <div className="ticker__track">
        {tickerItems.map((item, index) => (
          <span className="ticker__item" key={index}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export default ServicesTicker;