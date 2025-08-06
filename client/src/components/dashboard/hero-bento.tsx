import { ScrollParallax } from "react-just-parallax";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { motion, useAnimationControls } from "framer-motion";
import { FaAmazon, FaTiktok, FaShopify } from "react-icons/fa";
import { AiFillAmazonCircle } from "react-icons/ai";
import { TbBrandWalmart } from "react-icons/tb";
import { RiAccountBox2Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CTAButton } from "../cta-button";

const iconsData = [
  {
    icon: FaAmazon,
  },
  {
    icon: FaTiktok,
  },
  {
    icon: AiFillAmazonCircle,
  },
  {
    icon: TbBrandWalmart,
  },
  {
    icon: RiAccountBox2Line,
  },
  {
    icon: FaShopify,
  },
];

const contentData = [
  {
    label: "Amazon FBA Automation",
    desc: "Scale your eCommerce business effortlessly with our fully managed Amazon FBA automation—hands-free product sourcing, inventory management, and order fulfillment.",
    href: "/amazon-fba-automation",
  },
  {
    label: "Tiktok Shop Automation",
    desc: "Launch and grow your TikTok Shop with our expert automation systems—generate consistent passive income through trending products and smart store management.",
    href: "/tiktok-shop-automation",
  },
  {
    label: "Amazon Private Label",
    desc: "Build your own brand on Amazon with our private label automation—customized product research, branding, and marketing to maximize long-term profits.",
    href: "/amazon-private-label",
  },
  {
    label: "Walmart Automation",
    desc: "Break into Walmart’s marketplace with ease—our automation handles product uploads, order management, and scaling while you focus on profits.",
    href: "/walmart-automation",
  },
  {
    label: "Account Reinstatement",
    desc: "Lost access to your eCommerce account? Our specialists provide fast, proven solutions to get your Amazon, TikTok, or Walmart account reinstated quickly.",
    href: "/account-reinstatement",
  },
  {
    label: "Shopify Automation",
    desc: "Run a profitable Shopify store without the hassle—our automation manages product sourcing, order fulfillment, and customer service for you.",
    href: "/shopify-dropshipping-automation",
  },
];
export const HeroBento = () => {
  const [rotation, setRotation] = useState(65);
  const [currentIndex, setCurrentIndex] = useState(0);

  const radius = 170; // radius of circle in px
  const center = 230;

  const controls = useAnimationControls();
  const step = 60;
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  let current = 65;
  useEffect(() => {
    let index = 0;
    let isFirst = true;

    const animate = async () => {
      while (true) {
        current += step;
        setRotation(current);

        index = (index + 1) % iconsData.length;

        if (isFirst) {
          setCurrentIndex(0); // First icon highlighted
          isFirst = false;
        } else {
          const reversedIndex =
            (iconsData.length - index + 1) % iconsData.length;
          setCurrentIndex(reversedIndex); // Reverse direction
        }

        await controls.start({
          rotate: current,
          transition: {
            duration: 1.2,
            ease: "easeInOut",
          },
        });

        await delay(5000);
      }
    };

    animate();
  }, [controls, iconsData.length]);

  return (
    <section className="relative min-h-screen w-full flex justify-center pt-20 lg:pt-10 overflow-hidden">
      <img
        src="/new/noise.png"
        alt="Noise Image"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover scale-y-[-1]"></div>
      <div className="absolute top-0 left-0">
        <ScrollParallax strength={0.3}>
          <video
            src="/new/hero/mars.mp4"
            autoPlay
            muted
            loop
            className="scale-x-[-1] h-full mask-gradient-left opacity-50 -translate-x-20 object-contain rounded-r-3xl z-10"
          >
            <source src="/new/hero/mars.mp4" />
          </video>
        </ScrollParallax>
      </div>
      <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col items-center">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
          Keep Up That Hustle with a{" "}
          <span className="relative">
            Profitable
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
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
          Entrepreneurial Journey
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 w-full h-full overflow-hidden">
          <div className="relative flex items-center md:pl-20 w-full max-md:mt-16 max-md:pb-16">
            {contentData.map((item, index) => (
              <div className="absolute flex flex-col max-md:items-center max-md:text-center gap-5 w-full max-sm:h-full">
                <h1
                  className={cn(
                    "relative text-white font-bold text-3xl sm:text-4xl z-50 transition-all duration-[900ms] ease-in-out",
                    index === currentIndex
                      ? "translate-x-0"
                      : "-translate-x-[800px] md:-translate-x-[650px]"
                  )}
                >
                  {item.label}
                </h1>
                <p
                  className={cn(
                    "relative bebas font-light text-gray-400 text-lg sm:text-xl xl:text-2xl z-50 duration-[1100ms] ease-in-out",
                    index === currentIndex
                      ? "translate-x-0"
                      : "-translate-x-[800px] md:-translate-x-[650px]"
                  )}
                >
                  {item.desc}
                </p>
                <div
                  className={cn(
                    "relative mt-5 z-50  duration-[1300ms] ease-in-out",
                    index === currentIndex
                      ? "translate-x-0"
                      : "-translate-x-[650px]"
                  )}
                >
                  <CTAButton title="Read More" />
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:flex flex-col translate-x-[120px] lg:translate-x-[160px] xl:translate-x-[50%]">
            <motion.div
              animate={controls}
              style={{ originX: 0.5, originY: 0.5 }}
              className="relative w-[450px] h-[450px]"
            >
              {iconsData.map((item, index) => {
                const angle = (2 * Math.PI * index) / iconsData.length;
                const x =
                  center +
                  radius * Math.cos(angle) -
                  (index === 0
                    ? 50
                    : index === 1
                    ? 48
                    : index === 2
                    ? 45
                    : index === 3
                    ? 43
                    : index === 4
                    ? 45
                    : 48);
                const y =
                  center +
                  radius * Math.sin(angle) -
                  (index === 0
                    ? 46
                    : index === 1
                    ? 49
                    : index === 2
                    ? 49
                    : index === 3
                    ? 46
                    : index === 4
                    ? 43.5
                    : 43);

                return (
                  <div
                    key={index}
                    className={cn(
                      "absolute z-10 w-[84px] h-[84px]  rounded-full flex items-center justify-center transition-all duration-500 ease-linear"
                    )}
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: `rotate(${-rotation}deg)`, // counter-rotate
                    }}
                  >
                    <div
                      className={cn(
                        "absolute w-full h-full z-10 rounded-full flex items-center justify-center transition-all duration-500 ease-linear",
                        currentIndex === index
                          ? "bg-secondary"
                          : "bg-background"
                      )}
                    >
                      <item.icon
                        className={cn(
                          "size-8 text-secondary transition-all duration-500 ease-linear",
                          currentIndex === index
                            ? "text-background"
                            : "text-secondary"
                        )}
                      />
                    </div>
                    <div
                      className={cn(
                        "w-20 h-20 blur-2xl rounded-full bg-secondary/70 absolute transition-all duration-500 ease-linear",
                        currentIndex === index ? "opacity-100" : "opacity-0"
                      )}
                    ></div>
                  </div>
                );
              })}
              <img
                src="/new/hero-bento/chart.png"
                alt="Chart"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
