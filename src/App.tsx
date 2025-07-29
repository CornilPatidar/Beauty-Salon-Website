import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactButtons from '../components/ContactButtons';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ContactButtons />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <h1 className="text-4xl font-bold text-pink-600">
        TAILWIND WORKS 🎉
      </h1>
    </div>
    </>
    
  );
}

export default App;