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
      <main>
        {/* Section with name and role */}
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-center min-h-[75vh] bg-[url(/assets/actualHero.png)] bg-cover bg-center opacity 25">
          <section className="gap-y-2 text-center md:text-left px-10 mb-12 w-full ">
            <h1 className="text-4xl md:text-5xl text-left max-w-[800px] pl-50 text-white">
              Energizando Panamá con Soluciones Eléctricas Confiables
            </h1>
            <p></p>
          </section>
        </div>

        {/* Section with about us */}
        <section className="flex md:flex-row items-center gap-8 px-10 py-12">
          <aside className="flex justify-center w-full md:w-1/2">
            <img
              className="max-w-full h-auto rounded-lg shadow-lg"
              src="assets/aboutUs.jpg"
            ></img>
          </aside>

          {/* Paragraph with company info */}
          <div className="w-full md:w-1/2">
            {/* Company Title */}
            <h1 className="text-3xl font-bold text-red-900">
              Proyectos y Equipos Eléctricos, S.A.
            </h1>

            {/* Styled Paragraph with Line Breaks */}
            <p className="text-lg text-gray-700 mt-4 uppercase">
              Es una empresa panameña especializada en el diseño y construcción
              de proyectos eléctricos en media y baja tensión.
            </p>

            <p className="text-lg text-gray-700 capitalize">
              Con más de 25 años de experiencia, ofrecemos soluciones para
              urbanizaciones, proyectos industriales y comerciales, incluyendo
              instalación de transformadores, pruebas eléctricas, medición de
              calidad del servicio y corrección del factor de potencia.
            </p>

            <p className="text-lg text-gray-700 lowercase">
              además, desarrollamos sistemas de generación de energía con
              paneles solares para clientes residenciales, comerciales e
              industriales, garantizando eficiencia y sostenibilidad en cada
              proyecto.
            </p>
          </div>
        </section>
      </main>

      {/* Footer for the website */}
    </>
  );
}
