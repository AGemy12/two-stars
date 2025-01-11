import React from "react";
import SectionTitle from "../pieces/SectionTitle";
import ServiceCard from "../pieces/ServiceCard";
import { servicesCardData } from "@/lib/data/servicesCardsData";

export default function Services() {
  return (
    <section className="mb-12">
      <SectionTitle title="خدماتنا" />
      <div className="bg-section_bg bg-contain bg-center bg-no-repeat w-full ">
        <div className="relative w-full h-full before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.9)]">
          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 relative mt-12">
            {servicesCardData.map((item) => (
              <ServiceCard
                key={item.id}
                serviceTitle={item.serviceTitle}
                serviceDescription={item.serviceDescription}
                serviceImgSrc={item.serviceImgSrc}
                serviceImgAlt={item.serviceImgAlt}
                serviceImgTitle={item.serviceTitle}
                serviceLink={item.serviceLink}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
