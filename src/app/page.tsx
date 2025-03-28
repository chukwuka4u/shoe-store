"use client";

import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProductGrid from "../components/home/ProductGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HomePage: React.FC = () => {

  return (
    <main className="overflow-hidden px-4 pt-6 pb-2.5 mx-auto w-full bg-stone-200 max-md:max-w-[480px]">
      <Header />
      <section className="flex flex-col items-center mx-auto w-full max-w-[480px]">
        <HeroSection />
        {/* <NewDropsSection /> */}
        <ProductGrid />
      </section>
      <Footer />
      <div className="flex absolute z-0 gap-2 items-start self-start min-h-1.5 right-[155px] top-[253px]" />
    </main>
  );
};

export default HomePage;
