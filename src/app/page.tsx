import HeroSection from "./_components/HeroSection";
import HomeNavbar from "./_components/HomeNavbar";
import PricingSection from "./_components/PricingSection";

const Home = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[200px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[var(--gradient-primary)] via-[var(--gradient-secondary)] to-[var(--gradient-primary)] opacity-20 blur-2xl md:h-[400px] md:w-[800px]"></div>
        <HomeNavbar />
        <HeroSection />
      </div>
      <PricingSection />
    </>
  );
};

export default Home;
