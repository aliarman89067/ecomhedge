import { motion } from "framer-motion";
import { CTAButton } from "../cta-button";
import type { LucideIcon } from "lucide-react";

interface Props {
  data: { label: string; desc: string; icon?: LucideIcon }[];
}

export const InfoCols = ({ data }: Props) => {
  return (
    <div className="relative w-full h-full flex items-center justify-between overflow-hidden mt-10 bg-secondary/20 p-3 rounded-3xl">
      <video
        src="/new/hero/mars.mp4"
        autoPlay
        muted
        loop
        className="absolute right-0 h-full mask-gradient-left opacity-50  object-cover rounded-r-3xl z-10"
      >
        <source src="/new/hero/mars.mp4" />
      </video>
      <div className="absolute left-0 top-0 w-64 h-64 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
      <img
        src="/new/noise.png"
        alt="Noise Image"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-50 px-3 py-4 rounded-3xl bg-secondary/10 w-full h-full gap-10 grid grid-cols-1 md:grid-cols-2">
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            viewport={{ once: true, margin: "-30px" }}
            key={index}
            className="w-full flex flex-col gap-2"
          >
            {item.icon && (
              <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center">
                <item.icon className="size-6 text-white" />
              </div>
            )}
            <h1 className="text-white font-semibold text-xl sm:text-2xl">
              {item.label}
            </h1>
            <span className="text-white text-base sm:text-lg">{item.desc}</span>
          </motion.div>
        ))}
        <CTAButton title="Get Started" />
      </div>
    </div>
  );
};
