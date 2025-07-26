import { motion } from "framer-motion";

export const VideoSection = () => {
  const data = [
    {
      id: 1,
      label: "$30M+",
      desc: "in sales and Counting",
    },
    {
      id: 2,
      label: "20+",
      desc: "Brands Launched (Private Label)",
    },
    {
      id: 3,
      label: "2,809+",
      desc: "Wholesale Brands Partnered",
    },
    {
      id: 4,
      label: "5+ year",
      desc: "Year Fine Tuned Processes",
    },
    {
      id: 5,
      label: "1,000+",
      desc: "Customers Delighted",
    },
  ];

  return (
    <div className="w-full min-h-screen h-full relative overflow-hidden">
      <div className="top-0 left-0 absolute w-full h-full bg-black/60 z-10 backdrop-blur-xl" />
      <video
        src="/overlay-video.mp4"
        autoPlay
        loop
        muted
        className="z-0 absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/overlay-video.mp4" type="mp4/video" />
      </video>
      <div className="absolute z-20 max-lg:w-full max-lg:px-2 h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid-cols-1 grid lg:grid-cols-2 gap-5 lg:gap-28 items-center">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-white font-extralight text-3xl md:text-5xl lg:text-6xl"
        >
          Start your journey with confidence.
        </motion.h1>
        <div className="flex flex-row flex-wrap lg:flex-col gap-3">
          {data.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
                delay: index * 0.01,
              }}
              key={item.id}
              className="flex flex-col gap-1 max-lg:bg-white/20 max-lg:rounded-xl max-lg:px-5 max-lg:py-3"
            >
              <h1 className="text-gold text-2xl sm:text-3xl md:text-5xl font-medium">
                {item.label}
              </h1>
              <span className="text-white font-extralight text-sm md:text-base">
                {item.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
