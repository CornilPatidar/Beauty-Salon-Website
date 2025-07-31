import "@/App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ServicesSection from "@/components/Sections/ServicesSection/ServicesSection";
import HeroSection from "@/components/Sections/HeroSection/HeroSection";
import BridalSection from "@/components/Sections/BridalSection/BridalSection";
import Navbar from "@/components/Navbar/Navbar";
import BrandsSection from "@/components/Sections/BrandsSection/BrandsSection";
import FooterSection from "@/components/Sections/FooterSection/FooterSection";

import HairCare from "@/pages/HairCare";

// ✅ Home page as a separate component so routing is clean
function HomePage() {
  return (
    <>
      <section className="banner">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/banner-mobile2.png" />
          <img src="/images/banner-desktop.png" alt="KumKum Beauty Offer" />
        </picture>
      </section>

      <ServicesSection />
      <HeroSection />
      <BridalSection />
      <BrandsSection />
    </>
  );
}

function App() {
  useEffect(() => {
    document.title = "KumKum Beauty";

    const link =
      (document.querySelector("link[rel~='icon']") as HTMLLinkElement) ||
      document.createElement("link");
    link.rel = "icon";
    link.href = "/images/webicon.png"; // ✅ Works if inside public/images
    document.getElementsByTagName("head")[0].appendChild(link);
  }, []);

  return (
    <div className="app">
      <Navbar />

      {/* ✅ Routes for multiple pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hair-care" element={<HairCare />} />
        {/* Add more pages here later */}
      </Routes>

      <FooterSection />
    </div>
  );
}

export default App;
