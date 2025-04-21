const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] h-[50vh] xl:h-screen w-full overflow-visible z-20 flex justify-center items-center xl:items-start">
      {/* Background image hero */}
      <div className="flex flex-col-reverse items-center xl:flex-row xl:justify-center h-full w-full bg-[url('/assets/FullBg.png')] bg-no-repeat bg-cover bg-center">
        <section className="gap-y-2 text-center xl:text-left px-10 mb-12 w-full flex items-center justify-center xl:justify-start">
          <div className="max-w-[600px]">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-bold">
              Energizando Panamá con Soluciones Eléctricas Confiables
            </h1>

            <a href="https://wa.me/50766732524">
              <button className="mt-4 px-6 py-3 bg-red-800 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 cursor-pointer">
                Contáctanos
              </button>
            </a>
          </div>
        </section>
      </div>

      {/* Diamond/Polygon Image on top */}
      <div className="absolute top-[10%] sm:top-[10%] md:top-[6%] lg:top-[8%] xl:top-[54%] left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 xl:left-auto xl:right-10 xl:translate-x-0 xl:transform xl:-translate-y-1/2 z-15 w-[340px] sm:w-[340px] md:w-[400px] xl:w-auto">
        <img
          src="/assets/diamondHigh.png"
          alt="Worker"
          className="w-full h-auto xl:w-[817px] 2xl:w-[992px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
