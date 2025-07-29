const Hero = () => {
  return (
    <div className="relative bg-[url('/assets/salon-bg.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center text-white">
      <div className="bg-black/50 w-full h-full absolute top-0 left-0" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Kum Kum Beauty Parlour
        </h1>
        <p className="text-lg md:text-xl">
          Where beauty meets tradition ✨
        </p>
      </div>
    </div>
  );
};

export default Hero;
