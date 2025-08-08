import { motion } from "framer-motion";
import { MaxWidthWrapper } from "../max-width-wrapper";

export const VideoSection = () => {
  return (
    <section className="relative min-h-screen w-full flex justify-center py-20 lg:py-10 overflow-hidden">
      <img
        src="/new/noise.png"
        alt="Noise Image"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover scale-y-[-1]"></div>
      <video
        src="/new/hero/earth.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute scale-x-[-1] mask-gradient-left -translate-x-64 opacity-50"
      >
        <source src="/new/hero/earth.mp4" />
      </video>
      <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col items-center">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
          Start your{" "}
          <span className="relative">
            Journey
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 -right-2 top-0 bottom-0 translate-y-1"
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
          with Confidence.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] text-center gap-4 h-full w-full mx-auto p-5 bg-secondary/20 rounded-xl mt-10">
          {/* First column, takes full height (2 rows tall) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-20px" }}
            className="relative overflow-hidden max-md:py-10 px-5 row-span-2 bg-secondary/10 rounded-lg backdrop-blur-sm flex items-center justify-center"
          >
            <motion.img
              src="/new/benefits/guy.png"
              alt="Guy"
              className="w-64 object-contain absolute -bottom-20 -right-20 max-sm:hidden mask-gradient-left opacity-40 pointer-events-none select-none"
              initial={{ rotate: 10 }}
              animate={{ rotate: [10, 14, 10] }} // subtle back-and-forth
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
            <div className="relative flex flex-col gap-3 items-center">
              <h1 className="text-5xl font-extrabold text-white z-10">$30M+</h1>
              <span className="text-secondary bebas tracking-wider text-2xl z-10">
                in sales and Counting
              </span>
              <div className="absolute w-full h-full rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-50 blur-3xl"></div>
            </div>
          </motion.div>

          {/* Second column, Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-20px" }}
            className="bg-secondary/10 max-md:py-10 px-5 rounded-lg backdrop-blur-sm flex items-center justify-center"
          >
            <div className="relative flex flex-col gap-3 items-center">
              <h1 className="text-4xl font-extrabold text-white z-10">20+</h1>
              <span className="text-secondary font-extralight bebas tracking-wider text-xl z-10">
                Brands Launched (Private Label)
              </span>
              <div className="absolute w-full h-full rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-50 blur-3xl"></div>
            </div>
          </motion.div>

          {/* Third column, Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-20px" }}
            className="bg-secondary/10 max-md:py-10 px-5 rounded-lg backdrop-blur-sm flex items-center justify-center"
          >
            <div className="relative flex flex-col gap-3 items-center">
              <h1 className="text-4xl font-extrabold text-white z-10">
                2,809+
              </h1>
              <span className="text-secondary font-extralight bebas tracking-wider text-xl z-10">
                Wholesale Brands Partnered
              </span>
              <div className="absolute w-full h-full rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-50 blur-3xl"></div>
            </div>
          </motion.div>

          {/* Second column, Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-20px" }}
            className="bg-secondary/10 max-md:py-10 px-5 rounded-lg backdrop-blur-sm flex items-center justify-center"
          >
            <div className="relative flex flex-col gap-3 items-center">
              <h1 className="text-4xl font-extrabold text-white z-10">
                5+ year
              </h1>
              <span className="text-secondary font-extralight bebas tracking-wider text-xl z-10">
                Year Fine Tuned Processes
              </span>
              <div className="absolute w-full h-full rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-50 blur-3xl"></div>
            </div>
          </motion.div>

          {/* Third column, Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-20px" }}
            className="bg-secondary/10 max-md:py-10 px-5 rounded-lg backdrop-blur-sm flex items-center justify-center"
          >
            <div className="relative flex flex-col gap-3 items-center">
              <h1 className="text-4xl font-extrabold text-white z-10">
                1,000+
              </h1>
              <span className="text-secondary font-extralight bebas tracking-wider text-xl z-10">
                Customers Delighted
              </span>
              <div className="absolute w-full h-full rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-50 blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
