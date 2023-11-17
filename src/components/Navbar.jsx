"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Qualification",
    href: "#qualification",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 ">
        <div className="inline-flex items-center space-x-2">
          <span
            style={{ fontFamily: "Birthstone Bounce" }}
            className="text-2xl lg:text-3xl  text-gray-800 "
          >
            Durgesh Bachhav..
          </span>
        </div>
        <div className="hidden     lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="navlink text-base font-bold text-gray-800     transition ease-out duration-300 relative "
                  style={{ outline: "none" }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6  cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span
                      style={{ fontFamily: "Birthstone Bounce" }}
                      className="text-2xl  text-gray-800 hover:text-pink-600"
                    >
                      Durgesh Bachhav
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className=" text-base font-bold text-gray-800 hover:text-pink-500 hover:underline hover:underline-offset-4 transition ease-out duration-500 "
                        style={{ outline: "none" }}
                        onClick={(e)=>setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
