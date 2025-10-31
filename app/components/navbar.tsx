"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemClass =
    "px-4 py-2 rounded-full font-medium transition-all duration-200 border border-indigo-500 text-indigo-600 hover:bg-indigo-600 hover:text-white shadow-sm";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <span className="font-bold text-indigo-700 text-xl">Smart Laundry</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-4">
          <Link href="/">
            <button className={navItemClass}>Beranda</button>
          </Link>
          <Link href="/laundry-expert">
            <button className={navItemClass}>Konsultasi</button>
          </Link>
          <a href="#about">
            <button className={navItemClass}>Tentang</button>
          </a>
        </div>

        {/* Burger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-indigo-700 text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 flex flex-col items-center py-4 space-y-3">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <button className={navItemClass}>Beranda</button>
          </Link>
          <Link href="/laundry-expert" onClick={() => setMenuOpen(false)}>
            <button className={navItemClass}>Konsultasi</button>
          </Link>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            <button className={navItemClass}>Tentang</button>
          </a>
        </div>
      )}
    </nav>
  );
}
