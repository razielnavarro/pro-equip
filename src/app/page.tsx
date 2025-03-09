import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col-reverse items-center md:flex-row md:justify-center min-h-[80vh] bg-[url(/assets/actualHero.png)] bg-cover bg-center opacity 25">
        {/* Section with name and role */}
        <section className="gap-y-2 text-center md:text-left px-10 mb-12">
          <h1 className="text-4xl md:text-5xl">
            Energizando Panamá con Soluciones Eléctricas Confiables
          </h1>
          <p></p>
        </section>
      </main>

      {/* Footer for the website */}
    </>
  );
}
