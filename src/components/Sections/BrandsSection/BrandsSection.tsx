import styles from "./BrandsSection.module.css";

const brands = [
  "/brands/loreal.png",
  "/brands/mac.png",
  "/brands/nykaa.webp",
  "/brands/huda.svg",
  "/brands/maybelline.jpg",
  "/brands/clinique.svg",
];

export default function BrandsSection() {
  return (
    <section className={styles.brandsSection}>
      <h2 className={styles.heading}>Brands We Carry</h2>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {brands.concat(brands).map((logo, index) => (
            <div className={styles.brandLogo} key={index}>
              <img src={logo} alt={`Brand ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
