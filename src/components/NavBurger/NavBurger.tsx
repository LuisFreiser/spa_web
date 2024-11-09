"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import DarkMode from "../DarkMode/DarkMode";

export default function NavBurger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <Menu onClick={toggleMenu} className="cursor-pointer lg:hidden size-7" />
      <div
        className={`fixed top-0 right-0 h-full w-48 bg-gradient-to-r from-purple-500 to-pink-400 shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <Image
            src="/svg/closeLight.svg"
            alt="Close"
            width="32"
            height="32"
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col items-center justify-center space-y-6 mt-10">
          <Link href="#home" className="text-lg hover:text-2xl transition">
            Home
          </Link>
          <Link href="#features" className="text-lg hover:text-2xl transition">
            Features
          </Link>
          <Link href="#about" className="text-lg hover:text-2xl transition">
            About
          </Link>
          <Link href="#practice" className="text-lg hover:text-2xl transition">
            Practice
          </Link>
          <Link href="#pricing" className="text-lg hover:text-2xl transition">
            Pricing
          </Link>
          <DarkMode />
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}
