import React from "react";
import styles from "./FooterSection.module.css"; // Import CSS module

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          {/* Column 1 */}
          <div className={styles.footerColumn}>
            <div className={styles.footerLogo}>KumKum Beauty</div>
            <p>
              Redefining beauty & style in Modasa. Premium products, expert care,
              and timeless transformations.
            </p>
          </div>

          {/* Column 2 */}
          <div className={styles.footerColumn}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Offers</a></li>
              <li><a href="#">Franchise</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className={styles.footerColumn}>
            <h4>Contact</h4>
            <ul>
              <li>📍 Modasa, Gujarat, India</li>
              <li>📞 +91 966-465-0257</li>
              <li>📧 info@kumkumbeauty.in</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className={styles.footerColumn}>
            <h4>Stay Updated</h4>
            <ul>
              <li><a href="#">Subscribe to Newsletter</a></li>
              <li><a href="#">Latest Offers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom text */}
        <div className={styles.footerBottom}>
          © 2025 KumKum Beauty. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
