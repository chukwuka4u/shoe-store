"use client";

import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProductGrid from "../components/home/ProductGrid";
import NewDropsSection from "@/components/home/NewDropsSection";
import AllBrands from "@/components/home/AllBrands";
// import AuthOptions from "@/components/home/AuthOptions"

const HomePage: React.FC = () => {

  return (
    <section className="flex flex-col items-center mx-auto w-full max-w-[480px]">
      <HeroSection />
      {/* <AuthOptions /> */}
      <NewDropsSection />
      <ProductGrid />
      <AllBrands />
    </section>

  );
};

export default HomePage;
