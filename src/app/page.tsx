"use client";

import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProductGrid from "../components/home/ProductGrid";

const HomePage: React.FC = () => {

  return (
    <section className="flex flex-col items-center mx-auto w-full max-w-[480px]">
      <HeroSection />
      {/* <NewDropsSection /> */}
      <ProductGrid />
    </section>

  );
};

export default HomePage;
