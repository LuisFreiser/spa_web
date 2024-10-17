import Image from "next/image";
import { dataFeatures } from "@/data/dataFeatures";
import MotionTransitions from "../MotionTransitions/MotionTransitions";

export function Features() {
  return (
    <div
      id="features"
      className="grid grid-cols-2 gap-16 my-10 md:grid-cols-4 md:py-40"
    >
      <div className="flex items-center">
        <h2 className="mb-4 text-4xl font-bold">
          Porque Somos <br />
          <span className="text-pink-400">tu mejor opción</span>
        </h2>
      </div>

      {dataFeatures.map((feature) => (
        <MotionTransitions key={feature.id}>
          <div key={feature.id}>
            <div
              className={`rounded-3xl shadow-lg p-6 shadow-pink-100 ${feature.additionalClass}`}
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
        </MotionTransitions>
      ))}
    </div>
  );
}
