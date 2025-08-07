import { CTAButton } from "../cta-button";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { servicesData } from "@/constant";
import HeroVideosLine from "./hero-videos-line";
import { useState } from "react";

export const Hero = () => {
  const [videoSrc, setVideoSrc] = useState("");
  return (
    <section className="relative min-h-screen w-full flex bg-[url(/new/background.png)] bg-cover items-center justify-center pt-20 lg:pt-10">
      {videoSrc && (
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          className="w-[70%] mask-gradient-right h-[85%] opacity-60 object-cover bg-left absolute left-0 bottom-0  rounded-r-3xl"
        >
          <source src={videoSrc} />
        </video>
      )}
      <img
        src="/new/noise.png"
        alt="Noise Image"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
      />
      <MaxWidthWrapper classNames="relative z-10 grid grid-cols-1 lg:grid-cols-2 w-full gap-10 pt-10">
        <div className="flex flex-col gap-4 max-lg:max-w-3xl max-md:max-w-xl max-lg:mx-auto">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl max-lg:text-center">
            Build a Business That Works While You Sleep
          </h1>
          <p className="bebas font-light text-gray-400 text-lg sm:text-xl xl:text-2xl max-lg:text-center tracking-wider mb-5">
            Break free from the paycheck-to-paycheck cycle. With Ecom
            Automations Hub as your trusted business partner, building passive
            income is easier, faster, and smarter than ever.
          </p>
          <div className="max-lg:mx-auto">
            <CTAButton title="Get Started" />
          </div>
        </div>
        <div className="relative flex flex-col max-lg:max-w-2xl  w-full">
          <div className="absolute w-full h-full scale-[150%] opacity-60 mix-blend-overlay pointer-events-none mask-gradient-left">
            <video
              src="/new/hero/earth.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            >
              <source src="/new/hero/earth.mp4" />
            </video>
          </div>

          <div className="flex flex-col gap-2 w-full sm:w-[60%] lg:w-[80%] ml-auto mt-10 max-md:mx-auto">
            {servicesData.map((item, index) => (
              <HeroVideosLine
                key={index}
                index={index}
                label={item.label}
                desc={item.desc}
                href={item.href}
                videoSrc={item.videoSrc}
                setVideoSrc={setVideoSrc}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
