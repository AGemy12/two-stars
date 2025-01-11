import React from "react";

export default function FooterSectionsTitle({ title }: { title: string }) {
  return (
    <h5 className="w-fit mx-auto mb-2 text-off_wihte text-2xl cursor-default first-letter:text-gold relative before:absolute before:-bottom-1  before:-translate-y-1/2 before:left-1/2 before:w-[50%] before:h-[2px] before:bg-gold after:absolute after:-bottom-1 after:-translate-y-1/2 after:right-1/2  after:w-[50%] after:h-[2px] after:bg-off_wihte">
      {" "}
      {title}{" "}
    </h5>
  );
}
