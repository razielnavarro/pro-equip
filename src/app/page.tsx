import Navbar from "./components/Navbar";
import ContactStrip from "./components/ContactStrip";
import ServicesComponent from "./components/Services";
import AboutUs from "./components/AboutUs";
import ProjectsComponent from "./components/Projects";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import PruebasTTR from "./components/pruebasTTR";

export default function Home() {
  return (
    <>
      <header className="w-full z-50">
        {/* Contact Info - always static */}
        <ContactStrip />
      </header>

      {/* Sticky Navbar Container */}
      <div className="sticky top-0 z-40">
        <Navbar />
      </div>

      <main>
        <HeroSection />

        <div id="nosotros" className="z-0">
          <AboutUs />
        </div>

        <section id="servicios">
          <ServicesComponent />
        </section>

        <div>
          <PruebasTTR />
        </div>

        <div id="proyectos">
          <ProjectsComponent />
        </div>
      </main>

      <Footer />
    </>
  );
}
