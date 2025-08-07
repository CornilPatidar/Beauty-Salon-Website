import React from "react";
import styles from "./SkinCare.module.css";
import SkinCareMasonry from "@/components/Sections/SkinCareSection/SkinCareMasonry";
import ScrollToTop from '@/components/ScrollToTop';


const SkinCare: React.FC = () => {
  return (
    <>
<ScrollToTop />
      {/* Top Section - Text & Image */}
      <div className={styles.container}>
        {/* Left - Text */}
  <div className={styles.textSection}>
    <h4 className={styles.subheading}>SKIN CARE FOR</h4>
    <h1 className={styles.heading}>Radiant, Healthy Skin</h1>
    <p className={styles.description}>
      Refresh and rejuvenate your skin with our professional skin care treatments at KumKum Beauty.
      From cleansing facials to advanced treatments, we’ll help you achieve a glowing, healthy look 
      that’s perfect for your unique skin type.
    </p>

    {/* Book Now button */}
    <button 
      className={styles.bookButton} 
      onClick={() => window.location.href = "/book"}
    >
      Book Now
    </button>
  </div>

        {/* Right - Image */}
        <div className={styles.imageSection}>
          <img src="/images/skin-care-model.png" alt="Skin Care" />
        </div>
      </div>

      {/* Skin Care Treatments Grid */}
      <SkinCareMasonry />


    </>
  );
};

export default SkinCare;
