import Image from "next/image";
import Link from "next/link";
import NavBurger from "../NavBurger/NavBurger";

export default function Navbar() {
  return (
    <div className="grid items-center px-10 gap-4 justify-between pt-3 grid-cols-3 md:px-20 dark:text-white">
      <div className="flex justify-start">
        <Image
          src="/assets/logo.png"
          alt="Logo S&V"
          width="200"
          height="25"
          className="cursor-pointer lg:mx-0"
        />
      </div>
      <div className="flex justify-between font-bold">
        <Link href="#home" className="hidden lg:block">
          Home
        </Link>
        <Link href="#features" className="hidden lg:block">
          Features
        </Link>
        <Link href="#about" className="hidden lg:block">
          About
        </Link>
        <Link href="#practice" className="hidden lg:block">
          Practice
        </Link>
        <Link href="#pricing" className="hidden lg:block">
          Pricing
        </Link>
      </div>
      <div className="flex justify-end">
        <button className="bg-pink-400 p-2 rounded-full hidden lg:block dark:text-white">
          <Image src="/svg/sol.svg" alt="Menu" width="25" height="25" />
        </button>
        <NavBurger />
      </div>
    </div>
  );
}
