"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactElement } from "react";

interface NavbarPropsTypes {
  title: string;
  customStyle?: string;
  customLinkStyle?: string;
  path: string;
}

export default function LinkItem({
  title,
  path,
  customStyle,
  customLinkStyle,
}: NavbarPropsTypes) {
  const pathName = usePathname();
  return (
    <>
      <li className="relative">
        <Link
          href={path}
          className={`group block text-off_wihte font-bold duration-300 px-4 py-3 ${
            pathName === path ? "after:shadow-text_spread" : ""
          } ${customLinkStyle}`}
        >
          <span
            className={`relative duration-300 group-hover:[text-shadow:1px_1px_6px_#b58e51,1px_1px_6px_#b58e51,1px_1px_6px_#b58e51] ${
              pathName === path
                ? "[text-shadow:1px_1px_6px_#b58e51,1px_1px_6px_#b58e51,1px_1px_6px_#b58e51] after:shadow-text_spread"
                : ""
            }  ${customStyle}`}
          >
            {title}
          </span>
        </Link>
      </li>
    </>
  );
}
