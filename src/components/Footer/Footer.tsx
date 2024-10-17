import React from "react";

export default function Footer() {
  return (
    <footer className="p-5 mt-10 text-white bg-blue-950 md:px-20 md:py-10">
      <div className="grid md:grid-cols-[450px_1fr_1fr_1fr] md:gap-10">
        <div>
          <img
            src="/assets/logo.png"
            alt="Logo Website"
            className="w-24 md:w-48"
          />
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="my-3">
          <h4 className="text-xl font-bold text-white">Plataforma</h4>
          <p className="my-4">Home</p>
          <p className="my-4">Feature</p>
          <p className="my-4">About</p>
          <p className="my-4">Pricing</p>
        </div>
      </div>
    </footer>
  );
}
