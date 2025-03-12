import React from "react";

interface Service {
  image: string;
  title: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="py-12 bg-white bg-cover bg-center">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center mb-2">
          Nuestros Servicios
        </h2>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-red-800"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-md overflow-hidden"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              {/* Title & Description */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Example usage of the ServicesSection component
const ServicesComponent = () => {
  const servicesData: Service[] = [
    {
      title: "Diseño y Construcción de Redes Eléctricas",
      image: "/assets/serviciosTest.jpg",
    },
    {
      title: "Instalación de Transformadores y Equipos Eléctricos",
      image: "/assets/serviciosTest.jpg",
    },
    {
      title: "Pruebas y Mediciones Eléctricas",
      image: "/assets/serviciosTest.jpg",
    },
    {
      title: "Energía Solar y Fotovoltaicas",
      image: "/assets/serviciosTest.jpg",
    },
    {
      title: "Sistemas de Puesta a Tierra y Corrección de Potencia",
      image: "/assets/serviciosTest.jpg",
    },
    {
      title:
        "Infraestructura Eléctrica para Proyectos Industriales y Urbanizaciones",
      image: "/assets/serviciosTest.jpg",
    },
  ];

  return (
    <div>
      <ServicesSection services={servicesData} />
    </div>
  );
};

export default ServicesComponent;
