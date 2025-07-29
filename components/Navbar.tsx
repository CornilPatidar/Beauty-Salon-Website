import { useState } from 'react';
import styles from './Navbar.module.css';
import { FiMenu, FiX, FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Services", "Shop", "Bridal", "Offers", "Contact"];

  return (
    <header>
      <div className={styles.navbar}>
        <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <div className={styles.logo}>KumKum Beauty</div>
        <div className={styles.icons}>
          <FiSearch />
          <FiUser />
          <FiHeart />
          <FiShoppingCart />
          <button className={styles.bookButton}>Book</button>
        </div>
      </div>

      {(isOpen || window.innerWidth >= 768) && (
        <nav className={styles.navLinks}>
          {navItems.map((item, idx) => (
            <a key={idx} href="#" className={styles.link}>
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
