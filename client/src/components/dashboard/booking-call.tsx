import { useContext } from "react";
import { CTAButton } from "../cta-button";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { motion } from "framer-motion";
import { FormContext } from "@/context/form-context";

export const BookingCall = () => {
  const { setIsOpen } = useContext(FormContext);
  return (
    <section className="relative min-h-screen w-full flex justify-center py-20 lg:py-10 overflow-hidden">
      <img
        src="/new/noise.png"
        alt="Noise Image"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
      />
      <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 w-full h-full">
          <div className="w-full flex flex-col justify-center max-lg:items-center gap-10">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-white font-extrabold text-3xl sm:text-4xl md:text-7xl max-lg:text-center"
            >
              Let's Tap Into{" "}
              <span className="relative">
                Your
                <svg
                  viewBox="0 0 286 73"
                  fill="none"
                  className="absolute -left-2 -right-2 top-6 bottom-0 translate-y-1"
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
              Hidden Potential Together.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <CTAButton
                title="Book a Call Now"
                onClick={() => setIsOpen(true)}
              />
            </motion.div>
          </div>
          <div className="relative w-full hidden sm:flex flex-col justify-center items-center gap-10">
            <video
              src="/new/booking/sphere.mp4"
              autoPlay
              muted
              loop
              className="relative w-full h-full object-cover video-glow-mask z-10"
            >
              <source src="/new/booking/sphere.mp4" />
            </video>
            <div className="absolute w-[320px] h-[320px] rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%]  blur-3xl"></div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
