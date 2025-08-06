import type { Dispatch, SetStateAction } from "react";

interface Props {
  index: number;
  label: string;
  desc: string;
  href: string;
  videoSrc: string;
  setVideoSrc: Dispatch<SetStateAction<string>>;
}

const HeroVideosLine = ({
  index,
  label,
  desc,
  href,
  videoSrc,
  setVideoSrc,
}: Props) => {
  return (
    <div
      key={index}
      onMouseEnter={() => setVideoSrc(videoSrc)}
      onMouseLeave={() => setVideoSrc("")}
      className="group relative cursor-pointer"
    >
      <div className="absolute bottom-0 w-full h-0 group-hover:h-8 transition-all duration-200 ease-in-out bg-white"></div>
      <div className="w-full h-8 border-b border-secondary group-hover:border-black bg-transparent"></div>
      <h2 className="absolute top-1 text-secondary group-hover:text-white text-xl font-light">
        {label.split("").map((child, idx) => (
          <span
            className="hoverText text-secondary group-hover:text-background"
            key={idx}
          >
            {child}
          </span>
        ))}
      </h2>
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        className="absolute w-60 object-contain pointer-events-none max-md:hidden select-none -left-60 group-hover:-left-64 -top-1 opacity-0 group-hover:opacity-100  rounded-xl transition-all duration-200 ease-in-out"
      >
        <source src={videoSrc} />
      </video>
    </div>
  );
};

export default HeroVideosLine;
