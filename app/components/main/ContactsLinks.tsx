"use client";
import ContactItem from "../pieces/ContactItem";
import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const actions = [
  {
    icon: (
      <Link href="" target="_blank">
        <FaTiktok />
      </Link>
    ),
    name: "Tiktok",
  },
  {
    icon: (
      <Link href="https://wa.me/+966557243381" target="_blank">
        <FaWhatsapp />{" "}
      </Link>
    ),
    name: "WhatsApp",
  },
  {
    icon: (
      <Link href="" target="_blank">
        <FaInstagram />{" "}
      </Link>
    ),
    name: "Instagram",
  },
  {
    icon: (
      <Link href="" target="_blank">
        <FaFacebookF />{" "}
      </Link>
    ),
    name: "Facebook",
  },
];

export default function ContactsLinks() {
  return (
    <>
      <div className="fixed bottom-0 md:top-1/2 translate-y-0  md:-translate-y-1/2 left-4 z-50 ">
        <div className="relative md:block hidden">
          <div className="">
            <div className="transition-all duration-500 flex flex-col justify-center items-center gap-3 p-3 bg-light_black rounded-md shadow-sm">
              <ContactItem
                title="WhatsApp"
                icon={
                  <FaWhatsapp className="text-off_wihte text-[1rem] md:text-[1.5rem] duration-300 group-hover:text-white " />
                }
                path="https://wa.me/+966557243381"
              />
              <ContactItem
                title="Facebook"
                icon={
                  <FaFacebookF className="text-off_wihte text-[1rem] md:text-[1.5rem] duration-300 group-hover:text-white " />
                }
                path="##"
              />
              <ContactItem
                title="Instagram"
                icon={
                  <FaInstagram className="text-off_wihte text-[1rem] md:text-[1.5rem] duration-300 group-hover:text-white " />
                }
                path="##"
              />
              <ContactItem
                title="TikTok"
                icon={
                  <FaTiktok className="text-off_wihte text-[1rem] md:text-[1.5rem] duration-300 group-hover:text-white " />
                }
                path="##"
              />
              <ContactItem
                title="Twitter"
                icon={
                  <FaXTwitter className="text-off_wihte text-[1rem] md:text-[1.5rem] duration-300 group-hover:text-white " />
                }
                path="##"
              />
            </div>
          </div>
        </div>
        <Box
          sx={{
            height: 320,
            transform: "translateZ(0px)",
            flexGrow: 1,
            "& .MuiButtonBase-root": { backgroundColor: "var(--gold)" },
            "& .MuiButtonBase-root:hover": { backgroundColor: "var(--gold)" },
          }}
          className="block md:hidden w-16 "
        >
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Box>
      </div>
    </>
  );
}
