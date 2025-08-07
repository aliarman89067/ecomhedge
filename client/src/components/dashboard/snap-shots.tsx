import { motion } from "framer-motion";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { FillBox } from "../fill-box";

export const SnapShots = () => {
  return (
    <section className="relative min-h-screen w-full flex justify-center py-20 lg:py-10 overflow-hidden">
      <img
        src="/new/noise.png"
        alt="Noise Image"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
      />
      <motion.img
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        src="/new/snap-shots/moon.jpg"
        alt="Moon Image"
        className="w-full h-full object-contain absolute -top-[800px] md:-top-[550px] lg:-top-[55%] opacity-50 z-10 mask-gradient-snap-edges"
      />
      <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover scale-y-[-1]"></div>
      <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col items-center">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
          Results That{" "}
          <span className="relative">
            Speak
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 -right-2 top-2 bottom-0 translate-y-1"
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
          for Themselves
        </h1>
        <div className="grid grid-rows-2 gap-6 w-full h-[300vh] md:h-[130vh] max-w-6xl mx-auto bg-secondary/20 rounded-xl p-5 mt-10">
          {/* Row 1: small-left / large-right */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-4">
            <FillBox>
              <div className="relative p-4 bg-secondary/10 rounded-xl h-full overflow-hidden flex items-center justify-center">
                <div className="absolute -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
                <img
                  src="/new/noise.png"
                  alt="Noise Image"
                  className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                />
                <img
                  src="/new/snap-shots/snapShot1.jpeg"
                  alt="Vertical 1"
                  className="w-full h-auto object-contain max-h-full"
                />
              </div>
            </FillBox>
            <FillBox>
              <div className="relative p-4 bg-secondary/10 rounded-xl h-full overflow-hidden flex items-center justify-center">
                <div className="absolute -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
                <img
                  src="/new/noise.png"
                  alt="Noise Image"
                  className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                />
                <img
                  src="/new/snap-shots/snapShot6.jpeg"
                  alt="Vertical 1"
                  className="w-full h-auto object-contain max-h-full"
                />
              </div>
            </FillBox>
          </div>

          {/* Row 2: large-left / small-right */}
          <div className="grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-4">
            <FillBox>
              <div className="relative p-4 bg-secondary/10 rounded-xl h-full overflow-hidden flex items-center justify-center">
                <div className="absolute -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
                <img
                  src="/new/noise.png"
                  alt="Noise Image"
                  className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                />
                <img
                  src="/new/snap-shots/snapShot5.jpeg"
                  alt="Vertical 1"
                  className="w-full h-auto object-contain max-h-full"
                />
              </div>
            </FillBox>
            <FillBox>
              <div className="relative p-4 bg-secondary/10 rounded-xl h-full overflow-hidden flex items-center justify-center">
                <div className="absolute -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
                <img
                  src="/new/noise.png"
                  alt="Noise Image"
                  className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                />
                <img
                  src="/new/snap-shots/snapShot2.jpeg"
                  alt="Vertical 4"
                  className="w-full h-auto object-contain max-h-full"
                />
              </div>
            </FillBox>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
