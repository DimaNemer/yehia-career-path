"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 px-6 py-9">
      <div className="container mx-auto flex items-center justify-between">

        <div className="text-xl font-bold text-white">
          YehyaCareerBath
        </div>

        <div className="hidden space-x-14 text-xl md:block">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>

          <Link href="/plan" className="text-gray-300 hover:text-white">
            Plan
          </Link>

          <Link
            href="/opportunities"
            className="text-gray-300 hover:text-white"
          >
            Opportunity
          </Link>

          <Link href="/dashboard" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((previous) => !previous)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-5 flex flex-col gap-4 border-t border-gray-700 pt-5 text-lg md:hidden">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/plan"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            Plan
          </Link>

          <Link
            href="/opportunities"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            Opportunity
          </Link>

          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;