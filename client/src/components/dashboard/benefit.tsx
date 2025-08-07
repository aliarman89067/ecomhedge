import Spline from "@splinetool/react-spline";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { motion } from "framer-motion";
import { FillBox } from "../fill-box";

export const Benefits = () => {
  return (
    <section className="relative min-h-screen w-full flex justify-center py-20 lg:py-10 overflow-hidden">
      <img
        src="/new/noise.png"
        alt="Noise Image"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
      />
      <video
        src="/new/benefits/light-rays.mp4"
        loop
        autoPlay
        muted
        className="absolute top-0 h-ful object-contain z-10 mask-gradient-benefits"
      >
        <source src="/new/benefits/light-rays.mp4" />
      </video>
      <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
      <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col items-center">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
          Automate & Dominate the{" "}
          <span className="relative">
            Wholesale
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 -right-2 -top-3 bottom-0 translate-y-1"
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
          Game
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 w-full h-full overflow-hidden mt-10">
          <div className="grid h-full w-full gap-4 grid-cols-1 bg-secondary/20 rounded-xl p-5">
            {/* Top Section – Single Column */}
            <FillBox>
              <div className="relative p-4 bg-secondary/10 rounded-xl h-full overflow-hidden">
                <div className="absolute -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
                <img
                  src="/new/noise.png"
                  alt="Noise Image"
                  className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                />
                <div className="flex flex-col gap-5 h-full w-full sm:w-[90%] lg:w-[70%] justify-between relative">
                  <h1 className="text-white font-bold text-3xl sm:text-4xl">
                    Automate Your Growth on{" "}
                    <span className="relative">
                      Amazon.
                      <svg
                        viewBox="0 0 286 73"
                        fill="none"
                        className="absolute -left-2 -right-2 -top-1 bottom-0 translate-y-1"
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
                  </h1>
                  <h2 className="bebas text-white lg:font-semibold text-2xl lg:text-3xl tracking-wider">
                    1,200 Customers
                  </h2>
                </div>
                <motion.img
                  src="/new/benefits/guy.png"
                  alt="Guy"
                  className="w-52 object-contain absolute top-0 -right-10 max-sm:hidden mask-gradient-left pointer-events-none select-none"
                  initial={{ rotate: 10 }}
                  animate={{ rotate: [10, 14, 10] }} // subtle back-and-forth
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                />
              </div>
            </FillBox>

            {/* Bottom Section – 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <FillBox>
                <div className="relative px-4 py-10 md:py-4 overflow-hidden h-full bg-secondary/10 rounded-xl">
                  <div className="absolute -right-5 -bottom-5 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-20 blur-3xl"></div>
                  <img
                    src="/new/noise.png"
                    alt="Noise Image"
                    className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="flex flex-col gap-3 justify-center h-full">
                    <h1 className="text-white font-semibold text-xl">
                      Reselling Established Brands
                    </h1>
                    <p className="text-white text-sm">
                      Automated wholesale: resell top brands with less risk,
                      more sales.
                    </p>
                  </div>
                </div>
              </FillBox>

              <FillBox>
                <div className="relative px-4 py-10 md:py-4 h-full overflow-hidden bg-secondary/10 rounded-xl">
                  <div className="absolute -left-5 -bottom-5 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-20 blur-3xl"></div>
                  <img
                    src="/new/noise.png"
                    alt="Noise Image"
                    className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="flex flex-col gap-3 justify-center h-full">
                    <h1 className="text-white font-semibold text-xl">
                      Potential for High Sales Volume
                    </h1>
                    <p className="text-white text-sm">
                      Grow fast with repeatable orders—no product dev or
                      branding.
                    </p>
                  </div>
                </div>
              </FillBox>
            </div>
          </div>
          <div className="relative w-full h-full hidden md:flex items-center justify-center">
            <Spline
              scene="https://prod.spline.design/rYD9gqwlUjldGQNB/scene.splinecode"
              className="relative z-10"
            />
            <div className="absolute  w-64 h-64 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
