"use client";
import { useContext } from "react";
import Navbar from "./Navbar";
import { ContextStates } from "@/lib/context/Store";
import Logo from "./Logo";
import MobileMenuBtn from "../pieces/MobileMenuBtn";

export default function Header() {
  const { isSticky } = useContext(ContextStates);
  return (
    <header
      className={`py-2 ${
        isSticky
          ? "sticky top-0 right-0 animate-sticky_header !bg-black shadow-md"
          : "md:absolute relative right-0 top-0"
      } z-50 w-full flex items-center transition-all duration-500  bg-light_opacity_bg`}
    >
      <div className="container flex items-center justify-between">
        <MobileMenuBtn />
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
