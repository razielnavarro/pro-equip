import Navbar from "./components/Navbar";
import ContactStrip from "./components/ContactStrip";
import ServicesComponent from "./components/Services";
import AboutUs from "./components/AboutUs";

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
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-center min-h-[75vh] bg-[url(/assets/heroTest4.png)] bg-cover bg-center opacity 25">
          <section className="gap-y-2 text-center md:text-left px-10 mb-12 w-full ">
            <h1 className="text-4xl md:text-5xl text-left max-w-[800px] pl-50 text-white font-bold">
              Energizando Panamá con Soluciones Eléctricas Confiables
            </h1>
            <p></p>
          </section>
        </div>
        {/* Section with about us */}
        <AboutUs />
        {/* Section with services */}
        <section className="relative min-h-[75vh] bg-[url(/assets/servicios.png)] bg-cover bg-center">
          <ServicesComponent />
        </section>
      </main>

      {/* Footer for the website */}
    </>
  );
}
