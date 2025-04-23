// src/app/components/Projects.tsx
"use client";

import React, { useState, useEffect, TouchEvent } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ProjectsSectionProps {
  images: string[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ images }) => {
  const [showMore, setShowMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const toggleShowMore = () => setShowMore(!showMore);
  const openImage = (index: number) => setSelectedImage(index);
  const closeImage = () => setSelectedImage(null);

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
    }
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
    }
  };

  // Escape to close
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeImage();
    };
    if (selectedImage !== null) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Touch handlers
  const handleTouchStart = (e: TouchEvent) =>
    setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e: TouchEvent) =>
    setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const deltaX = touchStartX - touchEndX;
      const threshold = 50;
      if (deltaX > threshold) nextImage();
      else if (deltaX < -threshold) prevImage();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="py-12 mx-auto w-full xl:w-3/4">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-800">
          Proyectos
        </h2>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-red-800"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {images.slice(0, showMore ? images.length : 8).map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer w-full h-48"
              onClick={() => openImage(index)}
            >
              <Image
                src={image}
                alt={`Project ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={toggleShowMore}
            className="text-red-800 font-semibold px-6 py-2 rounded-md hover:bg-red-800 hover:text-white transition duration-300 cursor-pointer"
          >
            {showMore ? "Ver menos" : "Ver más"}
          </button>
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeImage}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-5 text-white text-3xl"
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={images[selectedImage]}
              alt={`Project ${selectedImage + 1}`}
              width={800}        // replace with real intrinsic width if known
              height={600}       // replace with real intrinsic height if known
              className="max-w-full max-h-full rounded-lg shadow-lg object-contain"
            />
          </div>
          <button
            className="absolute right-5 text-white text-3xl"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

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
    "/assets/proyectos/equipo_de_trabajo_3.jpg",
    "/assets/proyectos/equipo_de_trabajo_4.jpg",
    "/assets/proyectos/voith_y_indar.jpg",
  ];

  return <ProjectsSection images={projectImages} />;
};

export default ProjectsComponent;
