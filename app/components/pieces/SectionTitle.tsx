import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="w-fit mx-auto px-6 py-3 text-4xl md:text-5xl text-gold font-bold relative  ">
      {title}
    </h2>
  );
}
