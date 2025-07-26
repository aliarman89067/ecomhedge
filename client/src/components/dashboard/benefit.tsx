import { ChartNoAxesColumnIncreasing, QuoteIcon } from "lucide-react";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { motion } from "framer-motion";
import { MouseParallax } from "react-just-parallax";

export const Benefits = () => {
  return (
    <div className="py-10 relative min-h-screen w-full flex flex-col overflow-hidden items-center justify-center">
      <div className="absolute z-10 top-0 left-0 w-full h-full bg-black/40 backdrop-blur-xl" />
      <video
        src="/golden-video.mp4"
        autoPlay
        muted
        loop
        className="z-0 w-full h-full object-cover absolute top-0 left-0"
      >
        <source src="/golden-video.mp4" />
      </video>
      <MaxWidthWrapper classNames="relative z-[10] flex flex-col gap-4 items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr]  gap-10 w-full">
          {/* Top Left */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-white text-2xl lg:text-4xl"
          >
            Wholesale Gains with{" "}
            <span className="inline-flex text-gold font-bold relative">
              <span>Ecomasis</span>
              <img
                src="/heading-stars.png"
                alt="Stars"
                className="absolute -top-2 -right-6 rotate-[20deg] w-7 lg:w-10 h-7 lg:h-10 object-contain"
              />
            </span>{" "}
            <br />
            FBA Automation
          </motion.h1>

          {/* Right - Spans 2 Rows */}
          <div className="row-span-2 flex">
            <MouseParallax strength={0.05}>
              <motion.div
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="h-full bg-white/10 p-6 shadow rounded-xl flex flex-col gap-3 lg:gap-0 items-center justify-between"
              >
                {/* Right box content here */}
                <p className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold md:font-bold">
                  Automate Your Growth on Amazon.
                </p>
                <div className="flex items-center gap-2 bg-gold px-6 py-6 rounded-full">
                  <span className="text-white text-xl">1,200+ Customers</span>
                  <ChartNoAxesColumnIncreasing className="text-white size-7" />
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-white overflow-hidden shrink-0 grow flex items-center justify-center">
                    <img
                      src="/benefits/p3.png"
                      alt="Person Image"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="text-white font-extralight text-base">
                    Start Your Business Today.
                  </span>
                </div>
              </motion.div>
            </MouseParallax>
          </div>

          {/* Bottom Left */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full bg-white/10 rounded-lg p-4 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/50 overflow-hidden  flex items-center justify-center">
                  <img
                    src="/benefits/p1.png"
                    alt="Person Image"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h1 className="text-gold font-medium text-sm lg:text-base">
                  Reselling Established Brands
                </h1>
              </div>
              <div className="relative mt-2">
                <QuoteIcon className="text-white absolute hidden md:flex -left-3 -top-1 size-3 rotate-[200deg]" />
                <QuoteIcon className="text-white absolute hidden md:flex left-24 lg:left-[235px] -bottom-1 size-3 rotate-[20deg]" />
                <p className="text-white text-sm">
                  With our Amazon wholesale automation, resell trusted brands
                  with built-in demand—minimizing risk and maximizing reliable
                  sales.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full bg-white/10 rounded-lg p-4 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden  flex items-center justify-center">
                  <img
                    src="/benefits/p2.png"
                    alt="Person Image"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h1 className="text-gold font-medium text-sm lg:text-base">
                  Potential for High Sales Volume
                </h1>
              </div>
              <div className="relative mt-2">
                <QuoteIcon className="text-white absolute hidden md:flex -left-3 -top-1 size-3 rotate-[200deg]" />
                <QuoteIcon className="text-white absolute hidden md:flex right-[90px] lg:left-16 -bottom-1 size-3 rotate-[20deg]" />
                <p className="text-white text-sm">
                  Our wholesale model is built for scale—grow by increasing
                  orders, no need for new products or branding.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
