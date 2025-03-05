import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-10 md:mt-[100px] flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-65vh md:min-h-80vh">
        {/* Section with name and role */}
        <section className="gap-y-2 text-center md:text-left px-10 mb-12">
          <h1 className="text-4xl md:text-5xl">
            Energizando Panamá con Soluciones Eléctricas Confiables
          </h1>
          <p></p>
        </section>

        {/* Aside section with video game character image */}
        <aside className="flex justify-center md:justify-start">
          <img
            alt="Kirby"
            src="assets\Kirby.gif"
            className="w-10/12 md:h-auto"
          ></img>
        </aside>
      </main>

      {/* Section with skills */}

      {/* Footer for the website */}
    </>
  );
}
