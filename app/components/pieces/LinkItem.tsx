"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactElement } from "react";

interface NavbarPropsTypes {
  title: string;
  customStyle?: string;
  customLinkStyle?: string;
  LinkIsServices?: boolean;
  nestedListContent?: ReactElement;
  path: string;
}

export default function LinkItem({
  title,
  path,
  customStyle,
  customLinkStyle,
  LinkIsServices,
  nestedListContent,
}: NavbarPropsTypes) {
  const pathName = usePathname();
  return (
    // <li className="relative">
    //   <Link
    //     href={path}
    //     className={`group block text-off_wihte font-bold duration-300 px-4 py-3 ${
    //       pathName === path ? "after:shadow-text_spread" : ""
    //     } ${customLinkStyle}`}
    //   >
    //     <span
    //       className={`relative after:absolute after:top-1/2 after:-translate-y-1/2 rtl:after:-left-4 after:w-2 after:h-2 after:rotate-45 after:border-[1px] after:border-off_wihte after:duration-300 hover:after:shadow-text_spread duration-300 group-hover:[text-shadow:1px_1px_6px_#b58e51,1px_1px_6px_#b58e51,1px_1px_6px_#b58e51] ${
    //         pathName === path
    //           ? "[text-shadow:1px_1px_6px_#b58e51,1px_1px_6px_#b58e51,1px_1px_6px_#b58e51] after:shadow-text_spread"
    //           : ""
    //       }  ${customStyle}`}
    //     >
    //       {title}
    //     </span>
    //   </Link>
    //   {LinkIsServices && (
    //     <div className="fixed left-0 top-[60px] block  w-[100vw] max-h-0 !overflow-hidden transition-all duration-300 group-hover:max-h-[400px] group-hover:overflow-visible pt-8">
    //       {nestedListContent}
    //     </div>
    //   )}
    // </li>
    <>
      {LinkIsServices ? (
        <li className="relative group">
          <div
            className={` block text-off_wihte font-bold duration-300 px-4 py-3 cursor-pointer ${
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
          </div>
          {LinkIsServices && (
            <div className=" fixed left-1/2 -translate-x-1/2 top-[60px] block md:w-[100vw] lg:w-[60vw] max-h-0 !overflow-hidden transition-all duration-300 group-hover:max-h-[400px] group-hover:overflow-visible mt-8">
              {nestedListContent}
            </div>
          )}
        </li>
      ) : (
        <li className="relative">
          <Link
            href={path}
            className={`group block text-off_wihte font-bold duration-300 px-4 py-3 ${
              pathName === path ? "after:shadow-text_spread" : ""
            } ${customLinkStyle}`}
          >
            <span
              className={`relative after:absolute after:top-1/2 after:-translate-y-1/2 rtl:after:-left-4 after:w-2 after:h-2 after:rotate-45 after:border-[1px] after:border-off_wihte after:duration-300 hover:after:shadow-text_spread duration-300 group-hover:[text-shadow:1px_1px_6px_#b58e51,1px_1px_6px_#b58e51,1px_1px_6px_#b58e51] ${
                pathName === path
                  ? "[text-shadow:1px_1px_6px_#b58e51,1px_1px_6px_#b58e51,1px_1px_6px_#b58e51] after:shadow-text_spread"
                  : ""
              }  ${customStyle}`}
            >
              {title}
            </span>
          </Link>
        </li>
      )}
    </>
  );
}
