import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const defaultFont = localFont({
  src: "./fonts/RethinkSans[wght].ttf",
  weight: "100-900",
});

export const metadata: Metadata = {
  title: "PROEQUIP, S.A.",
  description:
    "Proyectos y Equipos Eléctricos, S.A. también conocido como Proequip, es una empresa panameña con más de 25 años de experiencia en el diseño y construcción de proyectos eléctricos en media y baja tensión. Ofrecemos soluciones para urbanizaciones, proyectos industriales y comerciales, incluyendo instalaciones de transformadores, medición eléctrica, energía solar fotovoltaica y sistemas de puesta a tierra. Garantizamos eficiencia y sostenibilidad en cada uno de nuestros proyectos.",
  keywords:
    "PROEQUIP, Proequip, Proequip panamá, Proyectos y Equipos Eléctricos, S.A., construcción de redes eléctricas Panamá, diseño eléctrico, construcción de redes eléctricas, energía solar, instalación de transformadores, pruebas eléctricas, sistemas fotovoltaicos, potencia eléctrica, urbanizaciones, proyectos industriales, proyectos comerciales",
  authors: [
    {
      name: "Proyectos y Equipos Eléctricos, S.A.",
      url: "https://www.proequip.com.pa/", //
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ElectricalContractor",
            name: "Proyectos y Equipos Eléctricos, S.A.",
            url: "https://www.proequip.com.pa/",
            logo: "https://www.proequip.com.pa/assets/logo.png",
            telephone: "+50766732524",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Los Algarrobos, Dolega, Entrada antes de Iglesia Evangelica",
              addressLocality: "Chiriquí",
              addressRegion: "Dolega",
              postalCode: "04086",
              addressCountry: "PA",
            },
            openingHours: ["Mo–Fr 08:00–17:00"],
            geo: {
              "@type": "GeoCoordinates",
              latitude: 8.501427959077002,
              longitude: -82.42544596590086,
            },
          }),
        }}
      />
      <body className={`${defaultFont.className} antialiased relative`}>
        {children}
      </body>
    </html>
  );
}
