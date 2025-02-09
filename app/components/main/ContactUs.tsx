import React from "react";
import OpenStreetMap from "../pieces/OpenStreetMap";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-[32px] md:mx-[100px] mb-[75px] md:mb-[100px] ">
      <div className="bg-section_bg bg-contain bg-center p-2 rounded-md overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.95)] flex flex-col justify-center gap-4">
          <h6 className="w-fit mx-auto text-off_wihte text-[1.5rem] flex items-center justify-center gap-1">
            <img
              src="/assets/media/logo/logo_svg.svg"
              alt="two stars"
              className="w-[30px]"
            />
            <span>مجموعة تو ستارز للأعمال</span>
            <img
              src="/assets/media/logo/logo_svg.svg"
              alt="two stars"
              className="w-[30px]"
            />
          </h6>
          <div>
            <h6 className="w-fit mx-auto text-gold text-[1.3rem]">
              تـواصـل مـعـنـا :
            </h6>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="">
                <Link
                  href="https://wa.me/+966557243381"
                  target="_blank"
                  className="group flex justify-center items-center gap-4  w-fit mx-auto"
                >
                  <span className="text-[1.2rem] text-off_wihte duration-300 group-hover:text-gold">
                    واتـسـاب
                  </span>
                  <FaWhatsapp className="text-off_wihte text-[1.5rem] duration-300 group-hover:text-gold" />
                  <span className="text-[1.5rem] text-off_wihte duration-300 group-hover:text-gold">
                    966557243381+{" "}
                  </span>
                </Link>
              </li>
              <li className="">
                <Link
                  href="https://www.instagram.com/p/DEvV95OROwA/?utm_source=ig_web_copy_link"
                  target="_blank"
                  className="group flex justify-center items-center gap-4 w-fit mx-auto "
                >
                  <span className="text-[1.2rem] text-off_wihte duration-300 group-hover:text-gold">
                    إنـسـتـجـرام
                  </span>
                  <FaInstagram className="text-off_wihte text-[1.5rem] duration-300 group-hover:text-gold" />
                  <span className="text-[1.5rem] text-off_wihte duration-300 group-hover:text-gold">
                    twostarsbusiness{" "}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <OpenStreetMap />
    </section>
  );
}
