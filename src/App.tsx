import '@/App.css';
import { useEffect } from "react";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import BridalSection from "@/components/BridalSection/BridalSection"
import Navbar from "@/components/Navbar";
import BrandsSection from "@/components/BrandsSection/BrandsSection";
import FooterSection from "@/components/FooterSection/FooterSection";

function App() {

  useEffect(() => {
    document.title = "KumKum Beauty";

    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
      || document.createElement("link");
    link.rel = "icon";
    link.href = "/images/webicon.png"; // ✅ this path works if it's inside public/images
    document.getElementsByTagName("head")[0].appendChild(link);
  }, []);

  

  return (
    <div className="app">
      <Navbar />

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
      <FooterSection />
    
    </div>
  );
}

export default App;
