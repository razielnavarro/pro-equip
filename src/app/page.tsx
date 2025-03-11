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
            <h1 className="text-4xl md:text-5xl text-left max-w-[800px] pl-50 text-white font-bold">
              Energizando Panamá con Soluciones Eléctricas Confiables
            </h1>
            <p></p>
          </section>
        </div>

        {/* Section with about us */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* LEFT COLUMN: Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/assets/aboutUs.jpg"
                alt="Hombres con cascos de construcción"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            {/* RIGHT COLUMN: Text Content */}
            <div className="w-full md:w-1/2">
              {/* Small Heading */}
              <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-2">
                SOBRE NOSOTROS
              </h2>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proyectos y Equipos Eléctricos, S.A.
              </h1>

              {/* Paragraph Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                Es una empresa panameña especializada en el diseño y
                construcción de proyectos eléctricos en media y baja tensión.
              </p>

              {/* Additional Paragraph Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                Con más de 25 años de experiencia, ofrecemos soluciones para
                urbanizaciones, proyectos industriales y comerciales, incluyendo
                instalación de transformadores, pruebas eléctricas, medición de
                calidad del servicio y corrección del factor de potencia.
              </p>

              {/* Additional Paragraph Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                además, desarrollamos sistemas de generación de energía con
                paneles solares para clientes residenciales, comerciales e
                industriales, garantizando eficiencia y sostenibilidad en cada
                proyecto.
              </p>

              {/* Bullet Points or Services List */}
              <ul className="mt-6 space-y-2 text-gray-800">
                <li className="flex items-center">
                  {/* Optional Icon */}
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Mantenimiento</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Remodelaciones</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Construcción</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Pintura</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer for the website */}
    </>
  );
}
