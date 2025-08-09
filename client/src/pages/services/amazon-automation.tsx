import { InfoCols } from "@/components/about/info-cols";
import { CTAButton } from "@/components/cta-button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Chart } from "@/components/service/chart";
import { FormBox } from "@/components/service/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TabName } from "@/lib/tab-name";
import { motion } from "framer-motion";
import {
  BoxIcon,
  BriefcaseIcon,
  ChartAreaIcon,
  ChartBarIcon,
  ChartColumnBigIcon,
  DollarSignIcon,
  LaptopIcon,
  Newspaper,
  RocketIcon,
  SendIcon,
  ShoppingCartIcon,
  StoreIcon,
  SunIcon,
  TagIcon,
  TruckIcon,
} from "lucide-react";
import { MouseParallax } from "react-just-parallax";

export const AmazonAutomation = () => {
  const gridData = [
    {
      label: "Reselling Established Brands",
      desc: "With our Amazon wholesale automation, you can purchase and resell well-known brands that already have established demand. This reduces the risk associated with launching new products since you’re selling items that customers are already searching for and purchasing.",
      icon: TagIcon,
    },
    {
      label: "Potential for High Sales Volume",
      desc: "The wholesale model our dedicated team of Amazon automation services builds is highly scalable. You can easily increase order quantities as your business grows, without needing to invest in new product lines or branding.",
      icon: ChartAreaIcon,
    },
    {
      label: "Buy Box Advantage",
      desc: "When you sell well-known brands and maintain competitive pricing and good seller metrics, you increase your chances of winning the Buy Box. The Buy Box is where the majority of sales happen, making it crucial for maximizing revenue.",
      icon: BoxIcon,
    },
    {
      label: "Fulfillment by Amazon (FBA)",
      desc: "Using our Amazon FBA automation services allows you to outsource warehousing, packing, and shipping. This not only saves time and reduces overhead costs but also makes your products eligible for premium services, which can significantly boost sales.",
      icon: TruckIcon,
    },
    {
      label: "Organic Sales",
      desc: "Popular branded products typically have strong organic search visibility on the platform, meaning customers are likely to find and purchase your products without significant advertising.",
      icon: ChartBarIcon,
    },
  ];
  const perksData = [
    {
      icon: BriefcaseIcon,
      label: "The initial setup",
      desc: "Offering the best Amazon FBA automation services, we help you establish an LLC, get an EIN, and set up a W9 to ensure your business is compliant from the start.",
    },
    {
      icon: DollarSignIcon,
      label: "Building an e-commerce store",
      desc: "We build your e-commerce store and help set up products with our Amazon automation services, preparing your store for launch.",
    },
    {
      icon: StoreIcon,
      label: "Seamless management",
      desc: "Our Amazon FBA automation experts handle orders, manage inventory, and oversee fulfillment through our warehouse for 12 months, ensuring smooth operations.",
    },
    {
      icon: RocketIcon,
      label: "Boosted sales",
      desc: "From analyzing competitors, securing wholesaler status to listing unlimited items and implementing strategies to win the 'Buy Box' for 15-25% profit—we do it all!",
    },
  ];
  const analyticsData = [
    {
      count: "100",
      prefix: "+",
      title: "Active Sellers",
      desc: "Empowering over 700+ active sellers to thrive in ecommerce.",
    },
    {
      count: "85,000",
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
      label: "Optimize your inventory",
      desc: "We streamline stock levels, minimize overstocking, and ensure timely replenishments to meet demand, ultimately boosting profitability and customer satisfaction.",
    },
    {
      icon: StoreIcon,
      label: "Superior store management",
      desc: "Our method employs discreet packaging and valid tracking, ensuring compliance and security. We meticulously monitor inventory and pricing, mitigating risks and maximizing cost-efficiency.",
    },
    {
      icon: ChartColumnBigIcon,
      label: "Maximum efficiency",
      desc: "Experience faster transactions, improved operational efficiency, and heightened customer satisfaction. Trust us to optimize your store operations effortlessly for increased sales and success.",
    },
  ];
  const servicesData = [
    {
      icon: Newspaper,
      label: "Product listing management",
      desc: "We conduct thorough research on high-demand products and collaborate with suppliers to list inventory items in your platform’s account.",
    },
    {
      icon: ShoppingCartIcon,
      label: "Product and stock management",
      desc: "Our store experts vigilantly monitor stock levels and pricing across your inventory using advanced automation tools.",
    },
    {
      icon: BoxIcon,
      label: "Order management",
      desc: "Our dedicated team and automated system promptly process new orders, ensuring efficient fulfillment by promptly notifying suppliers.",
    },
    {
      icon: LaptopIcon,
      label: "Account monitoring",
      desc: "Our team monitors the store account for issues such as policy violations and A-Z claims to maintain its health.",
    },
    {
      icon: SendIcon,
      label: "Customer service",
      desc: "We provide comprehensive customer support via email, phone, and our CRM system, offering quick resolutions to ensure customer satisfaction.",
    },
    {
      icon: ChartColumnBigIcon,
      label: "Growth and scale",
      desc: "We collaborate with you over time to strategize and scale your seller account continuously, aiming for sustained growth and expansion.",
    },
  ];
  const faqData = [
    {
      title: "What are automation services?",
      desc: "Ecom Automations Hub automates every aspect of your online store, from product sourcing and listings to inventory, order processing, and customer support, using proprietary tools to scale your business and boost profitability.",
    },
    {
      title: "Why should i trust your company for storefront automation?",
      desc: "We are a trusted team of eCommerce experts committed to accelerating your business growth through proven automation strategies. With a transparent, one-time fee and no large upfront costs, we focus on delivering measurable results and ensuring your long-term success. Your business’s growth is our priority, and we’re here to support you every step of the way.",
    },
    {
      title: "What's the onboarding process like? how do i get started?",
      desc: "Getting started is simple. Contact us to discuss your SKUs and inventory needs, receive a tailored quote, and connect with our dedicated account managers. No automated responses; we handle everything from listings to order fulfillment. Schedule a call today to begin.",
    },
    {
      title: "Are there any hidden fees in automation?",
      desc: "With Ecom Automations Hub, there are no hidden fees. We prioritize transparency, offering clear, upfront pricing for all our services, so you always know exactly what you're paying for.",
    },
  ];
  TabName(" | Amazon FBA Automation");
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
                Amazon FBA Automation Service{" "}
                <span className="relative">
                  That Leads
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
                You To High Profits Go.
              </h1>
              <p className="bebas font-light text-gray-400 text-lg sm:text-xl xl:text-2xl max-lg:text-center tracking-wider mb-5">
                What if there was a way to enjoy the benefits of a fully
                automated FBA store, without you having to stress over the
                complexities?
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
            Wholesale Benefits with Ecom{" "}
            <span className="relative">
              Automations
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
            Hub's Amazon FBA Automation Service.
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
            How We Do It at{" "}
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
            Automations Hub?
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
              An Amazon automation{" "}
              <span className="relative">
                company
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
              changing the lives of ecommerce sellers.
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
                    <span className="text-white">We build your store</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">2.</span>
                    <span className="text-white">We source your product</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">3.</span>
                    <span className="text-white">We ship your product.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">4.</span>
                    <span className="text-white">
                      We help you generate profits!
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
                  How Our Amazon FBA{" "}
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
                  Service Drives Success?
                </h1>
                <span className="text-secondary">
                  Ecom Automations Hub pioneers a transformative online business
                  program, setting benchmarks in the industry. Our mission is to
                  foster and elevate the next generation of agencies. We, as an
                  Amazon FBA company, challenge outdated business practices,
                  aiming to triple your revenue. Whether you're a novice or
                  seasoned entrepreneur, our proven formula ensures profitable
                  growth. We empower 5-figure agencies to scale effortlessly
                  into 6 and 7-figures.
                </span>

                <h1 className="text-white font-extrabold text-xl md:text-2xl">
                  Streamline Your Operations with Ecom Automations Hub As Your
                  Amazon FBA Company!
                </h1>
                <span className="text-secondary">
                  Optimize your inventory and sales with our automation tools
                  <br />
                  <br />
                  At Ecom Automations Hub, we focus on your business’s
                  operational efficiency to drive sales growth. Whether you
                  operate with FBA, FBM, or PL, we manage listings, orders,
                  product sourcing, and inventory with utmost finesse. With
                  state-of-the-art automation tools, your store operates
                  seamlessly around the clock, ensuring continuous performance.
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
              launching
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
            automation with Ecom Automations Hub
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
            Our Amazon FBA{" "}
            <span className="relative">
              automation
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
            services include
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
