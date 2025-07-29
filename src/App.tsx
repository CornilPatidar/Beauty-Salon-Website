import { useState } from 'react';
import './App.css';
import { FiMenu, FiX } from 'react-icons/fi';
import ServicesSection from "../components/ServicesSection/ServicesSection";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    'Services',
    'Shop',
    'Bridal',
    'Offers',
    'Franchise',
    'Salon Locator',
    'Contact'
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-top">
          {/* Mobile menu button */}
          <div className="menu mobile-only" onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu size={22} />
          </div>

          {/* Mobile close button */}
          {menuOpen && (
            <div className="close-menu mobile-only" onClick={() => setMenuOpen(false)}>
              <FiX size={22} />
            </div>
          )}

          {/* Logo */}
          <div className="logo">KumKum Beauty</div>

          {/* Desktop Book Appointment */}
          <button className="book-btn desktop-only">Book Appointment</button>
        </div>

        {/* Mobile menu */}
        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, i) => (
            <a href="#" key={i} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}

          {/* Book Appointment in mobile menu */}
          <a href="#" className="book-btn-mobile" onClick={() => setMenuOpen(false)}>
            Book Appointment
          </a>
        </nav>
      </header>

          <section className="banner">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/banner-mobile2.png" />
              <img src="/images/banner-desktop.png" alt="KumKum Beauty Offer" />
            </picture>
          </section>

   

      <ServicesSection />

         {/* Hero Section */}
         <main className="hero">
        <div className="hero-content">
          <h1>Glow With Confidence</h1>
          <p>Experience luxury beauty treatments tailored just for you.</p>
          <button className="hero-btn">Explore Services</button>
        </div>
      </main>

      
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 KumKum Beauty. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
