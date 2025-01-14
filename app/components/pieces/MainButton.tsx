import Link from "next/link";
import React, { LinkHTMLAttributes } from "react";

interface MainButtonPropsType {
  title: string;
  path?: string;
  customStyle?: string;
  hasLink?: boolean;
  onClick?: () => void;
}

export default function MainButton({
  title,
  path,
  customStyle,
  hasLink,
  onClick,
}: MainButtonPropsType) {
  return (
    <div className="w-fit mx-auto ">
      <button
        className={`min-w-[100px] border-[2px] border-gold rounded-md duration-300 relative before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gold before:duration-300 hover:before:w-full md:hover:before:w-0 ${customStyle} `}
        onClick={onClick}
      >
        {hasLink && path ? (
          <Link href={path} className="block p-2 " target="__blank">
            <span className="relative">{title}</span>
          </Link>
        ) : (
          <span className="relative block p-2">{title}</span>
        )}
      </button>
    </div>
  );
}
