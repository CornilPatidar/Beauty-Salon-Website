import './App.css';
import ServicesSection from "../components/ServicesSection/ServicesSection";
import Navbar from "../components/Navbar";

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

         {/* Hero Section */}
         <main className="hero">
        <div className="hero-content">
          <h1>Glow With Confidence</h1>
          <p>Experience luxury beauty treatments tailored just for you.</p>
          <button className="hero-btn">Explore Services</button>
        </div>
      </main>


      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 KumKum Beauty. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
