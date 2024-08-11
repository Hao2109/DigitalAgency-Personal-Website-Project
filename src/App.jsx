import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Counter />
      <Pricing />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
