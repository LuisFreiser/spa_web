import Image from "next/image";
import { MotionTransitions_A } from "../MotionTransitions/MotionTransitions";

export default function Discount() {
  return (
    <MotionTransitions_A>
      <div className="grid items-center px-5 py-10 md:grid-cols-2 md:p-20 rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div>
          <h2 className="text-3xl font-extrabold text-white md:text-5xl">
            Puedes practicar a cualquier hora que te convenga
          </h2>
          <p className="my-10 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            officia aut repellat saepe ut ratione nostrum quisquam, ullam
            similique tempore pariatur, nam aliquam illum exercitationem nemo
            facere maiores eum? Similique.
          </p>
          <button className="px-8 py-3 bg-pink-400 rounded-xl text-white">
            Obten tu Cupon
          </button>
        </div>
        <Image
          src="/assets/discount.png"
          alt="Discount"
          width="350"
          height="350"
          className="mx-auto"
        />
      </div>
    </MotionTransitions_A>
  );
}
