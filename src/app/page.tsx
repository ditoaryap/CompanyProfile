import Navbar from "./components/Navbar";
import Hero from "./section/HeroSection";
import Footer from "./components/Footer";
import Services from "./section/ServicesSection";
import Testimonial from "./section/TestimonialSection";
import AboutSection from "./section/AboutSection";
import TeamsSection from "./section/TeamsSection";

export default function Home() {
  return (
    <>
      <div className="scroll-smooth">
        <Navbar />
        <Hero />
        <AboutSection />
        <Services />
        <Testimonial />
        <TeamsSection />
        <Footer />
      </div>
    </>
  );
}
