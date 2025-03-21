"use client";

import React, { useState } from "react";

interface ProjectsSectionProps {
  images: string[]; // Array of image URLs
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ images }) => {
  const [showMore, setShowMore] = useState(false);

  // Function to handle the toggle of showing more images
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <section className="py-12 mx-auto w-3/4">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-800">
          Proyectos
        </h2>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-red-800"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {images.slice(0, showMore ? images.length : 8).map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-6">
          <button
            onClick={toggleShowMore}
            className="text-red-800 font-semibold px-6 py-2 rounded-md hover:bg-red-800 hover:text-white transition duration-300 cursor-pointer"
          >
            {showMore ? "Ver menos" : "Ver más"}
          </button>
        </div>
      </div>
    </section>
  );
};

// Example usage of the ProjectsSection component
const ProjectsComponent = () => {
  const projectImages: string[] = [
    "/assets/proyectos/conexion_anillo.jpg",
    "/assets/proyectos/obaldia_cambio_aceite.jpg",
    "/assets/proyectos/mae_lewis.jpg",
    "/assets/proyectos/trabajo_tierra.jpg",
    "/assets/proyectos/medidor_electrico_2.jpg",
    "/assets/proyectos/maquina_voith.jpg",
    "/assets/proyectos/medidor_electrico.jpg",
    "/assets/proyectos/2500_kva.jpg",
    "/assets/proyectos/equipo.jpg",
    "/assets/proyectos/equipo_de_trabajo.jpg",
    "/assets/proyectos/equipo_de_trabajo_2.jpg",
    "/assets/proyectos/voith_y_indar.jpg",
  ];

  return (
    <div>
      <ProjectsSection images={projectImages} />
    </div>
  );
};

export default ProjectsComponent;
