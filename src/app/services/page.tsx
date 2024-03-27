import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../section/ServicesSection";
import Pricing from "../components/Pricing";

function Services() {
  return (
    <div>
      <Navbar />
      <ServicesSection />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Services;
