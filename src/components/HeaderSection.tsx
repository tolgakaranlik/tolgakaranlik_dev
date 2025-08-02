'use client';

import React, { useState } from 'react';
import { HeaderLink } from './HeaderLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

type Props = {
  children: React.ReactNode;
};

export function HeaderSection({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Tolga</h1>

        {/* Hamburger icon (mobile only) */}
        <button
          className="md:hidden text-gray-800 dark:text-white"
          onClick={toggleMenu}
        >
          {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>

        {/* Navigation links (desktop) */}
        <nav className="hidden md:flex gap-6">
		{children}
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 flex flex-col space-y-2">
		{children}
        </div>
      )}
    </header>
  );
}