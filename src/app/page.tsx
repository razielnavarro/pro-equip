import Navbar from "./components/Navbar";
import ContactStrip from "./components/ContactStrip";
import ServicesComponent from "./components/Services";
import AboutUs from "./components/AboutUs";
import ProjectsComponent from "./components/Projects";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";

export default function Home() {
  return (
    <>
      <header>
        {/*Contact Info Strip at the Top */}
        <ContactStrip />

        {/* Navbar */}
      </header>
      <main>
        <Navbar />
        {/* Section with name and role */}
        <HeroSection />

        {/* Section with about us */}
        <div id="nosotros" className="z-0">
          <AboutUs />
        </div>
        {/* Section with services */}
        <section id="servicios">
          <ServicesComponent />
        </section>
        {/* Section with projects */}
        <div id="proyectos">
          <ProjectsComponent />
        </div>
      </main>
      {/* Footer for the website */}
      <Footer />
    </>
  );
}
