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
  ArrowLeftRightIcon,
  BadgeIcon,
  BuildingIcon,
  CalendarSearchIcon,
  CarIcon,
  EarthIcon,
  GemIcon,
  HandCoins,
  HandIcon,
  MessagesSquareIcon,
  MonitorIcon,
  NewspaperIcon,
  PencilRulerIcon,
  SparklesIcon,
  SunIcon,
  TagIcon,
  TrophyIcon,
} from "lucide-react";
import { FormBox } from "@/components/service/form";
import { Chart } from "@/components/service/chart";
import { InfoCols } from "@/components/about/info-cols";
import { MouseParallax } from "react-just-parallax";

export const AmazonPrivateLabel = () => {
  const gridData = [
    {
      label: "A Standout Brand Identity",
      desc: "With our Amazon FBA label service, you get full control over your brand’s identity, including the product name, logo, packaging, and overall brand messaging. This helps differentiate your products from competitors and build strong and unique brand recognition.",
      icon: BadgeIcon,
    },
    {
      label: "Set Your Own Prices",
      desc: "Since you own the brand, you can control the prices without being undercut by competitors selling the same product. This allows for better revenue and profitability strategizing.",
      icon: TagIcon,
    },
    {
      label: "A Vast Network of Loyal Customers",
      desc: "By creating a strong brand with our Amazon private label services, you can build customer loyalty, leading to repeat purchases—invaluable for long-term business growth.",
      icon: HandIcon,
    },
    {
      label: "Asset Building",
      desc: "We as a reliable Amazon private label agency help set up successful private label brand, turning it into an invaluable asset, with the potential to be sold in the future or expanded into other sales channels.",
      icon: BuildingIcon,
    },
    {
      label: "Global Selling Opportunities",
      desc: "Once your brand is successful in one market, you can expand to other marketplaces around the world, reaching a global audience and growing your brand internationally.",
      icon: EarthIcon,
    },
  ];
  const perksData = [
    {
      icon: SparklesIcon,
      label: "Brand Freedom",
      desc: "Forget about platform brand restrictions. Our Amazon private label services can unleash your creativity and establish a distinctive brand identity that sets your product apart from the competition.",
    },
    {
      icon: CalendarSearchIcon,
      label: "Quality control",
      desc: "Ecom Automations Hub’s FBA label service for Amazon empowers you to select premium materials and ingredients, ensuring your offerings exceed customer expectations and outshine competitors.",
    },
    {
      icon: ArrowLeftRightIcon,
      label: "Profitability flexibility",
      desc: "Set your own prices and gain a competitive edge in the market. With Ecom Automations Hub, you can swiftly adjust prices to capitalize on market opportunities, maximizing your revenue potential.",
    },
    {
      icon: HandCoins,
      label: "Reduced competition",
      desc: "Dive into a less saturated market with Ecom Automations Hub's FBA label service. Create unique, niche products that resonate with customers, unlocking new market segments and boosting your sales potential.",
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
      label: "Strategic product selection",
      desc: "Ecom Automations Hub excels in guiding you through the intricate process of product selection for your Amazon private label. We conduct thorough market research to identify niche opportunities with low competition, ensuring your products stand out.",
    },
    {
      icon: TrophyIcon,
      label: "Comprehensive brand development",
      desc: "Ecom Automations Hub provides comprehensive support in creating a distinctive brand identity that resonates with your target audience. From logo design to packaging strategies, we ensure every aspect reflects your brand's values and enhances customer trust.",
    },
    {
      icon: SparklesIcon,
      label: "Optimized marketing strategies",
      desc: "Ecom Automations Hub leverages advanced SEO techniques, PPC campaigns, and social media integration to maximize your store's exposure. We formulate tailored marketing plans that attract organic traffic and convert visitors into loyal customers.",
    },
  ];
  const servicesData = [
    {
      icon: GemIcon,
      label: "Product research and sourcing",
      desc: "We conduct in-depth market research and negotiate with suppliers to secure high-quality materials at competitive prices, ensuring profitable product selections.",
    },
    {
      icon: PencilRulerIcon,
      label: "Brand identity and design development",
      desc: "Crafting a cohesive brand identity through logo creation, packaging design, and compelling visuals that enhance visibility and trust among consumers.",
    },
    {
      icon: NewspaperIcon,
      label: "Listing optimization and launch strategy",
      desc: "Optimizing product listings with SEO techniques, persuasive content, and strategic launch plans to drive initial sales and visibility on the platform.",
    },
    {
      icon: CarIcon,
      label: "Inventory management and fulfillment",
      desc: "Efficiently managing inventory levels and partnering with reliable fulfillment centers to streamline shipping and deliver exceptional customer experiences.",
    },
    {
      icon: MonitorIcon,
      label: "Performance monitoring and optimization",
      desc: "Using advanced analytics to track key metrics, conduct A/B testing, and optimize listings and marketing strategies for sustained growth and competitiveness.",
    },
    {
      icon: MessagesSquareIcon,
      label: "Ongoing support and strategic guidance",
      desc: "Providing personalized consultation and strategic advice to navigate challenges, capitalize on opportunities, and achieve long-term success.",
    },
  ];
  const faqData = [
    {
      title:
        "What is amazon private labeling, and how can Ecom Automations Hub help?",
      desc: "Ecom Automations Hub specializes in Amazon Private Labeling, where we assist sellers in creating and selling their own branded products on platform. We manage everything from product sourcing and branding to listing optimization and sales strategies, ensuring your products stand out in the marketplace.",
    },
    {
      title:
        "How does private labeling benefit my business compared to selling existing products?",
      desc: "Private labeling allows you to establish a unique brand identity, free from platform brand restrictions. You gain full control over product quality, pricing, and customer perception, leading to higher profit margins and long-term brand equity.",
    },
    {
      title:
        "What types of products are suitable for amazon private labeling with Ecom Automations Hub?",
      desc: "We recommend products that offer a balance of low competition and high demand. Our experts conduct thorough market research to identify profitable niches and product categories, ensuring your private label products have the best chance of success.",
    },
    {
      title:
        "How long does it take to launch a private label product on platform with Ecom Automations Hub?",
      desc: "The timeline varies depending on product complexity and market readiness. Typically, our streamlined process allows for efficient product development, listing creation, and marketing strategy implementation, aiming to launch your product as swiftly as possible while ensuring quality and compliance.",
    },
    {
      title:
        "What support does Ecom Automations Hub provide after launching my amazon private label product?",
      desc: "Beyond product launch, Ecom Automations Hub offers ongoing support including inventory management, sales optimization, and marketing strategies. We monitor market trends, adjust strategies as needed, and provide insights to help maximize your product's success and profitability on platform.",
    },
  ];
  TabName(" | Amazon Private Label");
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
                Amazon FBA Label Service That{" "}
                <span className="relative">
                  Takes The Hassle
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
                Out of The Process.
              </h1>
              <p className="bebas font-light text-gray-400 text-lg sm:text-xl xl:text-2xl max-lg:text-center tracking-wider mb-5">
                Think starting your own business will drill a hole in your
                pocket? Not on our watch!
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
            The Many Ways You Can{" "}
            <span className="relative">
              Benefit
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
            from an Amazon Private Label.
          </h1>
          <Chart data={gridData} />
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
            How Ecom Automations Hub, as an{" "}
            <span className="relative">
              Amazon
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
            private label agency, helps you
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
              Changing the lives of{" "}
              <span className="relative">
                ecommerce
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
              sellers.
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
                  Transform top-selling products into scalable assets for
                  long-term success with a strong private label on Amazon FBA.
                </span>
                <div className="w-full h-[1px] bg-secondary" />
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">1.</span>
                    <span className="text-white">Unbounded brand freedom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">2.</span>
                    <span className="text-white">Countless opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">3.</span>
                    <span className="text-white">
                      Flexibility of customization of products
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">4.</span>
                    <span className="text-white">
                      Boosted revenues and profit margins!
                    </span>
                  </div>
                </div>
                <span className="text-secondary text-lg">
                  Choose Ecom Automations Hub as your Amazon FBA company, sit
                  back, and relax while we do the heavy lifting for you!
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
                  How an Amazon FBA{" "}
                  <span className="relative">
                    Private
                    <svg
                      viewBox="0 0 290 150"
                      fill="none"
                      className="absolute -left-2 -right-2 -top-0 bottom-0 translate-y-1"
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
                  Label Agency Driving Success for All
                </h1>
                <span className="text-secondary">
                  Ecom Automations Hub propels businesses forward with
                  meticulously crafted strategies for Amazon white label setups.
                  We delve deep into market analysis, identifying growth
                  opportunities and devising strategic plans that align with
                  your business goals. By leveraging our expertise in market
                  trends and consumer behavior, we ensure your business stays
                  ahead of the curve. Our client-centric approach means we
                  tailor our solutions to meet your unique needs. Whether it's
                  optimizing the operational efficiency of an Amazon private
                  label, enhancing customer experience, or driving sales, we're
                  committed to exceeding your expectations. With proactive
                  communication and a focus on collaboration, we forge lasting
                  partnerships built on trust and mutual success.
                </span>

                <h1 className="text-white font-extrabold text-xl md:text-2xl">
                  Transform Your Vision into Reality with Ecom Automations Hub’s
                  Amazon Private Label Services
                </h1>
                <span className="text-secondary">
                  Leverage our state-of-the-art tools to efficiently manage your
                  Amazon private label.
                  <br />
                  <br />
                  Our success stories speak volumes. Over the years, Ecom
                  Automations Hub has empowered numerous Entrepreneurs and
                  businesses to achieve remarkable growth and profitability
                  through its private labeling on Amazon. Through data-driven
                  insights and innovative solutions, we navigate challenges,
                  capitalize on opportunities, and deliver sustainable results.
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
            Benefits of choosing Ecom{" "}
            <span className="relative">
              Automations
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
            Hub’s Amazon FBA label service
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
            potential
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
            Our Amazon FBA{" "}
            <span className="relative">
              Label
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
            service includes
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
