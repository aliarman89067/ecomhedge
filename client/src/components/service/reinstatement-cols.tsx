import { cn } from "@/lib/utils";
import { CTAButton } from "../cta-button";
import { motion } from "framer-motion";
import { useContext } from "react";
import { FormContext } from "@/context/form-context";

interface Props {
  headingP1: string;
  headingP2: string;
  headingP3?: string;
  desc: string;
  imageHref: string;
  isFlip: boolean;
}

export const ReinstatementCols = ({
  headingP1,
  headingP2,
  headingP3,
  desc,
  imageHref,
  isFlip,
}: Props) => {
  const { setIsOpen } = useContext(FormContext);
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div
        className={cn(
          "flex flex-col max-md:items-center max-md:text-center gap-3",
          isFlip ? "order-2" : "order-1"
        )}
      >
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl">
          {headingP1}{" "}
          <span className="relative">
            {headingP2}
            <svg
              viewBox="0 0 290 150"
              fill="none"
              className="absolute -left-2 -right-2 top-1 bottom-0 translate-y-1"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#FACC15"
                strokeWidth="3"
              />
            </svg>
          </span>{" "}
          {headingP3 && headingP3}
        </h1>
        <p className="bebas font-light text-gray-400 text-lg sm:text-xl xl:text-2xl max-md:text-center tracking-wider mb-5">
          {desc}
        </p>
        <CTAButton title="Get Started" onClick={() => setIsOpen(true)} />
      </div>
      <img
        src={imageHref}
        alt="Image 1"
        className={cn("w-full object-contain", isFlip ? "order-1" : "order-2")}
      />
    </div>
  );
};
