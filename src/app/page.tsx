import Navbar from "./components/Navbar";
import ContactStrip from "./components/ContactStrip";
import ServicesComponent from "./components/Services";
import AboutUs from "./components/AboutUs";
import ProjectsComponent from "./components/Projects";
import Footer from "./components/Footer";

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
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-center min-h-[75vh] bg-[url(/assets/heroTest4.png)] bg-cover bg-center">
          <section className="gap-y-2 text-center md:text-left px-10 mb-12 w-full">
            <div className="max-w-[800px] text-left pl-50">
              <h1 className="text-4xl md:text-5xl text-white font-bold">
                Energizando Panamá con Soluciones Eléctricas Confiables
              </h1>
              <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">
                Contáctanos
              </button>
            </div>
          </section>
        </div>

        {/* Section with about us */}
        <div id="nosotros">
          <AboutUs />
        </div>
        {/* Section with services */}
        <section
          className="relative min-h-[75vh] bg-[url(/assets/servicios.png)] bg-cover bg-center"
          id="servicios"
        >
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
