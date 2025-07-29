import { useState } from 'react';
import { FiMenu, FiX, FiSearch, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Services",
    "Shop",
    "Bridal",
    "Offers",
    "Contact"
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide md:text-2xl">KumKum Beauty</h1>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6 uppercase font-semibold text-sm">
          {navItems.map((item, i) => (
            <a key={i} href="#" className="hover:text-pink-400">{item}</a>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex gap-4 items-center">
          <FiSearch className="hidden md:block" />
          <FiUser className="hidden md:block" />
          <FiHeart className="hidden md:block" />
          <FiShoppingCart className="hidden md:block" />
          <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-md font-bold text-sm">
            Book
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-white text-black px-4 py-3 space-y-3">
          {navItems.map((item, i) => (
            <a key={i} href="#" className="block border-b pb-2">{item}</a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
