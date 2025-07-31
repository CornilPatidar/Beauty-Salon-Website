import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { FiMenu, FiX,  } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [_isDesktop, setIsDesktop] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  const navItems = [
    { name: "Services", hasDropdown: true },
    { name: "Shop", hasDropdown: true },
    { name: "Bridal", hasDropdown: false },
    { name: "Offer", hasDropdown: false },
    { name: "Franchise", hasDropdown: true },
    { name: "Salon Locator", hasDropdown: false },
    { name: "Contact", hasDropdown: true }
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <header>
      {/* Top Black Bar */}
      <div className={styles.navbar}>
        <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <div className={styles.logo}>KumKum Beauty</div>
        <div className={styles.icons}>
         
          <button className={styles.bookButton}>Book Reservation</button>
        </div>
      </div>

      {/* Desktop White Navigation Bar */}
      <nav className={styles.desktopNav}>
        {navItems.map((item, idx) => (
          <a key={idx} href="#" className={styles.link}>
            {item.name}
            {/* {item.hasDropdown && <FiChevronDown className={styles.chevron} />} */}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <nav className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          <FiX />
        </button>
        {navItems.map((item, idx) => (
          <a key={idx} href="#" className={styles.link}>
            {item.name}
            {/* {item.hasDropdown && <FiChevronDown className={styles.chevron} />} */}
          </a>
        ))}
        <a href="#" className={styles.bookAppointmentMobile}>
          Book Appointment
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
