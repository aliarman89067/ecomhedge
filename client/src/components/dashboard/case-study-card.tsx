import { useEffect, useRef, useState } from "react";
import { FillBox } from "../fill-box";
import Lottie from "lottie-react";
import { FillButton } from "../fill-button";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  href: unknown;
  pageSrc: string;
}

export const CaseStudyCard = ({ title, href, pageSrc }: Props) => {
  const navigate = useNavigate();

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      setXValue(x * 0.5); // control sensitivity
      setYValue(y * 0.5);
    };

    const handleMouseLeave = () => {
      setXValue(0);
      setYValue(0);
    };

    const buttonEl = buttonRef.current;
    if (buttonEl) {
      buttonEl.addEventListener("mousemove", handleMouseMove);
      buttonEl.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (buttonEl) {
        buttonEl.removeEventListener("mousemove", handleMouseMove);
        buttonEl.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  return (
    <div className="w-full h-full relative">
      <div
        onClick={() => navigate(pageSrc)}
        className="absolute max-sm:hidden -right-16 -bottom-16 z-50"
      >
        <button
          ref={buttonRef}
          className="group relative grid h-[220px] w-[220px] place-content-center rounded-full border-2 border-secondary hover:border-black transition-all duration-700 ease-out cursor-pointer"
          style={{
            transform: `translateX(${xValue}px) translateY(${yValue}px)`,
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="pointer-events-none relative z-10 rotate-45 text-7xl text-secondary group-hover:text-black transition-all duration-700 ease-out group-hover:rotate-90"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
          </svg>

          <div className="pointer-events-none absolute inset-0 z-0 scale-0 rounded-full bg-white transition-transform duration-700 ease-out group-hover:scale-100"></div>

          <svg
            width="200"
            height="200"
            className="pointer-events-none absolute z-10"
            style={{
              top: "50%",
              left: "50%",
              transform: "translateX(-50%) translateY(-50%) rotate(205.402deg)",
              position: "absolute",
            }}
          >
            <path
              id="circlePath"
              d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
              fill="none"
            ></path>
            <text>
              <textPath
                href="#circlePath"
                fill="black"
                className="fill-black text-xl font-light uppercase opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
              >
                {title}
              </textPath>
            </text>
          </svg>
        </button>
      </div>
      <FillBox>
        <div className="relative p-2 sm:p-4 bg-secondary/10 rounded-xl h-full overflow-hidden">
          <div className="absolute -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
          <img
            src="/new/noise.png"
            alt="Noise Image"
            className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
          />
          <h1 className="text-white font-bold text-2xl sm:text-3xl text-center">
            $19,760 Profit in 8 Months with FBA Wholesale
          </h1>
          <Lottie
            animationData={href}
            loop={true}
            muted
            autoPlay
            className="w-full h-[200px] sm:h-[270px] md:h-[320px] object-contain"
          />
          <div className="sm:hidden flex w-full justify-center">
            <FillButton title="Read More" onClick={() => navigate(pageSrc)} />
          </div>
        </div>
      </FillBox>
    </div>
  );
};
