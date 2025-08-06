import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>5‑STAR HAIR DAYS START HERE</h1>
        <p>Trusted by 15k+ women </p>
        <div className={styles.stars}> 
          <span>⭐⭐⭐⭐⭐</span>
      </div>
        <a href="/book" className={styles.btn}>
          <span>BOOK YOUR PERFECT HAIR DAY</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
