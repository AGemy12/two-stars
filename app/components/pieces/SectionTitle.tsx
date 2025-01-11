import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="w-fit mx-auto px-6 py-3  text-3xl text-gold font-bold relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent after:border-[2px] after:border-gold after:rounded-sm before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:w-[90%] before:h-[80%] before:bg-transparent before:border-[2px] before:border-off_wihte before:rounded-sm ">
      {title}
    </h2>
  );
}
