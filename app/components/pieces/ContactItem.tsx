import Link from "next/link";
import { ReactElement } from "react";

interface ContactItemPropsTypes {
  title: string;
  icon: ReactElement;
  path: string;
}

export default function ContactItem({
  title,
  icon,
  path,
}: ContactItemPropsTypes) {
  return (
    <div>
      <Link
        href={path}
        target="_blank"
        className="group relative p-2 flex items-center justify-center rounded-full !duration-300  hover:shadow-spread overflow-hidden hover:overflow-visible"
      >
        {icon}
        <span className="absolute left-[calc(100%+15px)] top-1/2 -translate-y-1/2 duration-300 translate-x-1/4 group-hover:translate-x-0 text-gold text-[0.9rem]">
          {title}
        </span>
      </Link>
    </div>
  );
}
