import React from "react";

function Hero({ greetings, slogan }) {
  return (
    <div className="hero mt-32">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="./game.gif"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="imagen de presentacion"
        />
        <div>
          <h1 className="text-5xl text-center text-red-500 font-bold">
            {greetings}
          </h1>
          <p className="py-6 text-3xl text-center">{slogan}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
