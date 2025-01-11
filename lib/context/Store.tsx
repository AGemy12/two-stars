"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

interface ContextProps {
  isSticky: boolean;
  isClosed: boolean;
  toggleClosed: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const ContextStates = createContext<ContextProps>({
  isSticky: false,
  isClosed: false,
  toggleClosed: () => {},
});

export const StickyProvider = ({ children }: ProviderProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
      // console.log("Good");
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleClosed = () => {
    setIsClosed((prev) => !prev);
  };

  return (
    <ContextStates.Provider value={{ isSticky, isClosed, toggleClosed }}>
      {children}
    </ContextStates.Provider>
  );
};
