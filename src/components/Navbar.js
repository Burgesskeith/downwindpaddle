import React from "react";
import { Link } from "react-router-dom";
import { GiCanoe } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="block h-[100px] md:h-[80px]">
      <header className="w-full bg-white ">
        <div className="text-primaryGrey body-font border-b border-b-gray-100 shadow">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              to="/"
            >
              <GiCanoe className="text-4xl text-primaryCol" />
            </Link>
            <div className="ml-3 text-xl font-bold">Downwind Finder</div>

            {/* <a
              href="/"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <GiCanoe className="text-4xl text-primaryCol" />
              <span className="ml-3 text-xl">Downwind Paddling</span>
            </a> */}

            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link
                className="mr-5 text-primaryCol hover:underline hover:text-primaryGrey"
                to="/"
              >
                Home
              </Link>
              <Link
                className="mr-5 text-primaryCol hover:underline hover:text-primaryGrey"
                to="/about"
              >
                About
              </Link>
              <Link
                className="mr-5 text-primaryCol hover:underline hover:text-primaryGrey"
                to="/settings"
              >
                Settings
              </Link>
              <Link
                className="mr-5 text-primaryCol hover:underline hover:text-primaryGrey"
                to="/contact"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
