import Image from "next/image";
import { dataFeatures } from "@/data/dataFeatures";
import { MotionTransitions_A } from "../MotionTransitions/MotionTransitions";

export function Features() {
  return (
    <div id="features" className="grid gap-8 md:grid-cols-4 md:pb-36 pt-40">
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
              className={`rounded-3xl shadow-lg text-center px-auto shadow-pink-100 md:${feature.additionalClass}`}
            >
              <Image
                src={`/assets/${feature.image}.png`}
                alt={feature.image}
                width="100"
                height="100"
              />
              <h3 className="mt-3 mr-20 text-2xl font-bold">{feature.text}</h3>
            </div>
          </div>
        </MotionTransitions_A>
      ))}
    </div>
  );
}
