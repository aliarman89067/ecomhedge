import { FillBox } from "../fill-box";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { MouseParallax } from "react-just-parallax";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "100+",
    label: "Active Seller",
    imgSrc: "/new/ranking/seller.png",
  },
  {
    id: 2,
    title: "85,000+",
    label: "Orders Processed",
    imgSrc: "/new/ranking/box.png",
  },
  {
    id: 3,
    title: "$2.6M",
    label: "Members Sales",
    imgSrc: "/new/ranking/members.png",
  },
];

export const Headline = () => {
  return (
    <section className="relative min-h-screen w-full flex bg-[url(/new/background.png)] bg-cover  justify-center pt-20 lg:pt-10">
      <img
        src="/new/noise.png"
        alt="Noise Image"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
      />
      <MaxWidthWrapper classNames="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
          An Amazon automation company changing the{" "}
          <span className="relative">
            lives
            <svg
              viewBox="0 0 290 150"
              fill="none"
              className="absolute -left-2 -right-2 top-3 bottom-0 translate-y-1"
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
          of ecommerce sellers.
        </h1>
        <div className="relative w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] my-5">
          <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
            <MouseParallax strength={0.03}>
              <img
                src="/new/ranking/circle.png"
                alt="Circle"
                className="w-full h-full object-contain relative scale-[110%]"
              />
            </MouseParallax>
          </div>
          <div className="absolute -top-5 left-0 w-full h-full rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-50 blur-3xl"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-xs md:max-w-2xl w-full">
          {data.map((item, i) => (
            <FillBox
              key={i}
              classNames={`${
                i === 0
                  ? "md:-rotate-10 mt-4"
                  : i === 1
                  ? ""
                  : "md:rotate-10 mt-4"
              }`}
            >
              <div
                key={item.id}
                className="w-full h-64 rounded-b-full bg-secondary/20 flex flex-col items-center overflow-hidden"
              >
                <div className="flex flex-col gap-2 items-center relative py-4">
                  <h1 className="text-white font-bold text-3xl">
                    {item.title}
                  </h1>
                  <span className="text-secondary text-base">{item.label}</span>
                </div>
                <img
                  src={item.imgSrc}
                  alt={item.label}
                  className="mt-0 w-[70%] object-contain"
                />
              </div>
            </FillBox>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
