import React from "react";
import "./BridalSection.css";

const BridalSection: React.FC = () => {
  return (
    <div className="bridal-wrapper">
      <section className="bridal-section">
        <div className="bridal-content">
          <h2>Exclusively Bridal</h2>
          <p>
            Make your wedding day unforgettable with our luxurious bridal services.
            At KumKum Beauty, we rely on premium products and uphold the highest
            hygiene standards to ensure a flawless, radiant look. Trust our expert
            team to provide you with exceptional care and beauty on your special
            day.
          </p>
          <a href="/book" className="bridal-btn">Book Now</a>
        </div>

        <div className="bridal-image">
          <img src="/images/bridal_img.png" alt="Bridal Couple" />
          <div className="mandala"></div>
        </div>
      </section>
    </div>
  );
};

export default BridalSection;
