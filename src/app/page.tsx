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
        <div className="relative h-screen w-full overflow-visible z-20">
          {/* Background image hero */}
          <div className="flex flex-col-reverse items-center md:flex-row md:justify-center h-full w-full bg-[url('/assets/fullBg.png')] bg-no-repeat bg-cover bg-center">
            <section className="gap-y-2 text-center md:text-left px-10 mb-12 w-full flex items-center justify-center md:justify-start">
              <div className="max-w-[800px]">
                <h1 className="text-4xl md:text-5xl text-white font-bold">
                  Energizando Panamá con Soluciones Eléctricas Confiables
                </h1>
                <button className="mt-4 px-6 py-3 bg-red-800 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 cursor-pointer">
                  Contáctanos
                </button>
              </div>
            </section>
          </div>

          {/* Diamond/Polygon Image on top */}
          <div className="absolute top-[54%] right-10 transform -translate-y-1/2 z-15">
            <img
              src="/assets/diamond.png"
              alt="Worker"
              className="w-[1000px] h-auto"
            />
          </div>
        </div>

        {/* Section with about us */}
        <div id="nosotros" className="z-0">
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
