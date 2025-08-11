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
  BoxesIcon,
  BrainIcon,
  BriefcaseIcon,
  ChartAreaIcon,
  ChartBarIcon,
  ChartNetworkIcon,
  DollarSignIcon,
  GemIcon,
  LaptopIcon,
  NotepadText,
  PaperclipIcon,
  ParkingMeterIcon,
  ScaleIcon,
  ShoppingBagIcon,
  StoreIcon,
  SunIcon,
} from "lucide-react";
import { FormBox } from "@/components/service/form";
import { InfoCols } from "@/components/about/info-cols";
import { MouseParallax } from "react-just-parallax";
import { useContext } from "react";
import { FormContext } from "@/context/form-context";

export const ShopifyDropshippingAutomation = () => {
  const { setIsOpen } = useContext(FormContext);
  const gridData = [
    {
      icon: DollarSignIcon,
      label: "Affordable Setup",
      desc: "Subscription, domain name, and some marketing budget are all you need to set up a Shopify ecommerce store. Steer clear of the stress of purchasing and managing an inventory.",
    },
    {
      icon: BoxesIcon,
      label: "Inventory-free Business",
      desc: "A dropshipping business frees you from the worries of managing inventory, tracking stock levels, or dealing with unsold products. This way you can easily focus on sales and marketing.",
    },
    {
      icon: ParkingMeterIcon,
      label: "Minimum Risk Setup",
      desc: "One of the best things about automated dropshipping through Shopify is that it comes with a minimum financial risk factor. Unsold inventory? Not a problem!",
    },
    {
      icon: BriefcaseIcon,
      label: "Product Variety",
      desc: "You can choose from a wide range of products in your store without needing to invest in them upfront—you have the space to test different products without financial risk.",
    },
    {
      icon: ScaleIcon,
      label: "Scalability",
      desc: "With our private label dropshipping model on Shopify, you can easily scale your business. You can save yourself from the hassle of shipping or storing products. Your operations remain manageable.",
    },
  ];
  const perksData = [
    {
      icon: PaperclipIcon,
      label: "Specifically-Tailored Solutions",
      desc: "We understand your requirements and draw up a customized Shopify automation strategy tailored to maximize your business’s efficiency and growth.",
    },
    {
      icon: StoreIcon,
      label: "The Automation You Need",
      desc: "From design to shipping, we implement the automation processes your Shopify dropshipping private label needs to run smoothly.",
    },
    {
      icon: LaptopIcon,
      label: "Continuous Monitoring",
      desc: "We continuously monitor the performance of your private label on Shopify and make real-time adjustments to enhance efficiency and achieve optimal results.",
    },
    {
      icon: ChartAreaIcon,
      label: "Reporting and Improving",
      desc: "Keep a close eye on your business’s performance with clear, concise reports that we provide you, showing a roadmap for future scaling to drive sales and boost performance.",
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
      label: "Optimize for conversions",
      desc: "We help you deal with high ROI products, leading you to enjoy 15-25%+ profit margins with maximized conversions.",
    },
    {
      icon: LaptopIcon,
      label: "Streamlined fulfillment",
      desc: "Through our Shopify private label set up, you get a chance to partner with our exclusive suppliers, ensuring a smooth experience for you and your customers.",
    },
    {
      icon: ChartBarIcon,
      label: "Passive cash flow",
      desc: "Scale your store to its fullest potential, creating a sustainable and passive cash flow with our proven strategies.",
    },
  ];
  const servicesData = [
    {
      icon: StoreIcon,
      label: "Initial setup",
      desc: "We setup and configure your Shopify store, customizing the design and settings to attract and retain customers, keeping in mind your vision and goals.",
    },
    {
      icon: GemIcon,
      label: "Extensive research",
      desc: "Our expertise allows us to identify profitable products and niches through extensive research and analysis, guaranteeing a high ROI on your store.",
    },
    {
      icon: NotepadText,
      label: "Optimizing listings",
      desc: "We help you add selected products, optimize listings, and make them available for customers, ensuring a seamless shopping experience.",
    },
    {
      icon: BrainIcon,
      label: "Marketing strategies",
      desc: "Implement effective Shopify marketing automation strategies to ensure high visibility in a crowded market.",
    },
    {
      icon: ShoppingBagIcon,
      label: "Order management",
      desc: "We ensure a smooth experience for both you and your customers with our efficient order management, transaction tracking, and overseeing product shipments.",
    },
    {
      icon: ChartNetworkIcon,
      label: "Reputation management",
      desc: "Ensuring your store’s reputation remains unhurt through effective management of reviews, customer feedback, and offering reliable customer service to enhance trust and loyalty.",
    },
  ];
  const faqData = [
    {
      title: "What does Shopify Dropshipping Automation involve?",
      desc: "Shopify Dropshipping Automation involves setting up and managing a Shopify store where products are sourced from suppliers and shipped directly to customers. This service automates product listing, order processing, and fulfillment, reducing manual intervention",
    },
    {
      title: "How can Shopify Dropshipping Automation benefit my business?",
      desc: "By utilizing Shopify Dropshipping Automation, you can launch an e-commerce store quickly with minimal upfront investment. This service allows you to focus on marketing and scaling your business while outsourcing inventory management and logistics to third-party suppliers.",
    },
    {
      title: "Is Shopify Dropshipping Automation suitable for beginners?",
      desc: "Yes, Shopify Dropshipping Automation is ideal for both beginners and experienced but for beginners in e-commerce who want to start a business without handling inventory or logistics. It provides a low-risk entry into the market, allowing entrepreneurs to test product ideas and market demand efficiently.",
    },
    {
      title:
        "What distinguishes Ecom Automations Hub's Shopify Dropshipping Automation from other providers?",
      desc: "Ecom Automations Hub specializes in comprehensive Shopify Dropshipping Automation that includes product research, store setup, marketing strategies, and order management. We emphasize quality service, prompt customer support, and a commitment to client success.",
    },
    {
      title:
        "How does the pricing model work for Shopify Dropshipping Automation?",
      desc: "Our pricing model for Shopify Dropshipping Automation is transparent and competitive. We charge a fee based on the services provided, including store setup, marketing campaigns, and ongoing support. This ensures clarity and aligns our interests with your business growth.",
    },
  ];
  TabName(" | Shopify Dropshipping Automation");
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-cover justify-center overflow-hidden">
      <div className="w-full min-h-screen relative py-20">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-screen flex items-center">
          <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col max-md:items-center max-md:text-center gap-3">
              <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl">
                A Shopify Automation Agency{" "}
                <span className="relative">
                  Simplifying
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
                Profitable Dropshipping.
              </h1>
              <p className="bebas font-light text-gray-400 text-lg sm:text-xl xl:text-2xl max-lg:text-center tracking-wider mb-5">
                Running a Shopify ecommerce business was never this convenient!
              </p>
              <CTAButton title="Get Started" onClick={() => setIsOpen(true)} />
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
            Benefits of Automated{" "}
            <span className="relative">
              Dropshipping
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
            on Shopify.
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
                  Establish a profitable ecommerce business with our automated
                  dropshipping model on Shopify.
                </span>
                <div className="w-full h-[1px] bg-secondary" />
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">1.</span>
                    <span className="text-white">
                      Efficient and hassle-free Shopify dropshipping store
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">2.</span>
                    <span className="text-white">
                      Sell only winning products
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">3.</span>
                    <span className="text-white">
                      Partner with the best and reliable suppliers
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
                <CTAButton
                  title="Get Started"
                  onClick={() => setIsOpen(true)}
                />
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
                src="/new/services/shopify3.jpg"
                alt="Person Image"
                className="w-full h-full rounded-xl object-cover max-md:hidden"
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl">
                  Enjoy the Power of a{" "}
                  <span className="relative">
                    Recession-proof
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
                  and Profitable Shopify Private Label
                </h1>
                <span className="text-secondary">
                  Ecom Automations Hub is one of the most reliable and trusted
                  Shopify automation partners in town. Our team excels in
                  setting up and managing recession-proof businesses on this
                  platform, leveraging their unbounded experience and expertise.
                  . Our team handling automated dropshipping models on Shopify
                  has the skills to effectively analyze trends, identify
                  in-demand products. From setting up to scaling of your Shopify
                  store, we are the best at what we do!
                </span>
                <h1 className="text-white font-extrabold text-xl md:text-2xl">
                  Ecom Automations Hub, a Shopify Automation Agency, Helps
                  Streamline and Scale Your Shopify Store
                </h1>
                <span className="text-secondary">
                  Leverage the best of Shopify dropshipping like never before!
                  <br />
                  <br />
                  With a Shopify private label for dropshipping created by us,
                  you don’t have to worry about any upfront inventory risks. We
                  purchase inventory only after making sales. We aim to help you
                  create a valuable digital asset that grows continuously.
                </span>
                <CTAButton
                  title="Get Started"
                  onClick={() => setIsOpen(true)}
                />
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
            Benefits of Automated{" "}
            <span className="relative">
              Shopify
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
            Dropshipping with Ecom Automations Hub
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
          <CTAButton title="Get Started" onClick={() => setIsOpen(true)} />
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
            Our Shopify{" "}
            <span className="relative">
              dropshipping
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
                <CTAButton
                  title="Get Started"
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
      </div>
    </section>
  );
};
