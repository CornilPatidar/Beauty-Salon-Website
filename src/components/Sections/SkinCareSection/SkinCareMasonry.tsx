import React from "react";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
const isMobile = window.innerWidth <= 768; // You can tweak breakpoint
import styles from "./SkinCareMasonry.module.css";
import clockIcon from "/icons/clock.webp"; 

type SkinService = {
  img: string;
  title: string;
  time: string;
};

const skinServices: SkinService[] = [
  { img: "/images/skin/peeling.jpeg", title: "Peeling Treatment", time: "30 min" },
  { img: "/images/skin/open-pores.jpg", title: "Open Pores Treatment", time: "40 min" },
  { img: "/images/skin/pimple.webp", title: "Pimple Treatment", time: "45 min" },
  { img: "/images/skin/thermo-herb.jpg", title: "Thermo Herb Treatment", time: "50 min" },
  {   img: isMobile 
    ? "/images/skin/under-eye.jpg"  // Phone
    : "/images/skin/under-eye.jpeg", // Desktop
  title: "Under Eye Circle Treatment", 
  time: "20 min" },
  { img: "/images/skin/pigmentation.jpg", title: "Pigmentation Treatment", time: "35 min" }
];


const SkinCareMasonry: React.FC = () => {
  return (
    <div className={styles.sectionWrapper}>
      {/* Title Section */}
      <div className={styles.titleBox}>
        <h2  className={styles.sectionTitle}>
          Skin Care Treatments
        </h2>
        <p className={styles.sectionSubtitle}>
          Refresh, rejuvenate, and enhance your natural beauty
        </p>
      </div>

      {/* Masonry Grid */}
      <Box sx={{ width: "100%", padding: "20px" }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
          {skinServices.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.img} alt={item.title} className={styles.image} />

              <div className={styles.textBox}>
                <h2  className={styles.title}>
                  {item.title}
                </h2>
                <div className={styles.timeBox}>
                  <img src={clockIcon} alt="Clock" className={styles.clockIcon} />
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
};

export default SkinCareMasonry;