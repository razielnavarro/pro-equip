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
    <nav className="bg-transparent text-white py-2">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Logo on navbar */}
        <div>
          <Link href="/" prefetch={true}>
            <img
              src="assets/logo.jpg"
              className="object-contain w-32 h-32"
            ></img>
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <button
          onClick={toggleMenu}
          type="button"
          className="block md:hidden text-white hover:text-purple-600 focus:outline-none"
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
              {/* <Link className={`block py-2 px-3 ${pathname === '/' ? 'text-purple-600':'text-white hover:text-purple-600'}`} href={"/"}>
          Home
          </Link> */}
            </li>
            <li>
              <Link
                className={`block py-2 px-3 ${
                  pathname === "/skills"
                    ? "text-purple-600"
                    : "text-white hover:text-purple-600"
                }`}
                href={"#skills"}
                onClick={toggleMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className={`block py-2 px-3 ${
                  pathname === "/projects"
                    ? "text-purple-600"
                    : "text-white hover:text-purple-600"
                }`}
                href={"#projects"}
                onClick={toggleMenu}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                className={`block py-2 px-3 ${
                  pathname === "/projects"
                    ? "text-purple-600"
                    : "text-white hover:text-purple-600"
                }`}
                href={"#projects"}
                onClick={toggleMenu}
              >
                Proyectos
              </Link>
            </li>
          </ul>
        </div>

        {/* GitHub icon */}
        <a className="hidden md:block" href="https://github.com/razielnavarro">
          <img className="w-7" src="assets\GitHubRetroWhite.png"></img>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
