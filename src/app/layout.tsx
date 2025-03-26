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
    "Proyectos y Equipos Eléctricos, S.A. es una empresa panameña con más de 25 años de experiencia en el diseño y construcción de proyectos eléctricos en media y baja tensión. Ofrecemos soluciones para urbanizaciones, proyectos industriales y comerciales, incluyendo instalaciones de transformadores, medición eléctrica, energía solar fotovoltaica y sistemas de puesta a tierra. Garantizamos eficiencia y sostenibilidad en cada uno de nuestros proyectos.",
  keywords:
    "diseño eléctrico, construcción de redes eléctricas, energía solar, instalación de transformadores, pruebas eléctricas, sistemas fotovoltaicos, potencia eléctrica, urbanizaciones, proyectos industriales, proyectos comerciales",
  authors: [
    {
      name: "Proyectos y Equipos Eléctricos, S.A.",
      url: "https://www.https://pro-equip.vercel.app/", //
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
      <body className={`${defaultFont.className} antialiased relative`}>
        {children}
      </body>
    </html>
  );
}
