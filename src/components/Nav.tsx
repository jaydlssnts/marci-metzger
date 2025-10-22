import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-center w-full md:w-auto">
          <img
            src="marcimetzger.png"
            width={160}
            height="auto"
            className="md:ml-0"
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center text-black">
          <a className="text-lg" href="/">
            Home
          </a>
          <a className="text-lg" href="">
            Listings
          </a>
          <a className="text-lg" href="">
            Let's Move
          </a>
          <a className="text-lg" href="">
            About Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden absolute right-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon
            icon="tabler:menu-2"
            width="28"
            height="28"
            className="text-black"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-4 md:hidden text-center text-black">
          <a className="text-lg" href="/">
            Home
          </a>
          <a className="text-lg" href="">
            Listings
          </a>
          <a className="text-lg" href="">
            Let's Move
          </a>
          <a className="text-lg" href="">
            About Us
          </a>
        </div>
      )}
    </nav>
  );
}
