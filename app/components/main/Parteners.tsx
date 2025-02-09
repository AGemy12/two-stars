import React from "react";
import SectionTitle from "../pieces/SectionTitle";
import Partener from "../pieces/Partener";

export default function Parteners() {
  return (
    <section className="mb-[75px] md:mb-[100px] container">
      <SectionTitle title="شركاء النجاح" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-12">
        <Partener srcImg="/assets/media/partenars/6.png" />
        <Partener srcImg="/assets/media/partenars/7.png" />
        <Partener srcImg="/assets/media/partenars/8.png" />
        <Partener srcImg="/assets/media/partenars/9.png" />
        <Partener srcImg="/assets/media/partenars/10.png" />
        <Partener srcImg="/assets/media/partenars/11.png" />
        <Partener srcImg="/assets/media/partenars/12.png" />
        <Partener srcImg="/assets/media/partenars/13.png" />
        <Partener srcImg="/assets/media/partenars/14.png" />
        <Partener srcImg="/assets/media/partenars/15.png" />
      </div>
    </section>
  );
}
