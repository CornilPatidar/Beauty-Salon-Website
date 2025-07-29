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
    <header className="sticky top-0 z-50 shadow bg-white">
      {/* Top bar */}
      <div className="bg-black text-white flex items-center justify-between px-4 py-2 md:px-8">
        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide font-serif">
          KumKum Beauty
        </h1>

        {/* Icons */}
        <div className="hidden md:flex gap-4 items-center text-white text-xl">
          <FiSearch />
          <FiUser />
          <FiHeart />
          <FiShoppingCart />
          <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded font-semibold text-sm hover:scale-105 transition">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Bottom nav links */}
      <div className="bg-white hidden md:flex items-center justify-center space-x-6 py-2 font-semibold uppercase text-sm tracking-wide text-black">
        {navItems.map((item, i) => (
          <a href="#" key={i} className="hover:text-pink-500 transition">{item}</a>
        ))}
      </div>

      {/* Mobile Nav (dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white text-black px-4 py-3 space-y-3 shadow-md">
          {navItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="block border-b border-gray-200 pb-2 text-lg font-medium hover:text-pink-500"
            >
              {item}
            </a>
          ))}

          <div className="flex justify-end mt-4">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded font-semibold text-sm hover:scale-105 transition">
              Book
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
