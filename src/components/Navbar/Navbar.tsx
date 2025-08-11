import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [_isDesktop, setIsDesktop] = useState(false); // eslint-disable-line
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Services", hasDropdown: true, path: "#services" },
    { name: "Hair Care", hasDropdown: true, path: "/hair-care" },
    { name: "Skin Care", hasDropdown: true, path: "/skin-care" },
    { name: "Bridal", hasDropdown: false },
    { name: "Contact", hasDropdown: true}
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleNavClick = (path: string) => {
    if (path === "#services") {
      if (location.pathname === "/") {
        const el = document.getElementById("services");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/?scroll=services");
      }
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <header>
      {/* Top Black Bar */}
      <div className={styles.navbar}>
        <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <div className={styles.logo}>
          <a href="/" onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}>
            KumKum Beauty
          </a>
        </div>
        <div className={styles.icons}>
          <a
            href="/book"
            className={styles.bookButton}
            onClick={(e) => {
              e.preventDefault();
              navigate("/book");
            }}
          >
            Book Reservation
          </a>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.path || "#"}
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.path || "#");
            }}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <nav className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          <FiX />
        </button>
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.path || "#"}
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.path || "#");
            }}
          >
            {item.name}
          </a>
        ))}
        <a
          href="/book"
          className="bridal-btn"
          onClick={(e) => {
            e.preventDefault();
            navigate("/book");
            setIsOpen(false);
          }}
        >
          Book Appointment
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
