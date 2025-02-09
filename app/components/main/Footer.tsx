import React from "react";
import Logo from "./Logo";
import ContactItem from "../pieces/ContactItem";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t-[1px] shadow-md border-t-gold mt-8">
      <div className="py-8 border-b-[1px] border-b-[rgba(255,255,255,0.1)]">
        <div className="w-fit mx-auto flex flex-col items-center justify-center gap-8 ">
          <Logo logoStyle="w-[200px]" />
          <div className="flex items-center gap-4">
            <div className="group w-[40px] h-[40px] rounded-md overflow-hidden bg-[#1f1e1e] shadow-md flex items-center justify-center duration-300 md:hover:bg-gold">
              <Link href="#" target="_blank" className="block">
                <IoCall className="text-gold text-3xl md:group-hover:text-[#1f1e1e]" />
              </Link>
            </div>
            <div className="group w-[40px] h-[40px] rounded-md overflow-hidden bg-[#1f1e1e] shadow-md flex items-center justify-center duration-300 md:hover:bg-gold">
              <Link
                href="https://wa.me/+966557243381"
                target="_blank"
                className="block"
              >
                <FaWhatsapp className="text-gold text-3xl md:group-hover:text-[#1f1e1e]" />
              </Link>
            </div>
            <div className="group w-[40px] h-[40px] rounded-md overflow-hidden bg-[#1f1e1e] shadow-md flex items-center justify-center duration-300 md:hover:bg-gold">
              <Link
                href="https://www.instagram.com/p/DEvV95OROwA/?utm_source=ig_web_copy_link"
                target="_blank"
                className="block"
              >
                <FaInstagram className="text-gold text-3xl md:group-hover:text-[#1f1e1e]" />
              </Link>
            </div>
            <div className="group w-[40px] h-[40px] rounded-md overflow-hidden bg-[#1f1e1e] shadow-md flex items-center justify-center duration-300 md:hover:bg-gold">
              <Link href="#" target="_blank" className="block">
                <FaFacebookF className="text-gold text-3xl md:group-hover:text-[#1f1e1e]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-8 pb-4 w-fit mx-auto flex items-center justify-center gap-4 md:gap-6 ">
        <span className="text-off_wihte text-[0.9rem] md:text-[1rem] relative after:absolute after:-left-3 after:top-[20%]  after:w-[2px] after:h-[70%] after:bg-gold">
          جميع الحقوق محفوظة 2025
        </span>
        <Logo logoStyle="!w-[40px] md:!w-[50px]" />
      </div>
    </footer>
  );
}
