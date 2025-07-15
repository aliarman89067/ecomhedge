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
import { TabName } from "@/lib/tab-name";
import { cn } from "@/lib/utils";
import {
  BoxIcon,
  ChartColumnBigIcon,
  GemIcon,
  MessageCircleIcon,
  MessagesSquareIcon,
  ShieldIcon,
  SquircleDashedIcon,
} from "lucide-react";

export const WalmartAutomation = () => {
  const perksData = [
    {
      href: "/services/walmart/circle.png",
      title: "Tapping Into the Power of Walmart’s Customer Base",
      desc: "How amazing it would be if you could tap into the millions of loyal Walmart customers? We at ecomasis will help you enhance your store's visibility and drive more traffic by efficiently targeting these customers.",
    },
    {
      href: "/services/walmart/shop.png",
      title: "Easy Expansion of Your Market",
      desc: "Expand effortlessly with ecomasis Walmart automation. Focus on your core business while we handle marketing, sales, and customer service, ensuring a smooth market expansion.",
    },
    {
      href: "/services/walmart/hand.png",
      title: "Efficient Business Management",
      desc: "Experience hassle-free store management with ecomasis’s expertise, allowing you to enjoy seamless operations and focus on strategic growth without day-to-day oversight.",
    },
    {
      href: "/services/walmart/moneyBag.png",
      title: "Guaranteed Passive Income",
      desc: "ecomasis manages your store efficiently, enabling you to enjoy steady revenue streams with minimal involvement.",
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
  const stepsData = [
    "We help expand your market",
    "We help boost sales",
    "We help you generate passive income with super satisfying profit margins",
  ];
  const benefitsData = [
    {
      href: "/services/tiktok/sun.jpg",
      title: "Expertise and experience",
      desc: "Leverage our team’s extensive knowledge of Walmart store management and automation to optimize your stores for boosted sales and unparalleled customer satisfaction.",
    },
    {
      href: "/services/tiktok/laptop.jpg",
      title: "End-to-end solutions",
      desc: "We at ecomasis proudly offer comprehensive automation services, covering not just inventory management, listing optimization, and order processing but also customer service that is tailored to your business's unique requirements.",
    },
    {
      href: "/services/tiktok/ranking.jpg",
      title: "Performance-driven profits",
      desc: "Our pricing model ties our success to yours, charging a small percentage of net profits monthly. This ensures our incentives are aligned with your growth and success.",
    },
  ];
  const servicesData = [
    {
      icon: SquircleDashedIcon,
      title: "Setting up Walmart Seller Central",
      desc: "Through our Walmart private label management service, we ensure the smooth setup of your Walmart Seller Central account, ensuring all details are configured and optimized to perfection. From registering your business to integrating payment methods, we ensure your storefront is ready for seamless operations.",
    },
    {
      icon: GemIcon,
      title: "Product research and listing",
      desc: "Thorough market research is a key component of our Walmart automation service through which we identify high-demand products for your Walmart store. We then optimize product listings with compelling descriptions, high-quality images, and strategic keywords to enhance visibility and attract more customers.",
    },
    {
      icon: BoxIcon,
      title: "Inventory management",
      desc: "Efficient inventory management is crucial for maximizing sales and minimizing costs. We implement advanced tools and strategies to monitor stock levels, streamline replenishment processes, and ensure optimal inventory turnover to meet customer demands effectively.",
    },
    {
      icon: ChartColumnBigIcon,
      title: "Generate sales",
      desc: "Driving sales is at the core of our Walmart Automation services. Through targeted marketing campaigns, SEO optimization, and strategic pricing strategies, we aim to increase your store's visibility and attract qualified traffic that converts into sales.",
    },
    {
      icon: MessagesSquareIcon,
      title: "Order fulfillment",
      desc: "We manage the entire order fulfillment process, from receiving customer orders to coordinating with suppliers or using third-party logistics partners. Our goal is to ensure timely delivery and customer satisfaction while optimizing shipping costs and logistics.",
    },
    {
      icon: MessageCircleIcon,
      title: "Customer support & management",
      desc: "Customer satisfaction is paramount in eCommerce. Our dedicated support team handles inquiries, resolves issues promptly, and provides exceptional customer service. We manage returns, refunds, and exchanges efficiently to maintain positive customer relationships and enhance your store's reputation.",
    },
  ];
  const faqData = [
    {
      title: "What exactly does Walmart Automation entail?",
      desc: "Walmart Automation is a comprehensive service where we manage all aspects of your Walmart storefront. From initial setup and product listing to order fulfillment and customer service, we handle everything to ensure your store runs smoothly and profitably.",
    },
    {
      title: "How can Walmart Automation benefit my business?",
      desc: "By leveraging Walmart Automation, you can focus more on strategic business decisions while we take care of the operational aspects. This service not only saves you time but also enhances efficiency, increases sales potential, and provides access to Walmart's vast customer base.",
    },
    {
      title:
        "Is Walmart Automation suitable for new sellers or existing businesses?",
      desc: "Walmart Automation is suitable for both new sellers looking to enter the e-commerce space and existing businesses seeking to expand their online presence. Our services are tailored to meet the needs of sellers at various stages of their e-commerce journey.",
    },
    {
      title:
        "What sets ecomasis's Walmart Automation apart from other providers?",
      desc: "ecomasis offers a unique blend of expertise, scalability, and flexibility. We employ advanced automation tools and strategies to optimize your storefront and maximize profitability. Our flexible payment options and commitment to client success differentiate us from other service providers.",
    },
    {
      title: "How does the pricing structure work for Walmart Automation?",
      desc: "Our pricing structure is designed to align with your success. We typically charge a percentage of the net profits generated from your Walmart storefront each month. This performance-based model ensures that our incentives are aligned with your business growth and profitability.",
    },
  ];
  TabName();
  return (
    <section className="flex flex-col w-full min-h-screen">
      {/* Hero */}
      <ServicesHero
        title={
          <h1 className="text-white text-3xl font-bold max-md:text-center">
            ecomasis: The Most{" "}
            <div className="inline-flex bg-black text-gold px-4 py-2 rounded-full">
              Trusted Walmart
            </div>{" "}
            Automation Services
          </h1>
        }
        desc="Want to start selling on one of the world’s largest retailers—Walmart Marketplace? You’re at the right spot."
      />

      <div className="flex flex-col min-h-screen items-center justify-center py-10 px-2">
        <MaxWidthWrapper classNames="flex flex-col gap-10">
          <h1 className="text-charcoal font-bold text-2xl md:text-3xl text-center">
            Benefits of a Walmart Private Label
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-charcoal group-hover:text-white text-lg md:text-xl font-semibold transition-all duration-150 ease-in-out">
                  Unbounded Reach
                </h2>
                <img
                  src="/services/walmart/world.png"
                  alt="Laptop"
                  className="w-9 md:w-16 h-9 md:h-16 object-contain"
                />
              </div>
              <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                Being one of the most prominent and widely chosen retailers in
                the world, this is no surprise that sellers here enjoy a massive
                reach.
              </p>
            </div>
            <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-charcoal group-hover:text-white text-lg md:text-xl font-semibold transition-all duration-150 ease-in-out">
                  Unsaturated Marketplace
                </h2>
                <img
                  src="/services/walmart/rocket.png"
                  alt="Laptop"
                  className="w-9 md:w-16 h-9 md:h-16 object-contain"
                />
              </div>
              <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                As surprising as it may be, in some categories, you will find
                little to no competition in the Walmart Marketplace, opening a
                doorway to high revenue and profits.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-lg font-semibold transition-all duration-150 ease-in-out">
                    Countless Opportunities
                  </h2>
                  <img
                    src="/services/walmart/networks.png"
                    alt="Hands"
                    className="w-9 h-9  md:w-12 md:h-12 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  Walmart omni-channel selling options are one of the best
                  features. With our Walmart private label management service,
                  you can leverage all of it to maximize your store’s profits.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-lg font-semibold transition-all duration-150 ease-in-out">
                    Multiple Business Models
                  </h2>
                  <img
                    src="/services/walmart/bulb.png"
                    alt="Clock"
                    className="w-9 h-9  md:w-12 md:h-12 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  Did you know that you can run multiple business models on your
                  Walmart Store: Walmart Retail Arbitrage, Walmart Fulfillment
                  Services, and Self-Fulfillment? Fret not, we at ecomasis will
                  help you choose the most suitable ones for you.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-lg font-semibold transition-all duration-150 ease-in-out">
                    Extensive Seller Support
                  </h2>
                  <img
                    src="/services/walmart/headphone.png"
                    alt="Bell"
                    className="w-9 h-9  md:w-12 md:h-12 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  Walmart provides dedicated support for marketplace sellers,
                  helping you navigate any challenges and maximize your success
                  on the platform.
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
              Why Do You Need Walmart Automation Services?
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
              <ShieldIcon className="size-10 text-white" />
              <p className="w-52 text-sm text-white">
                We will take the drivers seat in building, launching , operating
                and scaling you a 6 or 7 figure automated walmart store.
              </p>
            </div>
            <img
              src="/services/walmart/walmart.jpg"
              alt="Person"
              className="w-full h-full object-cover"
            />
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative h-[80vh] md:h-[60vh] flex items-center justify-center">
        <div className="absolute flex flex-col items-center gap-10 px-2 z-20">
          <h2 className="text-white font-extralight text-2xl max-md:text-center md:text-3xl">
            Changing the lives of ecommerce sellers
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
                Leverage our end-to-end Amazon FBA automation service today.
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
                Choose ecomasis as your Amazon FBA company, sit back, and relax
                while we do the heavy lifting for you!
              </p>
              <CTAButton />
            </div>
            <img
              src="/services/walmart/walmart2.jpg"
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
              src="/services/walmart/walmart3.jpg"
              alt="Tiktok 2"
              className="w-full h-[450px] object-cover rounded-lg"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-gold font-semibold text-2xl">
                Boost Your Profits With Our Walmart Dropshipping Automation
              </h1>
              <p className="text-charcoal text-sm">
                What sets us apart from the competition is our commitment to our
                customers. Unlike other Walmart automation service providers, we
                don’t leave you high and dry after charging you an exorbitant
                upfront cost. Instead, we offer a flexible monthly fee that
                allows you to cancel at any time.
              </p>
              <p className="text-charcoal text-sm">
                No hidden charges and no (unpleasant) surprises when you get
                your Walmart private label set up and automated by the best in
                town—ecomasis!
              </p>
              <h2 className="text-gold font-semibold text-2xl">
                Walmart Automation Services That You Can Trust
              </h2>
              <h3 className="text-charcoal font-semibold text-xl">
                Client-centric approach
              </h3>
              <p className="text-charcoal text-sm">
                At ecomasis, we take pride in offering the most comprehensive
                set of Walmart automation services that do not just help you
                manage the day-to-day operations, but offer insightful reports,
                and analytics tools for improving store’s performance.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen flex items-center justify-center py-10 px-2">
        <MaxWidthWrapper classNames="flex flex-col gap-12 max-md:items-center">
          <h1 className="text-charcoal font-bold text-2xl md:text-3xl">
            Benefits of Walmart Automation with ecomasis
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
              Unlock your business potential
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
              Our walmart automation services include
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
