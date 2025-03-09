import Navbar from "./components/Navbar";
import ContactStrip from "./components/ContactStrip";

export default function Home() {
  return (
    <>
      <header>
        {/*Contact Info Strip at the Top */}
        <ContactStrip />

        {/* Navbar */}
        <Navbar />
      </header>
      <main className="flex flex-col-reverse items-center md:flex-row md:justify-center min-h-[75vh] bg-[url(/assets/actualHero.png)] bg-cover bg-center opacity 25">
        {/* Section with name and role */}
        <section className="gap-y-2 text-center md:text-left px-10 mb-12 w-full">
          <h1 className="text-4xl md:text-5xl text-left max-w-[800px] pl-50">
            Energizando Panamá con Soluciones Eléctricas Confiables
          </h1>
          <p></p>
        </section>
      </main>

      {/* Footer for the website */}
    </>
  );
}
