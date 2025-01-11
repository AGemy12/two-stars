"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavbarPropsTypes {
  title: string;
  customStyle?: string;
  customLinkStyle?: string;
  path: string;
}

export default function NestedListLink({
  title,
  path,
  customStyle,
  customLinkStyle,
}: NavbarPropsTypes) {
  const pathName = usePathname();
  return (
    <li className="relative">
      <Link
        href={path}
        className={` block text-off_wihte font-bold duration-300 px-4 py-3 ${
          pathName === path ? "after:shadow-text_spread" : ""
        } ${customLinkStyle}`}
      >
        <span
          className={`relative after:absolute after:top-1/2 after:-translate-y-1/2 rtl:after:-left-4 after:w-2 after:h-2 after:rotate-45 after:border-[1px] after:border-off_wihte after:duration-300 hover:after:shadow-text_spread duration-300 hover:[text-shadow:1px_1px_6px_#b58e51,1px_1px_6px_#b58e51,1px_1px_6px_#b58e51] ${
            pathName === path
              ? "[text-shadow:1px_1px_6px_#b58e51,1px_1px_6px_#b58e51,1px_1px_6px_#b58e51] after:shadow-text_spread"
              : ""
          }  ${customStyle}`}
        >
          {title}
        </span>
      </Link>
    </li>
  );
}
