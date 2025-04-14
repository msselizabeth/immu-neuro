"use client";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="absolute top-6 right-3 z-102">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={30}
          direction="right"
          duration={0.5}
          color="#458FF6"
        />
      </div>

      <div
        className={`absolute top-0 right-0 h-dvh w-full bg-slate-50 z-101 flex items-center p-5 transition-all duration-500 ${
          isOpen ? "opacity-100 right-0" : "opacity-0 right-[-100%]"
        } `}>
        <nav className="w-full flex justify-center">
          <ul className="flex flex-col gap-12 justify-center items-center">
            <li>
              <Link
                href="/"
                className="font-bold"
                onClick={() => setIsOpen(false)}>
                Головна
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="text-slate-400"
                onClick={() => setIsOpen(false)}>
                Послуги
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="text-slate-400"
                onClick={() => setIsOpen(false)}>
                Про лікаря
              </Link>
            </li>
            <li>
              <Link
                href="/#contacts"
                className="text-slate-400"
                onClick={() => setIsOpen(false)}>
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
