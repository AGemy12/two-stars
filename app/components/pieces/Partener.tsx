import React from "react";

export default function Partener({ srcImg }: { srcImg: string }) {
  return (
    <div className="">
      <img src={srcImg} alt="partener" className="w-full" />
    </div>
  );
}
