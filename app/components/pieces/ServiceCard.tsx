import React from "react";
import MainButton from "./MainButton";

interface ServicePropsTypes {
  serviceTitle: string;
  serviceDescription: string;
  serviceImgSrc: string;
  serviceImgAlt?: string;
  serviceImgTitle?: string;
  serviceLink: string;
}

export default function ServiceCard({
  serviceTitle,
  serviceDescription,
  serviceImgSrc,
  serviceImgAlt,
  serviceImgTitle,
  serviceLink,
}: ServicePropsTypes) {
  return (
    <div className="group rounded-md overflow-hidden shadow-light_shadow">
      <div className="relative ">
        <img src={serviceImgSrc} alt={serviceImgAlt} title={serviceImgTitle} />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.9)] flex items-center justify-center flex-col gap-3 translate-y-full duration-300 group-hover:translate-y-0">
          <h3 className="text-black text-[1rem] font-bold w-fit mx-auto  ">
            {" "}
            {serviceTitle}{" "}
          </h3>
          <p className="text-[0.9rem] leading-7 w-4/5 mx-auto text-justify">
            {" "}
            {serviceDescription}{" "}
          </p>
          <div className="w-fit mx-auto ">
            <MainButton hasLink={true} title="تفاصيل الخدمة" href="##" />
          </div>
        </div>
      </div>
    </div>
  );
}
