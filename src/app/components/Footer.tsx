// src/app/components/Footer.tsx
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    // On mobile: larger vertical padding (py-20).
    // From sm breakpoint upwards: revert to smaller padding (py-10).
    <footer className="bg-red-800 text-gray-300 py-20 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 
          On mobile: use flex-col so everything stacks top-to-bottom.
          From sm breakpoint: switch to grid with 3 columns (as before).
        */}
        <div
          className="mt-10 flex flex-col items-center space-y-6 text-sm text-center
                        sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0"
        >
          {/* Brand / Logo */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2 justify-center">
              <Image
                src="/assets/logo.png"
                alt="Proequip Logo"
                width={40}
                height={40}
                className="h-[40px] w-auto"
              />
              <span className="text-xl font-semibold text-white">PROEQUIP</span>
            </div>
          </div>

          {/* Footer Links */}
          <div className="space-y-2">
            <a href="#" className="hover:text-white">
              Inicio
            </a>
            <br />
            <a href="#nosotros" className="hover:text-white">
              Nosotros
            </a>
            <br />
            <a href="#servicios" className="hover:text-white">
              Servicios
            </a>
            <br />
            <a href="#proyectos" className="hover:text-white">
              Proyectos
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="space-y-2 flex justify-center gap-2">
            <a
              href="https://www.instagram.com/proequipsa/"
              className="hover:text-white"
            >
              <Image
                src="/assets/instagram-icon.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="h-6 w-6 inline-block"
              />
            </a>
            <a href="https://wa.me/50766732524" className="hover:text-white">
              <Image
                src="/assets/whatsapp-icon.svg"
                alt="WhatsApp"
                width={24}
                height={24}
                className="h-6 w-6 inline-block"
              />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 text-center text-sm text-gray-300">
          <p>© 2025 Proequip</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
