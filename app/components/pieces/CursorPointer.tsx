"use client";
import React, { useEffect, useRef } from "react";

const CustomPointer: React.FC = () => {
  const pointerInnerRef = useRef<HTMLDivElement>(null);
  const pointerOuterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointerInner = pointerInnerRef.current;
    const pointerOuter = pointerOuterRef.current;

    if (!pointerInner || !pointerOuter) return;

    const movePointer = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      pointerInner.style.transform = `translate(${clientX}px, ${clientY}px)`;

      pointerOuter.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    const handleMouseDown = () => {
      pointerInner.style.transform += " scale(1.5)";
      pointerOuter.style.transform += " scale(1.2)";
    };

    const handleMouseUp = () => {
      // إعادة الدوائر لحجمها الأصلي عند رفع النقر
      pointerInner.style.transform = pointerInner.style.transform.replace(
        " scale(1.5)",
        ""
      );
      pointerOuter.style.transform = pointerOuter.style.transform.replace(
        " scale(1.2)",
        ""
      );
    };

    document.addEventListener("mousemove", movePointer);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", movePointer);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={pointerInnerRef}
        className="pointer-inner md:block hidden"
      ></div>
      <div
        ref={pointerOuterRef}
        className="pointer-outer md:block hidden"
      ></div>
    </>
  );
};

export default CustomPointer;
