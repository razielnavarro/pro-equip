import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links and Brand */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 text-sm text-center">
          {/* Brand / Logo */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2 justify-center">
              <img
                src="assets/logo.png"
                className="h-[40px]"
                alt="Proequip Logo"
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
            <a href="#" className="hover:text-white">
              <img
                src="assets/instagram-icon.svg"
                alt="Instagram"
                className="h-6 w-6 inline-block"
              />
            </a>
            <a href="https://wa.me/50766732524" className="hover:text-white">
              <img
                src="assets/whatsapp-icon.svg"
                alt="WhatsApp"
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
