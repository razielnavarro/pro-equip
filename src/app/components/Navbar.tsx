// src/app/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full py-2 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white"
      } md:static`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Logo */}
        <div>
          <Link href="/" prefetch={true}>
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={200}
              height={80}
              className="h-[80px] w-auto"
              priority
              quality={90}
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          type="button"
          className="block md:hidden text-black hover:text-red-800 focus:outline-none"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto mx-auto`}
        >
          <ul className="flex flex-col p-2 md:flex-row md:space-x-8 rtl:space-x-reserve md:bg-transparent mt-4 md:mt-0 font-medium border rounded-lg border-transparent text-left">
            {[
              { href: "#inicio", label: "Inicio" },
              { href: "#nosotros", label: "Nosotros" },
              { href: "#servicios", label: "Servicios" },
              { href: "#proyectos", label: "Proyectos" },
            ].map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-300 md:border-none py-3 px-6"
              >
                <Link
                  className={`block ${
                    pathname === item.href
                      ? "text-black"
                      : "text-black hover:text-red-800"
                  }`}
                  href={item.href}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
