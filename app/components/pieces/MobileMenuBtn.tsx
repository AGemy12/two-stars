import React from "react";

export default function MobileMenuBtn() {
  return (
    <button className="group w-[30px] flex items-start gap-[5px] flex-col md:hidden">
      <span className="w-full block h-[2px] bg-gold"></span>
      <span className="w-3/4 block h-[2px] bg-off_wihte duration-300 group-hover:w-full"></span>
      <span className="w-full block h-[2px] bg-gold"></span>
    </button>
  );
}
