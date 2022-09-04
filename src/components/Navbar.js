import React from "react";
import { GiCanoe } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full">
      <div className="text-primaryGrey body-font border border-b-gray-100 shadow">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <GiCanoe className="text-4xl text-primaryCol" />
            <span className="ml-3 text-xl">Downwind Paddling</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a
              href="/"
              className="mr-5 text-primaryCol hover:underline hover:text-primaryGrey"
            >
              Home
            </a>
            <a
              href="/"
              className="mr-5 text-primaryCol hover:underline hover:text-primaryGrey"
            >
              About
            </a>
            <a
              href="/"
              className="mr-5 text-primaryCol hover:underline hover:text-primaryGrey"
            >
              Settings
            </a>
            <a
              href="/"
              className="mr-5 text-primaryCol hover:underline hover:text-primaryGrey"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
