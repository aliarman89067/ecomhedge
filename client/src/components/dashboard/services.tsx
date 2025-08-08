import { MaxWidthWrapper } from "../max-width-wrapper";
import { motion } from "framer-motion";
import { CTAButton } from "../cta-button";

export const Services = () => {
  return (
    <section className="relative min-h-screen w-full flex justify-center py-20 lg:py-10 overflow-hidden">
      <img
        src="/new/noise.png"
        alt="Noise Image"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover scale-y-[-1]"></div>
      <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col items-center">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
          Choose a Service{" "}
          <span className="relative">
            Tailored
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
          To Your Needs.
        </h1>
        <div className="relative grid md:grid-cols-1 lg:grid-cols-2 gap-4 lg:min-h-[500px] p-4 mt-10">
          {/* Left Column */}
          <motion.div
            className="bg-secondary/20 p-1 md:p-5 text-white rounded-xl overflow-hidden flex items-center justify-center h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative p-3 md:p-6 w-full h-full bg-secondary/10 rounded-xl">
              <img
                src="/dots-texture.png"
                alt="Dots Texture"
                className="absolute top-0 right-0 w-full h-full object-cover opacity-10 mask-gradient-left"
              />
              <div className="w-full flex h-full">
                <div className="w-full sm:w-[80%] flex flex-col gap-5 z-10">
                  <h1 className="text-white font-extrabold text-3xl sm:text-5xl md:text-6xl lg:leading-[70px]">
                    Fulfillment by Amazon (FBA)
                  </h1>
                  <span className="text-white text-base sm:text-xl">
                    Streamline Operations & Boost Sales with FBA Automation.
                  </span>
                  <CTAButton title="About us" />
                </div>
                <img
                  src="/services/truck.png"
                  alt="Chart Image"
                  className="absolute -right-20 sm:-right-44 top-1/2 max-sm:-translate-y-1/2 sm:-top-16 flex-1 scale-x-[-1] max-sm:w-60 sm:h-[600px] object-contain sm:object-cover mask-gradient-left opacity-60 max-sm:opacity-30"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - 2 Rows */}
          <div className="flex flex-col h-full gap-4">
            <motion.div
              className="h-[250px] lg:h-full bg-secondary/20 text-white p-1 md:p-3 rounded-xl overflow-hidden flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative max-lg:pb-32 p-3 md:p-6 w-full h-full bg-secondary/10 rounded-xl">
                <img
                  src="/dots-texture.png"
                  alt="Dots Texture"
                  className="absolute top-0 right-0 w-full h-full object-cover opacity-10 mask-gradient-left"
                />
                <div className="w-full flex h-full">
                  <div className="w-full sm:w-[70%] flex flex-col gap-5 z-10">
                    <h1 className="text-white font-extrabold text-3xl sm:text-4xl">
                      Buy Box Advantage
                    </h1>
                    <span className="text-white text-base sm:text-xl">
                      Win the Buy Box, Maximize Your Sales Today.
                    </span>
                  </div>
                  <img
                    src="/services/box.png"
                    alt="Chart Image"
                    className="absolute -right-28 -top-10 flex-1 h-[350px] object-cover mask-gradient-right max-sm:opacity-30"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="h-[250px] lg:h-full bg-secondary/20 text-white p-1 md:p-3 rounded-xl overflow-hidden flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative max-lg:pb-32 p-3 md:p-6 w-full h-full bg-secondary/10 rounded-xl">
                <img
                  src="/dots-texture.png"
                  alt="Dots Texture"
                  className="absolute top-0 right-0 w-full h-full object-cover opacity-10 mask-gradient-left"
                />
                <div className="w-full flex h-full">
                  <div className="w-full sm:w-[70%] flex flex-col gap-5">
                    <h1 className="text-white font-extrabold text-3xl sm:text-4xl">
                      Organic Sales
                    </h1>
                    <span className="text-white text-base sm:text-xl">
                      Leverage Built-In Demand with High-Visibility Brands.
                    </span>
                  </div>
                  <img
                    src="/services/chart.png"
                    alt="Chart Image"
                    className="absolute -right-28 -top-10 flex-1 h-[350px] scale-x-[-1] object-cover mask-gradient-right max-sm:opacity-70"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
