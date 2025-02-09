"use client";
import About from "./components/main/About";
import ContactUs from "./components/main/ContactUs";
import HeroSection from "./components/main/HeroSection";
import OurProjects from "./components/main/OurProjects";
import Parteners from "./components/main/Parteners";
import Services from "./components/main/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <OurProjects />
      <Services />
      <Parteners />
      <ContactUs />
    </>
  );
}
