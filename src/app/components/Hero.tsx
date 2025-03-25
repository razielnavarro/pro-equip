const HeroSection = () => {
  return (
    <div className="relative min-h-[550px] h-[50vh] lg:h-screen w-full overflow-visible z-20 flex justify-center items-center lg:items-start">
      {/* Background image hero */}
      <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-center h-full w-full bg-[url('/assets/FullBg.png')] bg-no-repeat bg-cover bg-center">
        <section className="gap-y-2 text-center lg:text-left px-10 mb-12 w-full flex items-center justify-center lg:justify-start">
          <div className="max-w-[800px]">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-bold">
              Energizando Panamá con Soluciones Eléctricas Confiables
            </h1>

            <button className="mt-4 px-6 py-3 bg-red-800 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 cursor-pointer">
              Contáctanos
            </button>
          </div>
        </section>
      </div>

      {/* Diamond/Polygon Image on top */}
      <div className="absolute top-[10%] sm:top-[2%] md:top-[12%] lg:top-[54%] left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0 lg:transform lg:-translate-y-1/2 z-15 w-[300px] sm:w-[340px] md:w-[500px] lg:w-auto">
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
