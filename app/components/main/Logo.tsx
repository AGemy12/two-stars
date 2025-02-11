import Link from "next/link";
import React from "react";

export default function Logo({ logoStyle }: { logoStyle?: string }) {
  return (
    <div className={`w-[100px] ${logoStyle}`}>
      <Link href="/">
        <img
          src="/assets/media/logo/logo_svg.svg"
          alt="Two Stars"
          title="Two Stars"
          className="w-full"
        />
      </Link>
    </div>
  );
}
