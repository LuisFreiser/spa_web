import Image from "next/image";
import { dataFooters } from "@/data/dataFooters";

export default function Footer() {
  return (
    <footer className="p-5 mt-10 text-white bg-blue-950 md:px-20 md:py-10">
      <div className="grid md:grid-cols-[450px_1fr_1fr_1fr] md:gap-10">
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
