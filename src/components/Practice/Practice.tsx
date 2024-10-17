import React from "react";
import MotionTransitions from "../MotionTransitions/MotionTransitions";

export default function Practice() {
  return (
    <MotionTransitions>
      <div
        id="practice"
        className="grid items-center py-20 md:grid-cols-2 md:py-36"
      >
        <div className="md:pr-20">
          <h2 className="mb-10 text-4xl font-extrabold">
            Puedes practicar a <br /> cualquier hora <br />
            <span className="text-pink-400">que se adapte a ti</span>
          </h2>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sit
            repellat ut doloremque laudantium nostrum labore eligendi laboriosam
            eos quia cupiditate odio architecto, officiis rerum a, tenetur qui.
            Ea, perferendis.
          </p>
          <button className="px-8 py-3 bg-pink-400 rounded-xl text-white">
            Empieza ya
          </button>
        </div>
        <div>
          <video width="750" height="500" controls autoPlay muted loop>
            <source src="/assets/business.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </MotionTransitions>
  );
}
