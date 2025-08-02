// Import Swiper components for making a cool sliding carousel
import { Swiper, SwiperSlide } from "swiper/react"; 
// Import the navigation arrows for the carousel
import { Navigation } from "swiper/modules"; 

// Import Swiper styles (so it looks nice)
import "swiper/css";
import "swiper/css/navigation";

// Import the custom CSS for our carousel styles
import styles from "./HaircutCarousel.module.css";

// Here is our list of haircuts to show in the carousel
// Each haircut has a picture, a title, and a short description
const haircuts = [
  {
    img: "/images/haircuts/bixie.png",
    title: "Layers With Step Cut",
    desc: "Voluminous • Flowing • Face-Framing",
  },
  {
    img: "/images/haircuts/angled-bob.png",
    title: "Angled Bob",
    desc: "Sharp • Modern • Sleek",
  },
  {
    img: "/images/haircuts/shoulder-bangs.png",
    title: "Shoulder Length Layers with Bangs",
    desc: "Soft • Youthful • Effortless",
  },
  {
    img: "/images/haircuts/curly-bob.png",
    title: "Multi Layer Cut",
    desc: "Bouncy • Defined • Playful",
  },
  {
    img: "/images/haircuts/shag-cut.png",
    title: "Shag-Cut",
    desc: "Choppy • Layered • Textured",
  },
];

// This is our main component that shows the haircut carousel
export default function HaircutCarousel() {
  return (
    <div className={styles.haircutCarouselSection}>
      
      {/* Title for this section */}
      <h2 className={styles.sectionTitle}>Explore Women's Haircuts</h2>
      {/* Small text under the title */}
      <p className={styles.sectionSubtitle}>
        Browse a selection of our women’s haircuts to get inspired.
      </p>

      {/* Swiper: The sliding picture component */}
      <Swiper
        modules={[Navigation]} // Add arrow navigation
        navigation={window.innerWidth > 768} // enable nav only for desktop
        spaceBetween={20} // Space between each card in pixels
        slidesPerView={4} // How many cards to show at the same time (for big screens)
        
        // These are breakpoints (for making it look good on all screen sizes)
        breakpoints={{
          0: { slidesPerView: 1.2 },   // Small phones show 1.2 cards
          640: { slidesPerView: 2 },   // Tablets show 2 cards
          1024: { slidesPerView: 4 },  // Big screens show 4 cards
        }}
      >
        {/* Loop through every haircut in our list */}
        {haircuts.map((cut, idx) => (
          // Each haircut gets its own slide in the carousel
          <SwiperSlide key={idx}>
            {/* Card for each haircut */}
            <div className={styles.haircutCard}>
              {/* Haircut picture */}
              <img src={cut.img} alt={cut.title} />
              {/* Haircut name */}
              <h3>{cut.title}</h3>
              {/* Short description */}
              <p>{cut.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.additionalServices}>
  <h2>Additional women’s haircare services</h2>
  <p>
    Need your bangs touched up or your hair formally styled? That’s great! 
    Just visit your local salon and we’ll be happy to help.
  </p>

  <div className={styles.serviceList}>
    <div className={styles.serviceItem}>
      <img
        src="/icons/scissors.png"
        alt="Bang Trim"
        style={{ width: "96px", height: "96px", objectFit: "contain" }}
      />
      <span>Bang Trim</span>
    </div>

    <div className={styles.serviceItem}>
      <img
        src="/icons/shampoo.png"
        alt="Shampoo"
        style={{ width: "96px", height: "96px", objectFit: "contain" }}
      />
      <span>Shampoo</span>
    </div>

    <div className={styles.serviceItem}>
      <img
        src="/icons/styling.png"
        alt="Styling"
        style={{ width: "96px", height: "96px", objectFit: "contain" }}
      />
      <span>Styling</span>
    </div>
  </div>
    <button className={styles.btn} onClick={() => window.location.href = "/book"}>BOOK YOUR PERFECT HAIR DAY</button>
</div>



    </div>
  );
}
