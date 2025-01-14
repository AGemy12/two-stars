"use client";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MainButton from "./MainButton";

interface ServiceDetailsProps {
  serviceTitle: string;
  firstStep: string | null;
  secondStep: string | null;
  thirdStep: string | null;
  firstAdvantage: string | null;
  secondAdvantage: string | null;
  thirdAdvantage: string | null;
  serviceImgInModel?: string;
  containerIsOpen: boolean;
  handleCloseModelBtn: () => void;
}

export default function ServiceDetails({
  serviceTitle,
  firstStep,
  secondStep,
  thirdStep,
  firstAdvantage,
  secondAdvantage,
  thirdAdvantage,
  containerIsOpen,
  serviceImgInModel,
  handleCloseModelBtn,
}: ServiceDetailsProps) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      {containerIsOpen && (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-light_black w-screen h-screen z-50 flex justify-center items-center duration-500 ">
          <div className=" relative w-[90vw] md:w-[80vw] min-h-[80vh] bg-black shadow-md border-[rgba(181,142,81,0.4)] border-[2px] flex flex-col gap-4 overflowY-auto pb-4 rounded-md">
            <button
              className="w-fit m-4 flex items-center justify-center"
              onClick={handleCloseModelBtn}
            >
              <CloseIcon className="!text-red-500" />
            </button>
            <div className="flex flex-col gap-4 w-[90%] mx-auto">
              <h3
                className="text-off_wihte text-[1rem] md:text-2xl w-fit mr-0 md:mx-auto relative before:absolute before:-bottom-2 before:left-0 before:w-1/2 before:h-[2px] before:bg-gold after:absolute after:-bottom-2 after:right-0 after:w-1/2 after:h-[2px] after:bg-off_wihte"
                data-aos="fade-down"
              >
                {serviceTitle}
              </h3>
              <div className="flex items-start justify-between flex-wrap md:flex-nowrap my-4">
                <div
                  className="flex flex-col items-start gap-4 mb-4 md:mb-0 p-0 md:p-4 min-w-[350px]"
                  data-aos="zoom-in"
                >
                  <div className="flex flex-col gap-4 w-full">
                    <h6 className="w-fit mr-0 ml-auto py-1 px-2 border-[2px] border-gold bg-gold rounded-sm text-black font-bold text-[0.9rem] md:text-[1.1rem]">
                      الخطوات
                    </h6>
                    <ul className="w-[90%] mx-auto flex flex-col gap-4 ">
                      <li className="text-[0.8rem] md:text-[0.9rem] text-off_wihte relative before:absolute before:-right-[0.7rem] before:top-[10px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-gold">
                        {firstStep}
                      </li>
                      <li className="  text-[0.8rem] md:text-[0.9rem] text-off_wihte relative before:absolute before:-right-[0.7rem] before:top-[10px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-gold">
                        {secondStep}
                      </li>
                      <li className="  text-[0.8rem] md:text-[0.9rem] text-off_wihte relative before:absolute before:-right-[0.7rem] before:top-[10px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-gold">
                        {thirdStep}
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <h6 className="w-fit mr-0 ml-auto py-1 px-2 border-[2px] border-gold bg-gold rounded-sm text-black font-bold text-[0.9rem] md:text-[1.1rem]">
                      الفوائد
                    </h6>
                    <ul className="w-[90%] mx-auto flex flex-col gap-4 ">
                      <li className="  text-[0.8rem] md:text-[0.9rem] text-off_wihte relative before:absolute before:-right-[0.7rem] before:top-[10px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-gold">
                        {firstAdvantage}
                      </li>
                      <li className="  text-[0.8rem] md:text-[0.9rem] text-off_wihte relative before:absolute before:-right-[0.7rem] before:top-[10px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-gold">
                        {secondAdvantage}
                      </li>
                      <li className="  text-[0.8rem] md:text-[0.9rem] text-off_wihte relative before:absolute before:-right-[0.7rem] before:top-[10px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-gold">
                        {thirdAdvantage}
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="rounded-md overflow-hidden max-w-[600px]"
                  data-aos="zoom-in"
                >
                  <img
                    src={serviceImgInModel}
                    alt={serviceTitle}
                    title={serviceTitle}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div data-aos="zoom-in">
              <MainButton
                hasLink={true}
                path="https://wa.me/+966557243381"
                title="اطلب الخدمة"
                customStyle="hover:!text-off_wihte min-w-[200px]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
