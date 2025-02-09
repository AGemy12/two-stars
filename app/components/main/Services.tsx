import React, { useState } from "react";
import SectionTitle from "../pieces/SectionTitle";
import ServiceCard from "../pieces/ServiceCard";
import { servicesCardData } from "@/lib/data/servicesCardsData";
import ServiceDetails from "../pieces/ServiceDetails";

interface StepsTypes {
  first: string;
  second: string;
  third: string;
}
interface AdvantagesTypes {
  first: string;
  second: string;
  third: string;
}

interface ServiceDataType {
  id: number;
  serviceTitle: string;
  serviceName?: string;
  serviceDescription: string;
  serviceImgSrc: string;
  serviceImgInModel?: string;
  serviceImgAlt?: string;
  serviceImgTitle?: string;
  steps?: StepsTypes;
  advantages?: AdvantagesTypes;
}

export default function Services() {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [currentService, setCurrentService] = useState<ServiceDataType | null>(
    null
  );

  const handleOpenServiceModel = (service: ServiceDataType) => {
    setCurrentService(service);
    setTimeout(() => {
      setModelIsOpen(true);
    }, 1000);
  };

  return (
    <section className="mb-[75px] md:mb-[100px]">
      <div className="w-full ">
        <SectionTitle title="خــدمــاتــنــا" />
        <div className="relative w-full h-full ">
          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 relative mt-12">
            {servicesCardData.map((item) => (
              <ServiceCard
                key={item.id}
                containerIsOpen={modelIsOpen}
                handleCloseModelBtn={() => setModelIsOpen(false)}
                serviceName={item.serviceTitle}
                serviceTitle={item.serviceTitle}
                serviceDescription={item.serviceDescription}
                serviceImgSrc={item.serviceImgSrc}
                serviceImgAlt={item.serviceImgAlt}
                serviceImgTitle={item.serviceTitle}
                fireOnClickEvent={() => handleOpenServiceModel(item)}
              />
            ))}
          </div>
        </div>
      </div>

      {currentService && (
        <ServiceDetails
          serviceTitle={currentService.serviceTitle}
          firstStep={currentService.steps?.first || null}
          secondStep={currentService.steps?.second || null}
          thirdStep={currentService.steps?.third || null}
          firstAdvantage={currentService.advantages?.first || null}
          secondAdvantage={currentService.advantages?.second || null}
          thirdAdvantage={currentService.advantages?.third || null}
          serviceImgInModel={currentService.serviceImgInModel}
          containerIsOpen={modelIsOpen}
          handleCloseModelBtn={() => setModelIsOpen(false)}
        />
      )}
    </section>
  );
}
