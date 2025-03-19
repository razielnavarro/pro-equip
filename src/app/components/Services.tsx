import React from "react";

interface Service {
  icon: string; // Could be a path to an SVG or PNG, or an imported component
  title: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="mx-auto my-2 w-full p-8">
      {/* Section Heading */}
      <h2 className="text-5xl font-bold text-center mb-4 text-black">
        Nuestros Servicios
      </h2>
      <div className="flex justify-center mb-8">
        {/* Red line under heading */}
        <div className="w-24 h-1 bg-red-800"></div>
      </div>

      {/* Section with blue background */}
      <div className="rounded-xl p-8 bg-gradient-to-r from-blue-800 to-blue-900">
        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-2/4 mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-md flex flex-col items-center justify-center p-6"
            >
              {/* Icon */}
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-16 w-16"
                />
              </div>
              {/* Title */}
              <p className="text-center font-semibold text-white">
                {service.title}
              </p>
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
      icon: "/assets/icons-new/electricidad.svg",
    },
    {
      title: "Instalación de Transformadores y Equipos Eléctricos",
      icon: "/assets/icons-new/enchufe.svg",
    },
    {
      title: "Pruebas y Mediciones Eléctricas",
      icon: "/assets/icons-new/casa.svg",
    },
    {
      title: "Energía Solar y Fotovoltaicas",
      icon: "/assets/icons-new/solar.svg",
    },
    {
      title: "Sistemas de Puesta a Tierra y Corrección de Potencia",
      icon: "/assets/icons-new/tierra.svg",
    },
    {
      title:
        "Infraestructura Eléctrica para Proyectos Industriales y Urbanizaciones",
      icon: "/assets/icons-new/infraestructura.svg",
    },
  ];

  return (
    <div>
      <ServicesSection services={servicesData} />
    </div>
  );
};

export default ServicesComponent;
