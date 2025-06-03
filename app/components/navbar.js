'use client'

import { FaBuilding, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-color2 shadow-md px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-secondary text-xl font-bold">
          <FaBuilding />
          <span>Loca</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><Link href="/" className="hover:text-blue-600 transition">Accueil</Link></li>
          <li><Link href="/Logements" className="hover:text-blue-600 transition">Logements</Link></li>
          <li><Link href="/Inscription" className="hover:text-blue-600 transition">Inscription</Link></li>
          <li><Link href="/Contact" className="hover:text-blue-600 transition">Contact</Link></li>
        </ul>

        {/* Connexion Button (Desktop Only) */}
        <div className="hidden md:block">
          <button className="bg-secondary text-white px-4 py-1 rounded hover:bg-primary transition">
            Connexion
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-600"
          aria-label="Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-3 md:hidden flex flex-col gap-3 text-gray-700 font-medium bg-primary">
          <Link href="/" className="hover:text-blue-600 transition">Accueil</Link>
          <Link href="/logements" className="hover:text-blue-600 transition">Logements</Link>
          <Link href="/Inscription" className="hover:text-blue-600 transition">Inscription</Link>
          <Link href="/Contact" className="hover:text-blue-600 transition">Contact</Link>
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition w-max">
            Connexion
          </button>
        </div>
      )}
    </nav>
  );
}