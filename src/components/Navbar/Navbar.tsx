import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="grid items-center px-10 gap-4 md:grid-cols-2 lg:px-20 dark:text-white">
      <Image
        src="/assets/logo.png"
        alt="Logo S&V"
        width="200"
        height="25"
        className="cursor-pointer mx-auto lg:mx-0"
      />
      <div className="flex gap-5 font-bold lg:items-center justify-end">
        <Link href="#home">Home</Link>
        <Link href="#features">Features</Link>
        <Link href="#about">About</Link>
        <Link href="#practice">Practice</Link>
        <Link href="#pricing">Pricing</Link>
        <button className="bg-pink-400 p-2 rounded-full dark:text-white">
          Dark
        </button>
      </div>
    </div>
  );
}
