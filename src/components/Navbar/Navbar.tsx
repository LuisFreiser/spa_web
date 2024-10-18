import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="grid items-center justify-between md:grid-cols-2 gap-4 md:gap-50 md:px-20">
      <Image
        src="/assets/logo.png"
        alt="Logo S&V"
        width="200"
        height="25"
        className="cursor-pointer mx-auto lg:mx-0"
      />
      <div className="flex justify-end gap-5 text-center font-bold">
        <Link href="#home">Home</Link>
        <Link href="#features">Features</Link>
        <Link href="#about">About</Link>
        <Link href="#practice">Practice</Link>
        <Link href="#pricing">Pricing</Link>
      </div>
    </div>
  );
}
