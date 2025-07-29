import { useState } from 'react';
import './App.css';
import {
  FiMenu,
  FiX,
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
} from 'react-icons/fi';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    'Services',
    'Shop',
    'Bridal',
    'Runway Rewards',
    'Offers',
    'Franchise',
    'Salon Locator',
    'Contact',
  ];

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-top">
          <div className="menu mobile-only" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </div>
          <div className="logo">KumKum Beauty</div>
          <div className="nav-icons desktop-only">
            <FiSearch />
            <FiUser />
            <FiHeart />
            <FiShoppingCart />
            <button className="book-btn">Book Appointment</button>
          </div>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, i) => (
            <a href="#" key={i}>{item}</a>
          ))}
        </nav>
      </header>

      <main className="hero">
        <div className="hero-content">
          <h1>Glow With Confidence</h1>
          <p>Experience luxury beauty treatments tailored just for you.</p>
          <button className="hero-btn">Explore Services</button>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 KumKum Beauty. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
