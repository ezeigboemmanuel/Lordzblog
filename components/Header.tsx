"use client";
import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="mx-5 my-5">
      <div className="flex items-center h-16">
        <div className="flex items-center justify-between w-full">
          <div className="">
            <Link
              href="/"
              className="text-2xl text-white font-mono cursor-pointer"
            >
              Lordzblog
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/">
                <h2 className="cursor-pointer py-5 text-[#ecedf1] hover:text-white font-medium">
                  Home 
                </h2>
              </Link>
              <Link href="/community">
                <h2 className="cursor-pointer py-5 text-[#ecedf1] hover:text-white font-medium">
                  Join community
                </h2>
              </Link>
              <Link href="/about">
                <h2 className="cursor-pointer py-5 text-[#ecedf1] hover:text-white font-medium">
                  About 
                </h2>
              </Link>
              <Link href="/contact">
                <h2 className="cursor-pointer py-5 text-[#ecedf1] hover:text-white font-medium">
                  Contact
                </h2>
              </Link>
              <Link href="/privacypolicy">
                <h2 className="cursor-pointer py-5 pr-5 text-[#ecedf1] hover:text-white font-medium">
                  Privacy policy
                </h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-[#ecedf1] hover:text-white  focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
                <h2 onClick={() => setIsOpen(!isOpen)} className="cursor-pointer hover:bg-gray-500 text-[#ecedf1] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </h2>
              </Link>
              <Link href="/community">
                <h2 onClick={() => setIsOpen(!isOpen)} className="cursor-pointer hover:bg-gray-500 text-[#ecedf1] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Join community
                </h2>
              </Link>
              <Link href="/about">
                <h2 onClick={() => setIsOpen(!isOpen)} className="cursor-pointer hover:bg-gray-500 text-[#ecedf1] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  About
                </h2>
              </Link>
              <Link href="/contact">
                <h2 onClick={() => setIsOpen(!isOpen)} className="cursor-pointer text-[#ecedf1] hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </h2>
              </Link>
              <Link href="/privacypolicy">
                <h2 onClick={() => setIsOpen(!isOpen)} className="cursor-pointer text-[#ecedf1] hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Privacy Policy
                </h2>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
}

export default Header;