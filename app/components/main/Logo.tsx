import Link from "next/link";
import React from "react";

export default function Logo({ logoStyle }: { logoStyle?: string }) {
  return (
    <div className="w-[100px]">
      <Link href="/">
        <img
          src="/assets/media/logo/logo_svg.svg"
          alt="Two Stars Logo"
          title="Two Stars Logo"
          className={`w-full ${logoStyle} `}
        />
      </Link>
    </div>
  );
}
