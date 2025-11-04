import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Tips from "./components/Tips";
import AppoinmentBook from "./components/AppoinmentBook";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Tips />
      <AppoinmentBook />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
