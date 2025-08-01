import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>5‑STAR HAIR DAYS START HERE</h1>
        <p>Just ask our 15k fans</p>
        <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
        <a href="/book" className={styles.btn}>
  BOOK YOUR PERFECT HAIR DAY
</a>
      </div>
    </section>
  );
};

export default HeroSection;
