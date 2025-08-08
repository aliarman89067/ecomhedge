import { motion } from "framer-motion";
import { MaxWidthWrapper } from "../max-width-wrapper";
import rocketAnimation from "../../../public/new/animations/rocket.json";
import trophyAnimation from "../../../public/new/animations/trophy.json";
import { CaseStudyCard } from "./case-study-card";

export const CaseStudies = () => {
  return (
    <section className="relative min-h-screen w-full flex bg-[url(/new/background.png)] bg-cover  justify-center pt-20 lg:pt-10">
      <img
        src="/new/noise.png"
        alt="Noise Image"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
      />
      <MaxWidthWrapper classNames="relative z-10 w-full flex flex-col items-center mb-20">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
          Experience Ecom Automations Hub{" "}
          <span className="relative">
            Our
            <svg
              viewBox="0 0 290 150"
              fill="none"
              className="absolute -left-2 -right-2 top-4 bottom-0 translate-y-1"
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
          Latest Case Studies.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-10">
          <div className="w-full gap-4 grid-cols-1 bg-secondary/20 rounded-xl p-4">
            <CaseStudyCard
              title="$19,760 Profit in 8 Months with FBA Wholesale"
              href={rocketAnimation}
            />
          </div>
          <div className="w-full gap-4 grid-cols-1 bg-secondary/20 rounded-xl p-4">
            <CaseStudyCard
              title="$19,760 Profit in 8 Months with FBA Wholesale"
              href={trophyAnimation}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
