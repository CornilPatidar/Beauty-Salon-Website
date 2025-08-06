import React from "react";
import styles from "./ServicesSection.module.css";
import { Link } from "react-router-dom";

type Service = {
  title: string;
  img: string;
  link: string;
};

const services: Service[] = [
  { title: "Hair Care", img: "/services/hair-care.png", link: "/hair-care" },
  { title: "Skin Care", img: "/services/skin-care.png", link: "/skin-care" },
  { title: "Body Care", img: "/services/body-care.png", link: "#" },
  { title: "Bridal Make Up", img: "services/bridal-care.png", link: "#" },
  {title: "Treatment", img: "services/treatment.png", link: "#" }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.heading}>Salon’s Services</h2>
      <p className={styles.subheading}>
        Serving Modasa with care and style since day one.
      </p>

      <div className={styles.grid}>

        
      {services.map((service, index) => (
        <Link to={service.link} key={index} className={styles.card}>
          <img src={service.img} alt={service.title} />
          <div className={styles["card-text"]}>
            <h3>{service.title}</h3>
            <span>Know More »</span>
          </div>
        </Link>
      ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <button className={styles.moreServicesButton}>MORE SERVICES</button>
        </div>
    </section>
  );
};

export default ServicesSection;
