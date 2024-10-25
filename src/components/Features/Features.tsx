import Image from "next/image";
import { dataFeatures } from "@/data/dataFeatures";
import { MotionTransitions_A } from "../MotionTransitions/MotionTransitions";

export function Features() {
  return (
    <div
      id="features"
      className="grid items-center gap-8 pt-24 pb-36 md:py-36 px-10 lg:grid-cols-4 dark:text-white"
    >
      <div className="flex items-center justify-center">
        <h2 className="mb-4 text-4xl font-bold text-center">
          Porque Somos <br />
          <span className="text-pink-400">tu mejor opción</span>
        </h2>
      </div>

      {dataFeatures.map((feature) => (
        <MotionTransitions_A key={feature.id}>
          <div key={feature.id}>
            <div
              className={`flex flex-col items-center justify-center my-auto p-1 rounded-3xl shadow-lg shadow-pink-100 lg:${feature.additionalClass}`}
            >
              <Image
                src={`/assets/${feature.image}.png`}
                alt={feature.image}
                width="100"
                height="100"
              />
              <h3 className="mt-3 text-2xl text-center font-bold">
                {feature.text}
              </h3>
            </div>
          </div>
        </MotionTransitions_A>
      ))}
    </div>
  );
}
