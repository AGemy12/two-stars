"use client";
import About from "./components/main/About";
import HeroSection from "./components/main/HeroSection";
import Services from "./components/main/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
    </>
  );
}
