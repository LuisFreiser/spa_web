import { Features } from "@/components/Features";
import { HomePage } from "../components/HomePage/HomePage";
import Navbar from "../components/Navbar/Navbar";
import About from "@/components/About/About";
import Practice from "@/components/Practice/Practice";
import Pricing from "@/components/Pricing/Pricing";
import Discount from "@/components/Discount/Discount";

export default function Home() {
  return (
    <main className="px-3 lg:px-10">
      <Navbar />
      <HomePage />
      <Features />
      <div className="max-w-6xl mx-auto">
        <About />
        <Practice />
        <Pricing />
        <Discount />
      </div>
    </main>
  );
}
