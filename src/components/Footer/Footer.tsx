import Image from "next/image";
import { dataFooters } from "@/data/dataFooters";

export default function Footer() {
  return (
    <footer className="p-5 px-10 text-white bg-blue-950 md:py-10 lg:py-20">
      <div className="grid grid-cols-2 gap-x-16 md:grid-cols-[300px_1fr_1fr_1fr] md:gap-10 lg:grid-cols-[550px_1fr_1fr_1fr]">
        <div>
          <Image
            src="/assets/logo.png"
            alt="Logo Website"
            width="200"
            height="25"
            className="w-24 md:w-48"
          />
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {dataFooters.map(({ id, title, subtitle }) => (
          <div className="my-3" key={id}>
            <h4 className="text-xl font-bold text-white">{title}</h4>
            {subtitle.map(({ id, name }) => (
              <p key={id} className="my-4">
                {name}
              </p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
