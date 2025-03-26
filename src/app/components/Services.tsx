import React from "react";

interface Service {
  icon: string;
  title: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="mx-auto my-2 w-full p-8">
      <h2 className="text-5xl font-bold text-center mb-4 text-black">
        Nuestros Servicios
      </h2>
      <div className="flex justify-center mb-8">
        <div className="w-24 h-1 bg-red-800"></div>
      </div>

      <div className="rounded-xl p-8 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-4/4 xl:w-3/4 mx-auto auto-rows-fr">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-md flex flex-col items-center justify-between p-6 h-full bg-opacity-10"
            >
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-16 w-16"
                />
              </div>
              <div className="flex-1 flex items-center">
                <p className="text-center font-semibold text-white">
                  {service.title}
                </p>
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
