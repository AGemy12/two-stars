"use client";
import { useContext } from "react";
import { ContextStates } from "@/lib/context/Store";
import ContactItem from "../pieces/ContactItem";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function ContactsLinks() {
  const { isClosed, toggleClosed } = useContext(ContextStates);
  return (
    <div
      className={`fixed top-1/2 -translate-y-1/2 z-50 ${
        isClosed ? "left-0" : "left-4"
      } `}
    >
      <div className="relative">
        <button
          className="absolute left-1/2 -translate-x-1/2 bottom-full"
          onClick={toggleClosed}
        >
          {isClosed ? (
            <>
              {" "}
              <MdOutlineKeyboardDoubleArrowRight className="animate-backward_arrow text-3xl text-white duration-300 hover:text-gold " />
            </>
          ) : (
            <>
              {" "}
              <MdOutlineKeyboardDoubleArrowLeft className="animate-forward_arrow text-3xl text-white duration-300 hover:text-gold " />
            </>
          )}
        </button>
        <div className="">
          <div
            className={`${
              isClosed ? "-translate-x-[calc(100%+50px)]" : null
            } transition-all duration-500 flex flex-col justify-center items-center gap-3 p-3 bg-light_black rounded-md shadow-sm`}
          >
            <ContactItem
              title="WhatsApp"
              icon={
                <FaWhatsapp className="text-off_wihte text-[1rem] md:text-[1.5rem] duration-300 group-hover:text-white " />
              }
              path="##"
            />
            <ContactItem
              title="Facebook"
              icon={
                <FaFacebookF className="text-off_wihte text-[1rem] md:text-[1.5rem] duration-300 group-hover:text-white " />
              }
              path="##"
            />
            <ContactItem
              title="Instagram"
              icon={
                <FaInstagram className="text-off_wihte text-[1rem] md:text-[1.5rem] duration-300 group-hover:text-white " />
              }
              path="##"
            />
            <ContactItem
              title="TikTok"
              icon={
                <FaTiktok className="text-off_wihte text-[1rem] md:text-[1.5rem] duration-300 group-hover:text-white " />
              }
              path="##"
            />
            <ContactItem
              title="Twitter"
              icon={
                <FaXTwitter className="text-off_wihte text-[1rem] md:text-[1.5rem] duration-300 group-hover:text-white " />
              }
              path="##"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
