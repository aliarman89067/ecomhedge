import { cn } from "@/lib/utils";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { motion } from "framer-motion";
import { CTAButton } from "../cta-button";
import { FillButton } from "../fill-button";

export const ServicesList = () => {
  const servicesData = [
    {
      label: "Amazon FBA Automation",
      desc: "Effortlessly scale your business with automated Amazon FBA solutions.",
      href: "/amazon-fba-automation",
      imgSrc: "/services-list/amazon-private-label.jpg",
      isFull: false,
    },
    {
      label: "Tiktok Shop Automation",
      desc: "Launch your TikTok Shop Store and earn Monthly passive income.",
      href: "/tiktok-shop-automation",
      imgSrc: "/services-list/tiktok-shop-automation.jpg",
      isFull: true,
    },
    {
      label: "Amazon Private Label",
      desc: "Effortlessly scale your business with automated Amazon FBA solutions.",
      href: "/amazon-private-label",
      imgSrc: "/services-list/amazon-label-automation.jpg",
      isFull: false,
    },
    {
      label: "Walmart Automation",
      desc: "Streamline your business operations, driving efficiency and success with Walmart Automation.",
      href: "/walmart-automation",
      imgSrc: "/services-list/walmart-automation.jpg",
      isFull: true,
    },
    {
      label: "Account Reinstatement",
      desc: "Efficient Solutions to Swiftly Regain Control of Your platform account",
      href: "/account-reinstatement",
      imgSrc: "/services-list/account-reinstatement.jpg",
      isFull: false,
    },
    {
      label: "Shopify Automation",
      desc: "Simplify your e-commerce success with automated Shopify dropshipping.",
      href: "/shopify-dropshipping-automation",
      imgSrc: "/services-list/shopify-automation.jpg",
      isFull: true,
    },
  ];

  return (
    <section className="relative min-h-screen w-full flex bg-[url(/new/background.png)] bg-cover  justify-center pt-20 lg:pt-10">
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
      <MaxWidthWrapper classNames="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
          We Provide{" "}
          <span className="relative">
            Quality
            <svg
              viewBox="0 0 290 150"
              fill="none"
              className="absolute -left-2 -right-2 top-1 bottom-0 translate-y-1"
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
          Services
        </h1>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-10 max-md:max-w-md">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-20 blur-3xl"></div>
          {servicesData.map((item, index) => (
            <div
              key={index}
              className={cn(
                "relative z-10 p-3 rounded-xl overflow-hidden bg-secondary/20 flex flex-col w-full h-[500px] lg:h-[450px]"
              )}
            >
              {item.isFull && (
                <div className="w-full h-full  absolute top-0 left-0 bg-gradient-to-b from-transparent from-0% to-80% to-background" />
              )}
              <img
                src={item.imgSrc}
                alt={item.label + " Image"}
                className={cn(
                  "object-cover rounded-xl",
                  item.isFull ? "h-full rounded-b-[40px]" : "h-[270px]"
                )}
              />
              {item.isFull && (
                <div className="absolute flex flex-col mt-6 bottom-5 px-2">
                  <h1 className="text-white font-medium text-2xl sm:text-4xl">
                    {item.label}
                  </h1>
                  <span className="bebas text-secondary text-base sm:text-xl tracking-wider">
                    {item.desc}
                  </span>
                  <div className="flex sm:items-center justify-between gap-3 mt-2 max-sm:flex-col">
                    <FillButton title="See More" />
                    <FillButton title="Get Started" />
                  </div>
                </div>
              )}
              {!item.isFull && (
                <div className="flex flex-col mt-auto">
                  <h1 className="text-white font-medium text-2xl sm:text-3xl">
                    {item.label}
                  </h1>
                  <span className="bebas text-secondary text-base sm:text-lg tracking-wider">
                    {item.desc}
                  </span>
                  <div className="flex sm:items-center justify-between gap-3 mt-2 max-sm:flex-col">
                    <FillButton title="See More" />
                    <FillButton title="Get Started" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
