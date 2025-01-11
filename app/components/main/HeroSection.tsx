"use client";
import { SetStateAction, useEffect, useState } from "react";

export default function HeroSection() {
  const HeroData = [
    {
      id: 1,
      title: "بناء مشاريع من البداية (معامل – مصانع)",
      img: "/assets/media/hero-carousel/building-projects.jpg",
      alt: "بناء مشاريع من البداية (معامل – مصانع)",
    },
    {
      id: 2,
      title: "تحسين بيئة وجودة العمل",
      img: "/assets/media/hero-carousel/business-development.jpg",
      alt: "تحسين بيئة وجودة العمل",
    },
    {
      id: 3,
      title: "تطوير معامل ومصانع الشوكولاته",
      img: "/assets/media/hero-carousel/chocolate-factories.jpg",
      alt: "تطوير معامل ومصانع الشوكولاته",
    },
    {
      id: 4,
      title: "تطوير خطوط إنتاج المصانع",
      img: "/assets/media/hero-carousel/factory-production.jpg",
      alt: "تطوير خطوط إنتاج المصانع",
    },
    {
      id: 5,
      title: "عقود استشارية لتطوير الأعمال",
      img: "/assets/media/hero-carousel/quality-of-work.jpg",
      alt: "عقود استشارية لتطوير الأعمال",
    },
    {
      id: 6,
      title: "تطوير معامل ومصانع الأغذية",
      img: "/assets/media/hero-carousel/food-factories.jpg",
      alt: "تطوير معامل ومصانع الأغذية",
    },
    {
      id: 7,
      title: "تنظيم إدارة الموارد البشرية (HR)",
      img: "/assets/media/hero-carousel/hr-regulation.jpg",
      alt: "تنظيم إدارة الموارد البشرية (HR)",
    },
    {
      id: 8,
      title: "تصميم وتصنيع آلات حسب الطلب",
      img: "/assets/media/hero-carousel/machinery-design.jpg",
      alt: "تصميم وتصنيع آلات حسب الطلب",
    },
    {
      id: 9,
      title: "تطوير خطط مبيعات ومشتريات",
      img: "/assets/media/hero-carousel/sales-and-purchases.jpg",
      alt: "تطوير خطط مبيعات ومشتريات",
    },
    {
      id: 10,
      title: "تطوير خطط استراتيجية",
      img: "/assets/media/hero-carousel/strategic-plans.jpg",
      alt: "تطوير خطط استراتيجية",
    },
    {
      id: 11,
      title: "تطوير معامل ومصانع الحلويات والشوكولاتة",
      img: "/assets/media/hero-carousel/sweets-factories.jpg",
      alt: "تطوير معامل ومصانع الحلويات والشوكولاتة",
    },
  ];

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  // Function to go to the next item
  const goToNextItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex + 1) % HeroData.length);
  };

  // Function to navigate to a specific item
  const goToItem = (index: SetStateAction<number>) => {
    setCurrentItemIndex(index);
  };

  // Function to go to the previous item

  useEffect(() => {
    // Set interval for automatic slide transition
    const interval = setInterval(goToNextItem, 9000); // Change interval duration as needed
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Calculate slider width
  const sliderWidth = HeroData.length * 100 + "vw";

  return (
    <section className=" relative w-screen md:h-screen z-10 overflow-hidden mb-12 ">
      <div
        className="flex relative"
        style={{
          width: sliderWidth,
          transform: `translateX(${currentItemIndex * 100}vw)`,
          transition: "transform 2s",
          animationDelay: "200ms",
        }}
      >
        {HeroData.map((item, index) => {
          const isActive = index === currentItemIndex;
          return (
            <div
              key={item.id}
              className={` slide-item relative flex-shrink-0 md:w-screen `}
            >
              <div className="flex items-center justify-center w-full h-screen relative before:absolute before:w-full before:h-full before:bg-[rgba(0,0,0,0.2)]">
                <img
                  src={item.img}
                  alt={item.alt}
                  className={`bg-center w-full  ${
                    isActive ? "animate-hero_carousel " : " "
                  }`}
                />
              </div>
              <div
                className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  font-bold leading-[50px] sm:leading-[70px] bg-[rgba(0,0,0,0.6)] w-full h-[200px] text-center flex items-center justify-center overflow-hidden ${
                  isActive ? "animate-carousel_text_container" : ""
                }`}
              >
                <span
                  className={`block text-white text-[30px] sm:text-[50px] p-4 ${
                    isActive ? "animate-carousel_text" : ""
                  }`}
                >
                  {" "}
                  {item.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" absolute top-1/2 !translate-y-[-50%] mx-[20px]">
        <ul className="">
          {HeroData.map((item, index) => {
            const formatIndex = (index: number) =>
              index < 9 ? `0${index + 1}` : index + 1;

            return (
              <li
                key={item.id}
                onClick={() => goToItem(index)}
                className={` slide-change-button flex items-center gap-1 md:gap-2 duration-300 font-bold text-[0.9rem] md:text-[1.1rem] ${
                  index === currentItemIndex
                    ? "active text-gold scale-[1.3] "
                    : "text-white scale-[1] "
                }  mb-[10px] cursor-pointer`}
              >
                <span>{formatIndex(index)}</span>
                <span
                  className={`w-[10px] md:w-[20px] h-[2px] md:h-[3px] bg-white ${
                    index === currentItemIndex
                      ? "active !bg-gold"
                      : "text-white"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
