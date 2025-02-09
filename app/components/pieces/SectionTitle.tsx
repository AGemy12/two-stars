import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="w-fit mx-auto mb-8 px-6 py-3 text-3xl md:text-4xl text-gray_text bg-gold rounded-md font-bold relative before:absolute before:top-2 before:left-2 before:w-full before:h-full before:bg-transparent before:border-[2px] before:border-off_wihte before:rounded-md before:z-[-1] before:duration-500 hover:before:top-0 hover:before:left-0 hover:before:z-0">
      {title}
    </h2>
  );
}
