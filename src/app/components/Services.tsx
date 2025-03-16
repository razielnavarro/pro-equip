import React from "react";

interface Service {
  icon: string; // Could be a path to an SVG or PNG, or an imported component
  title: string;
}

interface ServicesSectionProps {
  services: Service[];
  backgroundImage: string; // Add background image URL as a prop
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  backgroundImage,
}) => {
  return (
    <section
      className="py-12 bg-cover bg-center items-center w-2/4 mx-auto"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center mb-4 text-white">
          Nuestros Servicios
        </h2>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-red-800"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center bg-red-800 rounded-md cursor-pointer group aspect-square"
            >
              {/* Icon in the center */}
              <img
                src={service.icon}
                alt={service.title}
                className="h-24 w-24"
              />
              {/* Title appears on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesComponent = () => {
  const servicesData: Service[] = [
    {
      title: "Diseño y Construcción de Redes Eléctricas",
      icon: "/assets/icons/electrica.svg",
    },
    {
      title: "Instalación de Transformadores y Equipos Eléctricos",
      icon: "/assets/icons/instalacion.svg",
    },
    {
      title: "Pruebas y Mediciones Eléctricas",
      icon: "/assets/icons/mediciones.svg",
    },
    {
      title: "Energía Solar y Fotovoltaicas",
      icon: "/assets/icons/solar.svg",
    },
    {
      title: "Sistemas de Puesta a Tierra y Corrección de Potencia",
      icon: "/assets/icons/tierra.svg",
    },
    {
      title:
        "Infraestructura Eléctrica para Proyectos Industriales y Urbanizaciones",
      icon: "/assets/icons/infraestructura.svg",
    },
  ];

  const backgroundImage = "/path/to/your/background-image.jpg";

  return (
    <div>
      <ServicesSection
        services={servicesData}
        backgroundImage={backgroundImage}
      />
    </div>
  );
};

export default ServicesComponent;
