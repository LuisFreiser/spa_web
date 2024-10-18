import Image from "next/image";
import { MotionTransitions_A } from "../MotionTransitions/MotionTransitions";

export default function About() {
  return (
    <div
      id="about"
      className="grid items-center py-20 md:grid-cols-2 lg:pb-36 pt-36"
    >
      <MotionTransitions_A>
        <Image src="/assets/about.png" alt="About" width="600" height="400" />
      </MotionTransitions_A>
      <div className="md:pr-20">
        <h2 className="mb-10 text-4xl font-extrabold">
          Hemos estado
          <br />
          <span className="text-pink-400">trabajando</span>
          <br />
          durante 20 años
        </h2>
        <p className="mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nulla
          ratione ad corporis temporibus dolorem consequatur tempore. Voluptatem
          ipsa eum exercitationem quo illum tempora nisi eaque, in temporibus
          veritatis dignissimos!
        </p>
        <button className="px-8 py-3 bg-pink-400 rounded-xl text-white">
          Empieza ya
        </button>
      </div>
    </div>
  );
}
