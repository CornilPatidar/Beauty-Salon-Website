import '@/App.css';
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import BridalSection from "@/components/BridalSection/BridalSection"
import Navbar from "@/components/Navbar";
import BrandsSection from "@/components/BrandsSection/BrandsSection";
import FooterSection from "@/components/FooterSection/FooterSection";

function App() {
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
