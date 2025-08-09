import { CTAButton } from "@/components/cta-button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TabName } from "@/lib/tab-name";
import {
  Brain,
  CarIcon,
  ChartColumnBigIcon,
  ChartNetworkIcon,
  Clock4Icon,
  GemIcon,
  KeyIcon,
  LaptopIcon,
  NotepadText,
  RocketIcon,
  SearchIcon,
  ShieldUserIcon,
  StoreIcon,
  SunIcon,
  UserIcon,
  UsersIcon,
  UsersRoundIcon,
  VideoIcon,
} from "lucide-react";
import { FormBox } from "@/components/service/form";
import { InfoCols } from "@/components/about/info-cols";
import { MouseParallax } from "react-just-parallax";

export const TiktokShopAutomation = () => {
  const gridData = [
    {
      icon: ChartNetworkIcon,
      label: "Marketing Like Never Before",
      desc: "With ecom automations hub top-notch TikTok shop automation, you get a chance to be as creative as you want in your marketing efforts. Innovative marketing is TikTok's USP, and we make sure to leverage it fully!",
    },
    {
      icon: UsersRoundIcon,
      label: "Unparalleled Engagement",
      desc: "When it's TikTok and we are your TikTok private label service providers—engagement should be the least of your worries.",
    },
    {
      icon: ShieldUserIcon,
      label: "Guaranteed Convenience",
      desc: "With our TikTok shop automation service, you can offer your customers a seamless shopping experience thanks to our strong business model along with TikTok in-app shopping feature.",
    },
    {
      icon: Clock4Icon,
      label: "Real-time Dealings",
      desc: "TikTok shop setup allows you to curate the most creative live shopping events with strong creator collaborations—and we assist you in getting it all done with perfection.",
    },
    {
      icon: GemIcon,
      label: "Impactful Promotions",
      desc: "We specialize in identifying the most suitable TikTok influencers, connecting you with them, and ensuring an authentic and relatable product promotion.",
    },
  ];
  const perksData = [
    {
      icon: UsersIcon,
      label: "Wider reach",
      desc: "TikTok's vast user base offers unparalleled reach, helping you connect with millions of potential customers daily.",
    },
    {
      icon: VideoIcon,
      label: "Engage with trends",
      desc: "Leverage trending challenges and hashtags to boost visibility and attract a highly engaged audience to your products.",
    },
    {
      icon: RocketIcon,
      label: "Cost-effective marketing",
      desc: "With organic reach and affordable advertising options, TikTok offers cost-effective marketing solutions to maximize your ROI.",
    },
    {
      icon: UserIcon,
      label: "Increase brand awareness",
      desc: "Creating viral content on TikTok can significantly enhance brand awareness and drive traffic to your ecommerce store.",
    },
  ];
  const analyticsData = [
    {
      count: "700",
      prefix: "+",
      title: "Active Sellers",
      desc: "Empowering over 700+ active sellers to thrive in ecommerce.",
    },
    {
      count: "185,000",
      prefix: "+",
      title: "Orders Processed",
      desc: "Efficiently handling over 185,000+ orders with precision and care.",
    },
    {
      count: "$2.6M",
      prefix: "",
      title: "Members Sales",
      desc: "Facilitating over $2.6 million in member sales through effective strategies.",
    },
  ];
  const benefitsData = [
    {
      icon: SunIcon,
      label: "Expand your reach",
      desc: "ecomasis strategies tap into TikTok's vast user base, increasing your brand's visibility and attracting a global audience.",
    },
    {
      icon: LaptopIcon,
      label: "Streamline operations",
      desc: "ecomasis automates your inventory management, order processing, and customer service for a seamless and efficient operation.",
    },
    {
      icon: ChartColumnBigIcon,
      label: "Boost your sales",
      desc: "ecomasis expertise to drive high engagement and conversions with targeted TikTok campaigns tailored for your audience.",
    },
  ];
  const servicesData = [
    {
      icon: KeyIcon,
      label: "Business registration",
      desc: "We register your business, setting up the legal foundation essential for your TikTok shop to operate seamlessly and compliantly from the start.",
    },
    {
      icon: StoreIcon,
      label: "Store setup",
      desc: "We create and configure your TikTok shop, ensuring it is visually appealing and optimized for attracting and retaining customers.",
    },
    {
      icon: SearchIcon,
      label: "Product hunting & research",
      desc: "Our experts find profitable products and niches, ensuring you offer in-demand items that drive high sales and maximize your profit margins.",
    },
    {
      icon: NotepadText,
      label: "Product listings",
      desc: "We add and optimize products in your store, ensuring they are compelling and easily accessible to potential customers for higher conversions.",
    },
    {
      icon: Brain,
      label: "Marketing strategies",
      desc: "We implement effective marketing strategies, including influencer collaborations, to promote your store and products, driving significant traffic and sales.",
    },
    {
      icon: CarIcon,
      label: "Order fulfillment",
      desc: "Our team manages orders and fulfillment, ensuring timely and accurate delivery while maintaining high customer satisfaction and repeat business.",
    },
  ];
  const faqData = [
    {
      title: "What Are TikTok Shop Automation Services?",
      desc: "TikTok Shop Automation services manage your TikTok shop, handling everything from product sourcing and listings to order fulfillment and customer service, allowing you to earn passively.",
    },
    {
      title: "Why Should I Trust ecomasis For TikTok Shop Automation?",
      desc: "Our experienced team ensures your shop’s success with proven strategies and a strong track record in eCommerce. We prioritize transparency, reliability, and exceptional service.",
    },
    {
      title: "What’s The Onboarding Process Like? How Do I Get Started?",
      desc: "Getting started is simple. Schedule a call with us, discuss your needs, receive a customized plan, and we’ll handle the setup, marketing, and management.",
    },
    {
      title: "Is TikTok Shop Automation Legit?",
      desc: "Yes, reputable TikTok Shop Automation services like ours comply with platform rules and offer realistic, sustainable growth. We ensure ethical practices and effective operations.",
    },
    {
      title: "Are There Any Hidden Fees in TikTok Shop Automation?",
      desc: "There are no hidden fees. We provide clear, upfront costs so you always know what you’re paying for and can plan your investments confidently.",
    },
  ];
  TabName(" | Tiktok Shop Automation");
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-cover justify-center overflow-hidden">
      <div className="w-full min-h-screen relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-screen flex items-center">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col max-md:items-center max-md:text-center gap-3">
              <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl">
                Hop on the{" "}
                <span className="relative">
                  TikTok Shop
                  <svg
                    viewBox="0 0 290 150"
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
                Bandwagon with TikTok Shop Automation Service.
              </h1>
              <p className="bebas font-light text-gray-400 text-lg sm:text-xl xl:text-2xl max-lg:text-center tracking-wider mb-5">
                TikTok shop opens a doorway to unimaginable profits only if it's
                done the right way. Thinking how to do that?
              </p>
              <CTAButton title="Get Started" />
            </div>
            <div className="w-[300px] sm:w-[400px] h-auto mx-auto md:ml-auto">
              <FormBox />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen relative py-5">
        {/* Background Noise */}
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />

        {/* Background Image */}
        <div className="absolute scale-y-[-1] inset-0 bg-[url(/new/background.png)] bg-cover"></div>

        {/* Content Wrapper */}
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-screen flex flex-col gap-10 items-center">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
            The Undeniable{" "}
            <span className="relative">
              Benefits
              <svg
                viewBox="0 0 290 150"
                fill="none"
                className="absolute -left-2 -right-2 -top-4 bottom-0 translate-y-1"
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
            of TikTok Shop Automation.
          </h1>
          <InfoCols data={gridData} />
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
            Why You Need{" "}
            <span className="relative">
              TikTok
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
            Shop Automation?
          </h1>
          <InfoCols data={perksData} />
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] scale-y-[-1] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <div className="relative w-full h-full flex items-center text-center flex-col overflow-hidden mt-10">
            <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
              Changing the{" "}
              <span className="relative">
                lives
                <svg
                  viewBox="0 0 290 150"
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
              Of ecommerce sellers.
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
                <div
                  key={i}
                  className={`w-full h-64 px-3 rounded-b-full bg-secondary/20 flex flex-col items-center overflow-hidden ${
                    i === 0
                      ? "md:-rotate-10 mt-4"
                      : i === 1
                      ? ""
                      : "md:rotate-10 mt-4"
                  }`}
                >
                  <div className="flex flex-col gap-2 items-center relative py-4">
                    <h1 className="text-white font-bold text-3xl">
                      {item.title}
                    </h1>
                    <span className="text-secondary text-base">
                      {item.count} {item.prefix}
                    </span>
                    <span className="text-secondary text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative py-5">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full p-5 bg-secondary/10 rounded-xl">
              <div className="flex flex-col gap-4">
                <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl">
                  Our success lies in{" "}
                  <span className="relative">
                    YOUR
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
                  victory!.
                </h1>
                <span className="text-secondary text-lg">
                  Leverage our end-to-end Amazon FBA automation service today.
                </span>
                <div className="w-full h-[1px] bg-secondary" />
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">1.</span>
                    <span className="text-white">We set up your store</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">2.</span>
                    <span className="text-white">
                      We scale your Tiktok Shop
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">3.</span>
                    <span className="text-white">We ship your product</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">4.</span>
                    <span className="text-white">
                      We help you generate a stable passive income
                    </span>
                  </div>
                </div>
                <span className="text-secondary text-lg">
                  Choose our TikTok shop automation service, sit back, and relax
                  while we do the heavy lifting for you!
                </span>
                <CTAButton title="Get Started" />
              </div>
              <img
                src="/new/services/amazon-fba.jpg"
                alt="Person Image"
                className="w-full h-full rounded-xl object-cover max-md:hidden"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute scale-y-[-1] inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <div className="relative my-10 w-full p-3 bg-secondary/20 rounded-xl">
            <div className="absolute -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
            <img
              src="/new/noise.png"
              alt="Noise Image"
              className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full p-5 bg-secondary/10 rounded-xl">
              <img
                src="/new/services/Amazon-3rd-Fold.jpg"
                alt="Person Image"
                className="w-full h-full rounded-xl object-cover max-md:hidden"
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl">
                  A TikTok Shop{" "}
                  <span className="relative">
                    Automation
                    <svg
                      viewBox="0 0 290 150"
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
                  Service that Drives Excellent Profits
                </h1>
                <span className="text-secondary">
                  Maximize TikTok's explosive growth with ecomasis's expert
                  management and strategic TikTok automation, ensuring robust
                  sales and visibility for your store. ecomasis, a TikTok shop
                  private label service, manages marketing, order fulfillment,
                  and more, freeing you to focus on growth while enjoying
                  reliable passive income.
                  <br />
                  With over half a decade in ecommerce across multiple
                  platforms, ecomasis offers a dependable route to profitable
                  TikTok stores, backed by extensive industry experience and
                  success.
                </span>

                <h1 className="text-white font-extrabold text-xl md:text-2xl">
                  A TikTok Private Label Ads Agency Handling Everything From
                  Marketing Strategies to Order Fulfillment
                </h1>
                <span className="text-secondary">
                  Client-centric approach
                  <br />
                  <br />
                  At ecomasis, your success is our priority. We provide
                  transparent communication, detailed performance tracking, and
                  ongoing support to help you navigate and thrive in the dynamic
                  world of TikTok eCommerce. Ready to launch your profitable
                  TikTok store with ecomasis? Schedule a call with our team
                  today to explore how we can help you achieve your eCommerce
                  goals effortlessly with our TikTok private label and
                  automation service.
                </span>
                <CTAButton title="Get Started" />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
            Benefits of{" "}
            <span className="relative">
              TikTok
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
            Shop Automation with ecom automations hub
          </h1>
          <InfoCols data={benefitsData} />
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute scale-y-[-1] inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col mt-10">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
            Unlock your{" "}
            <span className="relative">
              business
              <svg
                viewBox="0 0 290 150"
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
            potential with Amazon FBA agency
          </h1>
          <div className="mt-5" />
          <div className="flex flex-col gap-2 mb-5">
            <span className="text-white font-semibold text-lg">
              Are you ready to turn your vision into a thriving business?
            </span>
            <span className="text-white">
              Take the first step towards success by sharing essential details
              about your venture with us. We're here to guide you through the
              journey.
            </span>
            <span className="text-white font-semibold text-lg">
              Help us get an idea of what business or idea is all about.
            </span>
          </div>
          <CTAButton title="Get Started" />
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
            Our TikTok{" "}
            <span className="relative">
              Shop
              <svg
                viewBox="0 0 290 150"
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
            automation services include
          </h1>
          <InfoCols data={servicesData} />
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute scale-y-[-1] inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col mt-10">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
            Frequently{" "}
            <span className="relative">
              asked
              <svg
                viewBox="0 0 290 150"
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
            questions
          </h1>
          <div className="mt-5" />
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-white font-medium text-lg">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-secondary text-base">
                  {item.desc}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MaxWidthWrapper>
      </div>
      <div className="relative min-h-screen w-full flex justify-center py-20 lg:py-10 overflow-hidden">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
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
                Ask an{" "}
                <span className="relative">
                  strategist
                  <svg
                    viewBox="0 0 286 73"
                    fill="none"
                    className="absolute -left-2 -right-2 -top-1 bottom-0 translate-y-1"
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
                </span>
              </motion.h1>
              <span className="text-white text-xl">
                Get the right guidance with an strategist by your side.
              </span>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <CTAButton title="Get Started" />
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
      </div>
    </section>
  );
};
