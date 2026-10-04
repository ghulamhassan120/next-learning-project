import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-400 hover:text-blue-300"
        >
          MyApp
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-400 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </Link>

          <Link
            href="/products"
            className="hover:text-blue-400 transition duration-300"
          >
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;