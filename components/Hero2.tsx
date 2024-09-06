import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero2 = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative">
      <div className="size-[750px] hero-ring"></div>
      <div className="size-[790px] hero-ring"></div>
      <div className="size-[980px] hero-ring"></div>
      <div className="size-[1180px] hero-ring"></div>
      <div className="size-[1420px] hero-ring"></div>

      <div className="container">
        <div className="flex flex-col items-center">
          <img
            src={"/personalemoji.png"}
            className="size-[8rem]"
            alt="personal image"
          />

          <div className="bg-slate-800 border border-slate-300 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new projects!
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto md:mt-14">
          <h1 className="font-serif font-medium text-4xl md:text-6xl text-center mt-8 tracking-wide">
            Hi, I'm <span className="text-lime-400">Beau.</span>
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            A Full-Stack software engineer, specializing in creating things for
            the web.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-6 h-12 rounded-xl z-50">
          <a href="/about">
            <MagicButton
              title="See Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
