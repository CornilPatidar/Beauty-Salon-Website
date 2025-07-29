import { useState } from 'react';
import { FiMenu, FiX, FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Services", "Shop", "Bridal", "Offers", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 md:px-8 bg-black text-white">
        {/* Left - Menu Icon (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Center - Logo */}
        <h1 className="text-xl font-bold tracking-wider font-serif md:text-2xl">
          KumKum Beauty
        </h1>

        {/* Right - Icons (desktop) */}
        <div className="hidden md:flex items-center gap-4 text-xl">
          <FiSearch className="cursor-pointer hover:text-pink-400" />
          <FiUser className="cursor-pointer hover:text-pink-400" />
          <FiHeart className="cursor-pointer hover:text-pink-400" />
          <FiShoppingCart className="cursor-pointer hover:text-pink-400" />
          <button className="bg-gradient-to-r from-yellow-300 to-orange-400 text-black px-3 py-1 rounded-md font-semibold text-sm hover:scale-105 transition">
            Book
          </button>
        </div>
      </div>

      {/* Nav Links (desktop) */}
      <nav className="hidden md:flex justify-center gap-6 py-3 font-semibold text-sm uppercase tracking-wide text-black bg-white">
        {navItems.map((item, idx) => (
          <a key={idx} href="#" className="hover:text-pink-500 transition">
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2 shadow-lg">
          {navItems.map((item, idx) => (
            <a key={idx} href="#" className="block border-b pb-2 text-base font-medium hover:text-pink-500">
              {item}
            </a>
          ))}
          <button className="mt-4 w-full bg-gradient-to-r from-yellow-300 to-orange-400 text-black py-2 rounded-md font-semibold text-sm">
            Book Appointment
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
