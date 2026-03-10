import Header from "./components/Header";
import Hero from "./sections/Hero";
import ServicesTicker from "./components/ServicesTicker";
import About from "./sections/About.tsx";

function App() {
  return (
    <>
      <ServicesTicker />
      <Header />
      <Hero />
      <About />
    </>
  );
}

export default App;