"use client";
import React from "react";

const pruebasTTR = () => {
  return (
    <section
      className="w-full h-[60vh] bg-cover bg-left md:bg-[center_50%] flex items-center justify-start"
      style={{ backgroundImage: "url('/assets/PruebasTTR.png')" }}
    >
      <div className="bg-black/50 md:bg-black/20 w-full h-full flex items-center">
        <div className="text-white px-6 sm:px-10 max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Pruebas TTR
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6">
            Realizamos pruebas TTR para garantizar el correcto funcionamiento y
            la relación de transformación de sus transformadores, asegurando
            precisión, confiabilidad y continuidad en el servicio eléctrico.
          </p>
          <a href="https://wa.link/ytsx7s">
            <button className="bg-red-800 hover:bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded transition duration-300 cursor-pointer">
              Quiero saber más
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default pruebasTTR;
