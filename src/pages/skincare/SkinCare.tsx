import React from "react";
import styles from "./SkinCare.module.css";
import HaircutCarousel from "@/components/HaircutCarousel/HaircutCarousel";

const SkinCare: React.FC = () => {
  return (
    <>
      {/* Top Section - Text & Image */}
      <div className={styles.container}>
        {/* Left - Text */}
        <div className={styles.textSection}>
          <h4 className={styles.subheading}>HAIRCUTS FOR</h4>
          <h1 className={styles.heading}>Women</h1>
          <p className={styles.description}>
            Look and feel your best with women’s skincuts at KumKum Beauty.
            Whether your skin is long or short, thick or thin, curly or straight,
            or somewhere in between, you can get the skincut you want at our salon.
          </p>

          {/* Book Now button */}
          <button className={styles.bookButton} onClick={() => window.location.href = "/book"}>Book Now</button>
        </div>

        {/* Right - Image */}
        <div className={styles.imageSection}>
          <img src="/images/skin-care-model.png" alt="Skin Care" />
        </div>
      </div>

      {/* Carousel Section */}
      <HaircutCarousel />

    </>
  );
};

export default SkinCare;
