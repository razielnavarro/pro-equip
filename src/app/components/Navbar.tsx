"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-black py-2">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Logo on navbar */}
        <div>
          <Link href="/" prefetch={true}>
            <img src="assets/logo.png" className="h-[80px]"></img>
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col p-2 md:flex-row md:space-x-8 rtl:space-x-reserve md:bg-transparent mt-4 md:mt-0 font-medium bg-customPurple border rounded-lg border-purple-600 md:border-transparent">
            <li>
              <Link
                className={`block py-2 px-3 ${
                  pathname === "/inicio"
                    ? "text-black"
                    : "text-black hover:text-red-800"
                }`}
                href={"#inicio"}
                onClick={toggleMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className={`block py-2 px-3 ${
                  pathname === "/nosotros"
                    ? "text-black"
                    : "text-black hover:text-red-800"
                }`}
                href={"#nosotros"}
                onClick={toggleMenu}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                className={`block py-2 px-3 ${
                  pathname === "/servicios"
                    ? "text-black"
                    : "text-black hover:text-red-800"
                }`}
                href={"#servicios"}
                onClick={toggleMenu}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                className={`block py-2 px-3 ${
                  pathname === "/proyectos"
                    ? "text-black"
                    : "text-black hover:text-red-800"
                }`}
                href={"#proyectos"}
                onClick={toggleMenu}
              >
                Proyectos
              </Link>
            </li>
          </ul>
        </div>

        {/* Phone number */}
        <div>
          <a href="tel:+507 6673-2524" className="text-black">
            +507 6673-2524
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
