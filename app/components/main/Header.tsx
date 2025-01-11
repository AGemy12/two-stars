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
      className={` h-[80px] ${
        isSticky
          ? "sticky top-0 right-0 animate-sticky_header !bg-black shadow-md"
          : "absolute right-0 top-0"
      } z-50 w-full h-[70px] flex items-center transition-all duration-500  py-2 bg-light_opacity_bg`}
    >
      <div className="container flex items-center justify-between">
        <MobileMenuBtn />
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
