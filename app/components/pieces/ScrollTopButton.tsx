"use client";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [showScrollIcon, setShowScrollIcon] = useState<boolean>(false);

  useEffect(() => {
    const updateScrollIconVisibility = () => {
      setShowScrollIcon(window.scrollY >= 150);
    };

    // Call the function on component mount to set the initial state
    updateScrollIconVisibility();

    // Add scroll event listener
    window.addEventListener("scroll", updateScrollIconVisibility);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", updateScrollIconVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        className={`group fixed bottom-2 right-4 z-50 w-[40px] h-[40px] rounded-full bg-gold hover:bg-transparent duration-300 border-[2px] border-gold ${
          showScrollIcon ? "opacity-[1]" : "opacity-0 z-[-1]"
        } duration-300 `}
        onClick={scrollToTop}
      >
        <KeyboardArrowUpIcon className="!text-black !text-3xl group-hover:!text-gold duration-300" />
      </button>
    </>
  );
}
