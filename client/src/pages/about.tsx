import { motion } from "framer-motion";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { TabName } from "@/lib/tab-name";
import { cn } from "@/lib/utils";
import {
  CheckIcon,
  HandCoinsIcon,
  HeartHandshakeIcon,
  MessageCircleOffIcon,
  PuzzleIcon,
  SearchIcon,
  UsersIcon,
} from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { InfoCols } from "@/components/about/info-cols";
import { MouseParallax } from "react-just-parallax";
import { FillBox } from "@/components/fill-box";

const About = () => {
  const keyFeatureData = [
    {
      label: "Product Listings:",
      desc: "Sellers can create and manage product listings, including uploading images, writing descriptions, setting prices, and categorizing products.",
    },
    {
      label: "Inventory Management:",
      desc: "Tools to track stock levels, manage inventory across multiple fulfillment centers, and set up alerts for low stock levels.",
    },
    {
      label: "Order Fulfillment:",
      desc: "Sellers can choose between fulfilling orders themselves (Merchant Fulfilled Network - MFN) or using Fulfillment by FBA, where platform handles storage, packaging, and shipping.",
    },
    {
      label: "Shipping Options:",
      desc: "Options for setting up shipping rates, including free shipping, standard shipping, and expedited shipping.",
    },
    {
      label: "Returns and Refunds:",
      desc: "Integrated system for managing returns and refunds, with platform providing guidelines and customer support.",
    },
    {
      label: "Customer Messaging:",
      desc: "Tools for communicating directly with customers regarding orders, shipping, and product inquiries.",
    },
  ];
  const analyticsData = [
    {
      count: "4,710",
      prefix: "+",
      title: "Customers",
      desc: "Enabling thousands of businesses to streamline operations through cutting-edge automation solutions.",
    },
    {
      count: "$150M",
      prefix: "+",
      title: "Generated",
      desc: "Helping entrepreneurs turn ideas into businesses over hundreds times.",
    },
    {
      count: "3",
      prefix: "+ Years",
      title: "Leading the industry",
      desc: "Giving customers access to trusted, affordable business automation help for over half a decade.",
    },
  ];
  const servicesData = [
    {
      icon: HandCoinsIcon,
      label: "Lift together",
      desc: "Pioneering solutions that leverage cutting-edge technology to streamline business processes and enhance efficiency, setting new standards in the digital industry.",
    },
    {
      icon: UsersIcon,
      label: "Champion our customers",
      desc: "Our clients are our priority. We strive to be trusted partners, supporting their journey with essential tools and expertise. By understanding their challenges, we anticipate needs to simplify and enhance their business operations.",
    },
    {
      icon: PuzzleIcon,
      label: "See the whole picture",
      desc: "Driven by curiosity, we connect the dots to ensure a seamless experience. Collaborating to comprehend the broader impact of our decisions, we prioritize every detail of our clients' journey. Our focus is on creating a comprehensive, flawless solution.",
    },
    {
      icon: SearchIcon,
      label: "Focus on results",
      desc: "Ownership defines our approach to achieving excellence. We set clear goals, monitor progress, and uphold accountability. Embracing an entrepreneurial spirit, we innovate fearlessly, learn from mistakes, and push boundaries to deliver exceptional outcomes",
    },
    {
      icon: MessageCircleOffIcon,
      label: "Keep it simple",
      desc: "Clear and direct communication is key to simplicity at Ecom Automations Hub. We actively listen, incorporate diverse viewpoints, and encourage open dialogue. Our transparent approach builds trust with both our team and clients.",
    },
    {
      icon: HeartHandshakeIcon,
      label: "Together we achieve",
      desc: "Collaboration is ingrained in our DNA. By working together seamlessly, we harness collective strengths to drive success. Embracing inclusivity and mutual respect, we foster an environment where ideas flourish and innovation thrives.",
    },
  ];
  TabName(" | About");

  return (
    <section className="relative min-h-screen w-full flex flex-col bg-cover justify-center overflow-hidden">
      <div className="w-full relative">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <div className="relative w-full min-h-screen lg:h-screen py-16 flex flex-col">
            <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
              Go global with{" "}
              <span className="relative">
                Ecom
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
              Automations Hub.
            </h1>
            <div className="relative grid grid-cols-1 md:grid-cols-2 w-full h-full gap-5 mt-10">
              <div className="relative w-full h-full px-3 py-3 flex items-center justify-center rounded-xl overflow-hidden bg-secondary/20">
                <div className="absolute overflow-hidden -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
                <img
                  src="/new/noise.png"
                  alt="Noise Image"
                  className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative w-full h-full px-3 py-10 md:py-3 flex rounded-xl bg-secondary/10">
                  <motion.img
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                    src="/new/about/moon.jpg"
                    alt="Moon"
                    className="absolute opacity-60 -bottom-10 left-0 w-full object-contain mask-gradient-snap-edges"
                  />
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl w-full lg:w-[90%] font-bold text-white relative">
                    Automation-Driven Success Across Every Major Ecom Platform
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5">
                <div className="relative w-full h-full p-3 flex items-center justify-center rounded-xl bg-secondary/20">
                  <div className="absolute overflow-hidden -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
                  <img
                    src="/new/noise.png"
                    alt="Noise Image"
                    className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="w-full h-full px-3 py-10 md:py-3 flex items-center justify-center rounded-xl bg-secondary/10">
                    <h1 className="text-2xl font-bold text-white relative">
                      Driving Digital Success with Ecom Automation & Business
                      Expertise
                    </h1>
                  </div>
                </div>
                <div className="relative w-full h-full p-3 flex items-center justify-center rounded-xl bg-secondary/20">
                  <div className="absolute overflow-hidden -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
                  <img
                    src="/new/noise.png"
                    alt="Noise Image"
                    className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="w-full h-full px-3 py-10 md:py-3 flex items-center justify-center rounded-xl bg-secondary/10">
                    <h1 className="text-2xl font-bold text-white relative">
                      Boosting Productivity with Smart Automation & Expert
                      Strategy
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] scale-y-[-1] bg-cover"></div>

        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <div className="w-full flex flex-col items-center mt-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className="flex bg-white rounded-xl sm:rounded-2xl md:rounded-4xl"
            >
              <img
                src="/new/about/team.png"
                alt="Team"
                className="w-full object-contain"
              />
            </motion.div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <div className="w-full flex flex-col items-center mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
              <div className="relative w-full p-3 rounded-xl bg-secondary/20 overflow-hidden">
                <div className="absolute overflow-hidden -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
                <img
                  src="/new/noise.png"
                  alt="Noise Image"
                  className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                />
                <div className="w-full p-3 rounded-xl bg-secondary/10 relative flex flex-col gap-2">
                  <h3 className="text-white font-semibold text-xl">
                    Our Heritage
                  </h3>
                  <span className="text-secondary bebas text-xl">
                    2019 - 2020 : B2B Marketplace
                  </span>
                  <span className="text-secondary text-base">
                    We started our journey as a Global B2B Marketplace
                    connecting buyers & suppliers.
                  </span>
                  <span className="text-secondary bebas text-xl">
                    2021 - 2022 : Digital Agency
                  </span>
                  <span className="text-secondary text-base">
                    We transitioned to serve as a digital agency, catering to
                    clients worldwide.
                  </span>
                  <span className="text-secondary bebas text-xl">
                    2023 - Present: Ecom Automation
                  </span>
                  <span className="text-secondary text-base">
                    Became the e-com solution provider, helping entrepreneurs to
                    generate passive income.
                  </span>
                </div>
              </div>
              <div className="relative w-full p-3 rounded-xl bg-secondary/20 overflow-hidden">
                <div className="absolute overflow-hidden -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
                <img
                  src="/new/noise.png"
                  alt="Noise Image"
                  className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                />
                <div className="w-full p-3 rounded-xl bg-secondary/10 relative flex flex-col gap-2">
                  <h3 className="text-white font-semibold text-xl">
                    Our Heritage
                  </h3>
                  <span className="text-secondary bebas text-xl">
                    2019 - 2020 : B2B Marketplace
                  </span>
                  <span className="text-secondary text-base">
                    We started our journey as a Global B2B Marketplace
                    connecting buyers & suppliers.
                  </span>
                  <span className="text-secondary bebas text-xl">
                    2021 - 2022 : Digital Agency
                  </span>
                  <span className="text-secondary text-base">
                    We transitioned to serve as a digital agency, catering to
                    clients worldwide.
                  </span>
                  <span className="text-secondary bebas text-xl">
                    2023 - Present: Ecom Automation
                  </span>
                  <span className="text-secondary text-base">
                    Became the e-com solution provider, helping entrepreneurs to
                    generate passive income.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] scale-y-[-1] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <div className="relative w-full h-full flex items-center justify-between overflow-hidden mt-10 bg-secondary/20 p-3 rounded-3xl">
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
            <img
              src="/new/noise.png"
              alt="Noise Image"
              className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative px-3 py-4 rounded-3xl bg-secondary/10 flex flex-col items-center text-center w-full gap-2">
              <h1 className="text-white font-bold text-3xl">
                Key Features of Seller Account
              </h1>
              <p className="text-white">
                The Seller Account service is the gateway for individuals and
                businesses to sell products directly to customers on
                marketplace. By creating an Seller Account, sellers can list
                their products, manage their inventory, process orders, and
                engage with customers through platform. Here’s an overview of
                what the Seller Account service entails
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <InfoCols data={keyFeatureData} />
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] scale-y-[-1] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <div className="relative w-full h-full flex items-center justify-between overflow-hidden mt-10 bg-secondary/20 p-3 rounded-3xl">
            <div className="absolute left-0 top-0 w-64 h-64 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
            <img
              src="/new/noise.png"
              alt="Noise Image"
              className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-50 px-3 py-4 rounded-3xl bg-secondary/10 w-full h-full flex flex-col gap-2">
              <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
                Ecom Automations Hub, your top choice for{" "}
                <span className="relative">
                  empowering
                  <svg
                    viewBox="0 0 286 73"
                    fill="none"
                    className="absolute -left-2 -right-2 -top-3 bottom-0 translate-y-1"
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
                business automation
              </h1>
              <p className="text-white text-center mt-5">
                We're for the visionaries. Those driven by success, fueled by
                ambition, and inspired by their loved ones. We're about
                technology that simplifies, strategists and experts who
                streamline, and trusted partners who turn challenges into
                opportunities. We're about unlocking doors, expanding horizons,
                and revealing what's achievable. We empower individuals to take
                that crucial first step and every subsequent stride. We ensure
                everyone has an equal chance. For entrepreneurs launching their
                ventures, for families relying on them, for safeguarding
                innovative ideas—we are Ecom Automations Hub. Here to formalize
                aspirations and pave the way forward.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <div className="relative w-full h-full flex items-center text-center flex-col overflow-hidden mt-10">
            <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
              A{" "}
              <span className="relative">
                few
                <svg
                  viewBox="0 0 290 150"
                  fill="none"
                  className="absolute -left-2 -right-2 top-4 bottom-0 translate-y-1"
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
              highlights.
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
              {analyticsData.map((item, i) => (
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
                    key={i}
                    className="w-full h-64 px-3 rounded-b-full bg-secondary/20 flex flex-col items-center overflow-hidden"
                  >
                    <div className="flex flex-col gap-2 items-center relative py-4">
                      <h1 className="text-white font-bold text-3xl">
                        {item.title}
                      </h1>
                      <span className="text-secondary text-base">
                        {item.count} {item.prefix}
                      </span>
                      <span className="text-secondary text-sm">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                </FillBox>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] scale-y-[-1] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <div className="relative w-full h-full flex items-center justify-between overflow-hidden mt-10 bg-secondary/20 p-3 rounded-3xl">
            <div className="absolute left-0 top-0 w-64 h-64 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
            <img
              src="/new/noise.png"
              alt="Noise Image"
              className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-50 px-3 py-4 rounded-3xl bg-secondary/10 w-full h-full flex flex-col gap-2">
              <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
                The Ecom Automations Hub{" "}
                <span className="relative">
                  journey
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
                into automation
              </h1>
              <p className="text-white text-center mt-5">
                In the wake of the COVID-19 pandemic, the business landscape
                underwent unprecedented challenges. Thousands of businesses
                struggled to adapt, facing shortages in skilled personnel and
                operational inefficiencies. The ripple effects were profound,
                with many enterprises experiencing reduced performance and
                financial strain, leading to widespread job losses. Witnessing
                these challenges firsthand, Ecom Automations Hub recognized a
                critical need to pivot from traditional business strategy
                services to pioneering business automation solutions. With a
                vision to empower businesses across over 40 industries. Today,
                Ecom Automations Hub continues to evolve, dedicated to
                empowering entrepreneurs and enterprises alike with
                transformative automation solutions that pave the way for
                success in the new era of business.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <InfoCols data={servicesData} />
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] scale-y-[-1] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <div className="relative w-full h-full flex items-center justify-between overflow-hidden mt-10 bg-secondary/20 p-3 rounded-3xl">
            <div className="absolute left-0 top-0 w-64 h-64 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
            <img
              src="/new/noise.png"
              alt="Noise Image"
              className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-50 px-3 py-4 rounded-3xl bg-secondary/10 w-full h-full flex flex-col gap-2">
              <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
                Making it{" "}
                <span className="relative">
                  official
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
                for everyone
              </h1>
              <p className="text-white text-center mt-5">
                At Ecom Automations Hub, we are dedicated to making business
                automation accessible to all, irrespective of background or
                circumstance. We aim to empower entrepreneurs and businesses
                alike, ensuring they have the tools and support needed to thrive
                in the digital age. We are deeply committed to supporting the
                broader business community through our social impact
                initiatives. By forming strategic partnerships, we aim to uplift
                underserved sectors and communities that may not have easy
                access to advanced business solutions. Furthermore, we actively
                participate in corporate giving and provide our employees with
                opportunities for community service and corporate matching
                programs.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <div className="relative my-10 w-full p-3 bg-secondary/20 rounded-xl">
            <div className="absolute -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
            <img
              src="/new/noise.png"
              alt="Noise Image"
              className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 w-full p-5 bg-secondary/10 rounded-xl">
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  "We believe every business deserves the full protection of the
                  legal system as well as a simple way to start, operate, and
                  run their business daily."
                </h1>
                <span className="text-secondary">- Dan Wernikoff, CEO</span>
              </div>
              <img
                src="/new/about/image5.jpg"
                alt="Person Image"
                className="w-full h-full rounded-xl object-cover max-md:hidden"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default About;
