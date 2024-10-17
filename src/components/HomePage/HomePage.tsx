import Image from "next/image";
import Link from "next/link";
import { dataSocialNetworks } from "@/data/dataSocialNetworks";

export function HomePage() {
  return (
    <div
      id="home"
      className="p-5 mt-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 md:px-24 md:py-52"
    >
      <div className="items-center md:grid md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-white md:leading-snug md:text-6xl">
            Desarrolla tus Skills <br /> para el Futuro
          </h1>
          <p className="mt-5 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            libero. Molestias saepe quibusdam eos harum, autem voluptate
            temporibus sequi, illo iusto dolore, perferendis maiores. Alias
            laboriosam magni impedit commodi officiis?
          </p>
          <div className="flex justify-start gap-4 my-10">
            {dataSocialNetworks.map((socialNetwork) => (
              <Link
                href={socialNetwork.url}
                key={socialNetwork.id}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={`/svg/${socialNetwork.icon}.svg`}
                  alt={socialNetwork.name}
                  width="40"
                  height="40"
                  className="cursor-pointer"
                />
              </Link>
            ))}
          </div>
          <div>
            <button className="px-8 py-3 mr-10 mb-5 text-white bg-pink-400 rounded-xl">
              Get Started
            </button>
            <button className="px-8 py-3 mr-10 text-white border-2 rounded-xl">
              Try It Now
            </button>
          </div>
        </div>
        <div className="mx-auto">
          <Image
            src="/assets/overview.png"
            alt="Overview"
            width="350"
            height="500"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
