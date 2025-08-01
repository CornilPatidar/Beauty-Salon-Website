import React from "react";
import styles from "./HairCare.module.css";
import HaircutCarousel from "@/components/HaircutCarousel/HaircutCarousel";

const HairCare: React.FC = () => {
  return (
    <>
      {/* Top Section - Text & Image */}
      <div className={styles.container}>
        {/* Left - Text */}
        <div className={styles.textSection}>
          <h4 className={styles.subheading}>HAIRCUTS FOR</h4>
          <h1 className={styles.heading}>Women</h1>
          <p className={styles.description}>
            Look and feel your best with women’s haircuts at KumKum Beauty.
            Whether your hair is long or short, thick or thin, curly or straight,
            or somewhere in between, you can get the haircut you want at our salon.
          </p>

          {/* Book Now button */}
          <button className={styles.bookButton}>Book Now</button>
        </div>

        {/* Right - Image */}
        <div className={styles.imageSection}>
          <img src="/images/hair-care-model.jpg" alt="Hair Care" />
        </div>
      </div>

      {/* Carousel Section */}
      <HaircutCarousel />

    </>
  );
};

export default HairCare;
