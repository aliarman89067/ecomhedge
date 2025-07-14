import { CTAButton } from "@/components/cta-button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ServicesHero } from "@/components/service/services-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Axis3dIcon,
  BoxIcon,
  Brain,
  CarIcon,
  CheckIcon,
  FileQuestionIcon,
  KeyIcon,
  LaptopIcon,
  NotepadText,
  PaperclipIcon,
  SearchIcon,
  ShieldUserIcon,
  ShoppingCartIcon,
  StoreIcon,
} from "lucide-react";

export const ShopifyDropshippingAutomation = () => {
  const perksData = [
    {
      href: "/services/tiktok/social.png",
      title: "Specifically-Tailored Solutions",
      desc: "We understand your requirements and draw up a customized Shopify automation strategy tailored to maximize your business’s efficiency and growth.",
    },
    {
      href: "/services/tiktok/video.png",
      title: "The Automation You Need",
      desc: "From design to shipping, we implement the automation processes your Shopify dropshipping private label needs to run smoothly.",
    },
    {
      href: "/services/tiktok/rocket.png",
      title: "Continuous Monitoring",
      desc: "We continuously monitor the performance of your private label on Shopify and make real-time adjustments to enhance efficiency and achieve optimal results.",
    },
    {
      href: "/services/tiktok/user.png",
      title: "Reporting and Improving",
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
  const stepsData = [
    "Efficient and hassle-free Shopify dropshipping store",
    "Sell only winning products",
    "Partner with the best and reliable suppliers",
    "Boosted revenues and profit margins!",
  ];
  const benefitsData = [
    {
      href: "/services/tiktok/sun.jpg",
      title: "Optimize for conversions",
      desc: "We help you deal with high ROI products, leading you to enjoy 15-25%+ profit margins with maximized conversions.",
    },
    {
      href: "/services/tiktok/laptop.jpg",
      title: "Streamlined fulfillment",
      desc: "Through our Shopify private label set up, you get a chance to partner with our exclusive suppliers, ensuring a smooth experience for you and your customers.",
    },
    {
      href: "/services/tiktok/ranking.jpg",
      title: "Passive cash flow",
      desc: "Scale your store to its fullest potential, creating a sustainable and passive cash flow with our proven strategies.",
    },
  ];
  const servicesData = [
    {
      icon: PaperclipIcon,
      title: "Initial setup",
      desc: "We setup and configure your Shopify store, customizing the design and settings to attract and retain customers, keeping in mind your vision and goals.",
    },
    {
      icon: ShoppingCartIcon,
      title: "Extensive research",
      desc: "Our expertise allows us to identify profitable products and niches through extensive research and analysis, guaranteeing a high ROI on your store.",
    },
    {
      icon: BoxIcon,
      title: "Optimizing listings",
      desc: "We help you add selected products, optimize listings, and make them available for customers, ensuring a seamless shopping experience.",
    },
    {
      icon: LaptopIcon,
      title: "Marketing strategies",
      desc: "Implement effective Shopify marketing automation strategies to ensure high visibility in a crowded market.",
    },
    {
      icon: FileQuestionIcon,
      title: "Order management",
      desc: "We ensure a smooth experience for both you and your customers with our efficient order management, transaction tracking, and overseeing product shipments.",
    },
    {
      icon: Axis3dIcon,
      title: "Reputation management",
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
        "What distinguishes EcomHike's Shopify Dropshipping Automation from other providers?",
      desc: "EcomHike specializes in comprehensive Shopify Dropshipping Automation that includes product research, store setup, marketing strategies, and order management. We emphasize quality service, prompt customer support, and a commitment to client success.",
    },
    {
      title:
        "How does the pricing model work for Shopify Dropshipping Automation?",
      desc: "Our pricing model for Shopify Dropshipping Automation is transparent and competitive. We charge a fee based on the services provided, including store setup, marketing campaigns, and ongoing support. This ensures clarity and aligns our interests with your business growth.",
    },
  ];
  return (
    <section className="flex flex-col w-full min-h-screen">
      {/* Hero */}
      <ServicesHero
        title={
          <h1 className="text-white text-3xl font-bold max-md:text-center">
            A Shopify Automation Agency{" "}
            <div className="inline-flex bg-black text-gold px-4 py-2 rounded-full">
              Simplifying
            </div>{" "}
            Profitable Dropshipping
          </h1>
        }
        desc="Running a Shopify ecommerce business was never this convenient!"
      />

      <div className="flex flex-col min-h-screen items-center justify-center py-10 px-2">
        <MaxWidthWrapper classNames="flex flex-col gap-10">
          <h1 className="text-charcoal font-bold text-2xl md:text-3xl text-center">
            Benefits of Automated Dropshipping on Shopify
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-charcoal group-hover:text-white text-lg md:text-xl font-semibold transition-all duration-150 ease-in-out">
                  Affordable Setup
                </h2>
                <img
                  src="/services/tiktok/laptop.png"
                  alt="Laptop"
                  className="w-9 md:w-16 h-9 md:h-16 object-contain"
                />
              </div>
              <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                Subscription, domain name, and some marketing budget are all you
                need to set up a Shopify ecommerce store. Steer clear of the
                stress of purchasing and managing an inventory.
              </p>
            </div>
            <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-charcoal group-hover:text-white text-lg md:text-xl font-semibold transition-all duration-150 ease-in-out">
                  Inventory-free Business
                </h2>
                <img
                  src="/services/tiktok/social.png"
                  alt="Laptop"
                  className="w-9 md:w-16 h-9 md:h-16 object-contain"
                />
              </div>
              <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                A dropshipping business frees you from the worries of managing
                inventory, tracking stock levels, or dealing with unsold
                products. This way you can easily focus on sales and marketing.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-lg font-semibold transition-all duration-150 ease-in-out">
                    Minimum Risk Setup
                  </h2>
                  <img
                    src="/services/tiktok/hands.png"
                    alt="Hands"
                    className="w-9 h-9  md:w-12 md:h-12 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  One of the best things about automated dropshipping through
                  Shopify is that it comes with a minimum financial risk factor.
                  Unsold inventory? Not a problem!
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-lg font-semibold transition-all duration-150 ease-in-out">
                    Product Variety
                  </h2>
                  <img
                    src="/services/tiktok/clock.png"
                    alt="Clock"
                    className="w-9 h-9  md:w-12 md:h-12 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  You can choose from a wide range of products in your store
                  without needing to invest in them upfront—you have the space
                  to test different products without financial risk.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-lg font-semibold transition-all duration-150 ease-in-out">
                    Scalability
                  </h2>
                  <img
                    src="/services/tiktok/bell.png"
                    alt="Bell"
                    className="w-9 h-9  md:w-12 md:h-12 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  With our private label dropshipping model on Shopify, you can
                  easily scale your business. You can save yourself from the
                  hassle of shipping or storing products. Your operations remain
                  manageable.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="flex flex-col min-h-screen items-center justify-center py-10 px-2">
        <MaxWidthWrapper classNames="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-charcoal text-2xl md:text-3xl font-bold">
              How We Do It at EcomHike?
            </h2>
            <div className="flex flex-col gap-4">
              {perksData.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <img
                    src={item.href}
                    alt="Image"
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-charcoal font-semibold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-charcoal text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <CTAButton />
          </div>
          <div className="relative max-md:hidden w-full h-[80%] rounded-xl overflow-hidden">
            <div className="absolute left-0 bottom-0 flex flex-col gap-2 bg-charcoal/60 backdrop-blur-lg w-fit px-10 py-6 rounded-lg">
              <CheckIcon className="size-10 text-white" />
              <p className="w-52 text-sm text-white">
                Achieved best seller status in your category!
              </p>
            </div>
            <img
              src="/services/shopify/shopify.jpg"
              alt="Person"
              className="w-full h-full object-cover"
            />
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative h-[80vh] md:h-[60vh] flex items-center justify-center">
        <div className="absolute flex flex-col items-center gap-10 px-2 z-20">
          <h2 className="text-white font-extralight text-2xl max-md:text-center md:text-3xl">
            Changing the lives Of ecommerce sellers
          </h2>
          <MaxWidthWrapper classNames="flex items-center justify-center flex-col md:flex-row gap-5 md:gap-20">
            {analyticsData.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col gap-3 max-md:items-center",
                  index === 1 && "items-center md:items-center",
                  index === 2 && "items-center md:items-end"
                )}
              >
                <h1 className="text-white font-bold text-2xl md:text-3xl">
                  {item.count}
                  {item.prefix}
                </h1>
                <span className="text-white text-base">{item.title}</span>
                <span
                  className={cn(
                    "text-white font-extralight max-md:text-center text-sm",
                    index === 1 && "text-center",
                    index === 2 && "text-right"
                  )}
                >
                  {item.desc}
                </span>
              </div>
            ))}
          </MaxWidthWrapper>
        </div>
        <div className="absolute z-10 top-0 left-0 h-full w-full bg-black/50 backdrop-blur-lg" />
        <video
          src="/overlay-video.mp4"
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
          loop
          autoPlay
          muted
        >
          <source src="/overlay-video.mp4" />
        </video>
      </div>
      <div className="w-full min-h-screen py-10 px-2">
        <MaxWidthWrapper classNames="py-10 h-full">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 overflow-hidden border border-charcoal rounded-lg h-full px-10 py-5 md:py-0 md:pl-10">
            <div className="flex flex-col gap-3 justify-center max-md:items-center">
              <h3 className="text-gold font-bold text-3xl">
                Our success lies in YOUR victory!
              </h3>
              <p className="text-charcoal text-base">
                Establish a profitable ecommerce business with our automated
                dropshipping model on Shopify.
              </p>
              <div className="h-[1px] w-full bg-gray-200" />
              <div className="flex flex-col gap-2">
                {stepsData.map((item, index) => (
                  <div className="flex gap-2">
                    <span className="font-semibold text-charcoal text-base">
                      {index + 1}
                    </span>
                    <span className="font-medium text-charcoal text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-charcoal text-base max-md:text-center">
                Choose EcomHike as your Shopify automation agency, sit back, and
                relax while we do the heavy lifting for you!
              </p>
              <CTAButton />
            </div>
            <img
              src="/services/shopify/shopify2.jpg"
              alt="Tik Tok"
              className="w-full h-full object-cover hidden md:flex"
            />
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen py-10 px-2">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 overflow-hidden h-full">
            <img
              src="/services/shopify/shopify3.jpg"
              alt="Tiktok 2"
              className="w-full h-[450px] object-cover rounded-lg"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-gold font-semibold text-2xl">
                Enjoy the Power of a Recession-proof and Profitable Shopify
                Private Label
              </h1>
              <p className="text-charcoal text-sm">
                EcomHike is one of the most reliable and trusted Shopify
                automation partners in town. Our team excels in setting up and
                managing recession-proof businesses on this platform, leveraging
                their unbounded experience and expertise. .
              </p>
              <p className="text-charcoal text-sm">
                Our team handling automated dropshipping models on Shopify has
                the skills to effectively analyze trends, identify in-demand
                products. From setting up to scaling of your Shopify store, we
                are the best at what we do!
              </p>
              <h2 className="text-gold font-semibold text-2xl">
                EcomHike, a Shopify Automation Agency, Helps Streamline and
                Scale Your Shopify Store
              </h2>
              <h3 className="text-charcoal font-semibold text-xl">
                Leverage the best of Shopify dropshipping like never before!
              </h3>
              <p className="text-charcoal text-sm">
                With a Shopify private label for dropshipping created by us, you
                don’t have to worry about any upfront inventory risks. We
                purchase inventory only after making sales.
                <br />
                We aim to help you create a valuable digital asset that grows
                continuously.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen flex items-center justify-center py-10 px-2">
        <MaxWidthWrapper classNames="flex flex-col gap-12 max-md:items-center">
          <h1 className="text-charcoal font-bold text-2xl md:text-3xl">
            Benefits of Automated Shopify Dropshipping with EcomHike
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {benefitsData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 max-md:items-center"
              >
                <img
                  src={item.href}
                  alt="Image"
                  className="w-12 h-12 object-contain"
                />
                <h2 className="text-charcoal font-bold text-xl">
                  {item.title}
                </h2>
                <h2 className="text-charcoal text-base max-md:text-center">
                  {item.desc}
                </h2>
              </div>
            ))}
          </div>
          <CTAButton />
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen py-10 px-2">
        <MaxWidthWrapper>
          <div className="flex flex-col gap-5 w-full">
            <h1 className="text-gold font-medium text-2xl md:text-3xl">
              Unlock your business potential with Amazon FBA agency
            </h1>
            <div className="h-3 w-full bg-charcoal" />
            <div className="mt-2 flex flex-col gap-3">
              <h2 className="text-charcoal font-semibold text-base">
                Are you ready to turn your vision into a thriving business?
              </h2>
              <p className="text-charcoal text-base">
                Take the first step towards success by sharing essential details
                about your venture with us. We're here to guide you through the
                journey.
              </p>
              <h2 className="text-charcoal font-semibold text-base">
                Help us get an idea of what business or idea is all about.
              </h2>
            </div>
            <CTAButton />
          </div>
          <div className="mt-14 flex flex-col gap-5 items-center">
            <h1 className="text-gold font-medium text-3xl">
              Our Shopify dropshipping automation services include
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-9 gap-y-7 w-full">
              {servicesData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 max-sm:items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-charcoal flex items-center justify-center">
                    <item.icon className="size-8 text-white" />
                  </div>
                  <h2 className="text-charcoal font-semibold text-xl">
                    {item.title}
                  </h2>
                  <p className="text-charcoal text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full h-auto py-10 px-2">
        <MaxWidthWrapper classNames="flex flex-col gap-4">
          <h1 className="text-charcoal font-semibold text-3xl">
            Frequently asked questions
          </h1>
          <div className="w-full h-3 bg-charcoal" />
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.desc}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MaxWidthWrapper>
      </div>
      <div className="relative w-full h-auto md:h-[90vh] py-5 bg-gold mt-12 flex items-center justify-center overflow-hidden">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-6 max-md:items-center max-md:text-center w-full">
              <h3 className="text-white text-xl font-extralight">Question?</h3>
              <div className="flex flex-col gap-2">
                <span className="text-white text-xl font-semibold">
                  Ask an strategist
                </span>
                <span className="text-gray-200 text-base">
                  Get the right guidance with an strategist by your side.
                </span>
              </div>
              <Button className="h-14 w-32">Get Started</Button>
            </div>
            <img
              src="/services/tiktok/contact-us.png"
              alt="Contact us"
              className="absolute -right-32 max-md:hidden md:w-[600px] object-contain"
            />
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};
