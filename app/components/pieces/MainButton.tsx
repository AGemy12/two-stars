import Link from "next/link";
import React from "react";

interface MainButtonPropsType {
  title: string;
  href: string;
  hasLink: boolean;
  onClick?: () => void;
}

export default function MainButton({
  title,
  href,
  hasLink,
  onClick,
}: MainButtonPropsType) {
  return (
    <div className="w-fit mx-auto ">
      <button
        className="min-w-[100px] border-[2px] border-gold rounded-md duration-300 px-2 py-1 relative before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gold before:duration-300 hover:before:w-0"
        onClick={onClick}
      >
        {hasLink ? (
          <Link href={href} className="block text-[0.9rem] font-bold ">
            {" "}
            <span className="relative">{title}</span>
          </Link>
        ) : (
          <span className="relative">{title}</span>
        )}
      </button>
    </div>
  );
}
