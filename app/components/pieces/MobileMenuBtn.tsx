import React from "react";

export default function MobileMenuBtn() {
  return (
    <button className="group w-[30px] flex items-start gap-[5px] flex-col md:hidden">
      <span className="w-full block h-[2px] bg-gold"></span>
      <span className="w-full block h-[2px] bg-off_wihte animate-menu_bar"></span>
      <span className="w-full block h-[2px] bg-gold"></span>
    </button>
  );
}
