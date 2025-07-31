import React from "react";
import styles from "./ServicesSection.module.css";

type Service = {
  title: string;
  img: string;
  link: string;
};

const services: Service[] = [
  { title: "Hair Care", img: "/images/hair-care.png", link: "#" },
  { title: "Skin Care", img: "/images/skin-care.png", link: "#" },
  { title: "Body Care", img: "/images/body-care.png", link: "#" },
  { title: "Bridal Make Up", img: "images/bridal-care.png", link: "#" },
  {title: "Treatment", img: "images/treatment.png", link: "#" }
];

const ServicesSection: React.FC = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.heading}>Salon’s Services</h2>
      <p className={styles.subheading}>
        Serving Modasa with care and style since day one.
      </p>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
          <img src={service.img} alt={service.title} />
          <div className={styles["card-text"]}>
            <h3>{service.title}</h3>
            <a href={service.link}>Know More »</a>
          </div>
        </div>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <button className={styles.moreServicesButton}>MORE SERVICES</button>
        </div>
    </section>
  );
};

export default ServicesSection;
