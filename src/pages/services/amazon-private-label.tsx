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
  CarIcon,
  CheckIcon,
  GemIcon,
  MessagesSquareIcon,
  MonitorIcon,
  NewspaperIcon,
  PencilRulerIcon,
} from "lucide-react";

export const AmazonPrivateLabel = () => {
  const perksData = [
    {
      href: "/services/amazon-pl/flag.png",
      title: "Brand Freedom",
      desc: "Forget about platform brand restrictions. Our Amazon private label services can unleash your creativity and establish a distinctive brand identity that sets your product apart from the competition.",
    },
    {
      href: "/services/amazon-pl/calendar.png",
      title: "Quality control",
      desc: "EcomHedge’s FBA label service for Amazon empowers you to select premium materials and ingredients, ensuring your offerings exceed customer expectations and outshine competitors.",
    },
    {
      href: "/services/amazon-pl/direction.png",
      title: "Profitability flexibility",
      desc: "Set your own prices and gain a competitive edge in the market. With EcomHedge, you can swiftly adjust prices to capitalize on market opportunities, maximizing your revenue potential.",
    },
    {
      href: "/services/amazon-pl/ranking.png",
      title: "Reduced competition",
      desc: "Dive into a less saturated market with EcomHedge's FBA label service. Create unique, niche products that resonate with customers, unlocking new market segments and boosting your sales potential.",
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
    "Unbounded brand freedom",
    "Countless opportunities",
    "Flexibility of customization of products",
    "Boosted revenues and profit margins!",
  ];
  const benefitsData = [
    {
      href: "/services/tiktok/sun.jpg",
      title: "Strategic product selection",
      desc: "EcomHedge excels in guiding you through the intricate process of product selection for your Amazon private label. We conduct thorough market research to identify niche opportunities with low competition, ensuring your products stand out.",
    },
    {
      href: "/services/tiktok/laptop.jpg",
      title: "Comprehensive brand development",
      desc: "EcomHedge provides comprehensive support in creating a distinctive brand identity that resonates with your target audience. From logo design to packaging strategies, we ensure every aspect reflects your brand's values and enhances customer trust.",
    },
    {
      href: "/services/tiktok/ranking.jpg",
      title: "Optimized marketing strategies",
      desc: "EcomHedge leverages advanced SEO techniques, PPC campaigns, and social media integration to maximize your store's exposure. We formulate tailored marketing plans that attract organic traffic and convert visitors into loyal customers.",
    },
  ];
  const servicesData = [
    {
      icon: GemIcon,
      title: "Product research and sourcing",
      desc: "We conduct in-depth market research and negotiate with suppliers to secure high-quality materials at competitive prices, ensuring profitable product selections.",
    },
    {
      icon: PencilRulerIcon,
      title: "Brand identity and design development",
      desc: "Crafting a cohesive brand identity through logo creation, packaging design, and compelling visuals that enhance visibility and trust among consumers.",
    },
    {
      icon: NewspaperIcon,
      title: "Listing optimization and launch strategy",
      desc: "Optimizing product listings with SEO techniques, persuasive content, and strategic launch plans to drive initial sales and visibility on the platform.",
    },
    {
      icon: CarIcon,
      title: "Inventory management and fulfillment",
      desc: "Efficiently managing inventory levels and partnering with reliable fulfillment centers to streamline shipping and deliver exceptional customer experiences.",
    },
    {
      icon: MonitorIcon,
      title: "Performance monitoring and optimization",
      desc: "Using advanced analytics to track key metrics, conduct A/B testing, and optimize listings and marketing strategies for sustained growth and competitiveness.",
    },
    {
      icon: MessagesSquareIcon,
      title: "Ongoing support and strategic guidance",
      desc: "Providing personalized consultation and strategic advice to navigate challenges, capitalize on opportunities, and achieve long-term success.",
    },
  ];
  const faqData = [
    {
      title: "What is amazon private labeling, and how can EcomHedge help?",
      desc: "EcomHedge specializes in Amazon Private Labeling, where we assist sellers in creating and selling their own branded products on platform. We manage everything from product sourcing and branding to listing optimization and sales strategies, ensuring your products stand out in the marketplace.",
    },
    {
      title:
        "How does private labeling benefit my business compared to selling existing products?",
      desc: "Private labeling allows you to establish a unique brand identity, free from platform brand restrictions. You gain full control over product quality, pricing, and customer perception, leading to higher profit margins and long-term brand equity.",
    },
    {
      title:
        "What types of products are suitable for amazon private labeling with EcomHedge?",
      desc: "We recommend products that offer a balance of low competition and high demand. Our experts conduct thorough market research to identify profitable niches and product categories, ensuring your private label products have the best chance of success.",
    },
    {
      title:
        "How long does it take to launch a private label product on platform with EcomHedge?",
      desc: "The timeline varies depending on product complexity and market readiness. Typically, our streamlined process allows for efficient product development, listing creation, and marketing strategy implementation, aiming to launch your product as swiftly as possible while ensuring quality and compliance.",
    },
    {
      title:
        "What support does EcomHedge provide after launching my amazon private label product?",
      desc: "Beyond product launch, EcomHedge offers ongoing support including inventory management, sales optimization, and marketing strategies. We monitor market trends, adjust strategies as needed, and provide insights to help maximize your product's success and profitability on platform.",
    },
  ];
  return (
    <section className="flex flex-col w-full min-h-screen">
      {/* Hero */}
      <ServicesHero
        title={
          <h1 className="text-white text-3xl font-bold max-md:text-center">
            Amazon FBA Label Service That{" "}
            <div className="inline-flex bg-black text-gold px-4 py-2 rounded-full">
              Takes The Hassle
            </div>{" "}
            Out of The Process
          </h1>
        }
        desc="Think starting your own business will drill a hole in your pocket? Not on our watch!"
      />

      <div className="flex flex-col min-h-screen items-center justify-center py-10 px-2">
        <MaxWidthWrapper classNames="flex flex-col gap-10">
          <h1 className="text-charcoal font-bold text-2xl md:text-3xl text-center">
            The Many Ways You Can Benefit from an Amazon Private Label
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-charcoal group-hover:text-white text-lg md:text-xl font-semibold transition-all duration-150 ease-in-out">
                  A Standout Brand Identity
                </h2>
                <img
                  src="/services/amazon-pl/starBadge.png"
                  alt="Laptop"
                  className="w-9 md:w-16 h-9 md:h-16 object-contain"
                />
              </div>
              <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                With our Amazon FBA label service, you get full control over
                your brand’s identity, including the product name, logo,
                packaging, and overall brand messaging. This helps differentiate
                your products from competitors and build strong and unique brand
                recognition.
              </p>
            </div>
            <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-charcoal group-hover:text-white text-lg md:text-xl font-semibold transition-all duration-150 ease-in-out">
                  Set Your Own Prices
                </h2>
                <img
                  src="/services/amazon-pl/tag.png"
                  alt="Laptop"
                  className="w-9 md:w-16 h-9 md:h-16 object-contain"
                />
              </div>
              <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                Since you own the brand, you can control the prices without
                being undercut by competitors selling the same product. This
                allows for better revenue and profitability strategizing.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-lg font-semibold transition-all duration-150 ease-in-out">
                    A Vast Network of Loyal Customers
                  </h2>
                  <img
                    src="/services/amazon-pl/hand.png"
                    alt="Hands"
                    className="w-9 h-9  md:w-12 md:h-12 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  By creating a strong brand with our Amazon private label
                  services, you can build customer loyalty, leading to repeat
                  purchases—invaluable for long-term business growth.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-lg font-semibold transition-all duration-150 ease-in-out">
                    Asset Building
                  </h2>
                  <img
                    src="/services/amazon-pl/building.png"
                    alt="Clock"
                    className="w-9 h-9  md:w-12 md:h-12 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  We as a reliable Amazon private label agency help set up
                  successful private label brand, turning it into an invaluable
                  asset, with the potential to be sold in the future or expanded
                  into other sales channels.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-lg font-semibold transition-all duration-150 ease-in-out">
                    Global Selling Opportunities
                  </h2>
                  <img
                    src="/services/amazon-pl/world.png"
                    alt="Bell"
                    className="w-9 h-9  md:w-12 md:h-12 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  Once your brand is successful in one market, you can expand to
                  other marketplaces around the world, reaching a global
                  audience and growing your brand internationally.
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
              How EcomHedge, as an Amazon private label agency, helps you
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
              src="/services/amazon-fba/amazon.jpg"
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
                Transform top-selling products into scalable assets for
                long-term success with a strong private label on Amazon FBA.
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
                Choose EcomHedge as your Amazon FBA company, sit back, and relax
                while we do the heavy lifting for you!
              </p>
              <CTAButton />
            </div>
            <img
              src="/services/amazon-pl/amazon-private-label.jpg"
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
              src="/services/amazon-fba/Amazon-3rd-Fold.jpg"
              alt="Tiktok 2"
              className="w-full h-[450px] object-cover rounded-lg"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-gold font-semibold text-2xl">
                How OAn Amazon FBA Private Label Agency Driving Success for All
              </h1>
              <p className="text-charcoal text-sm">
                EcomHedge propels businesses forward with meticulously crafted
                strategies for Amazon white label setups. We delve deep into
                market analysis, identifying growth opportunities and devising
                strategic plans that align with your business goals. By
                leveraging our expertise in market trends and consumer behavior,
                we ensure your business stays ahead of the curve.
              </p>
              <p className="text-charcoal text-sm">
                Our client-centric approach means we tailor our solutions to
                meet your unique needs. Whether it's optimizing the operational
                efficiency of an Amazon private label, enhancing customer
                experience, or driving sales, we're committed to exceeding your
                expectations. With proactive communication and a focus on
                collaboration, we forge lasting partnerships built on trust and
                mutual success.
              </p>
              <h2 className="text-gold font-semibold text-2xl">
                Transform Your Vision into Reality with EcomHedge’s Amazon
                Private Label Services
              </h2>
              <h3 className="text-charcoal font-semibold text-xl">
                Leverage our state-of-the-art tools to efficiently manage your
                Amazon private label.
              </h3>
              <p className="text-charcoal text-sm">
                Our success stories speak volumes. Over the years, EcomHedge has
                empowered numerous Entrepreneurs and businesses to achieve
                remarkable growth and profitability through its private labeling
                on Amazon. Through data-driven insights and innovative
                solutions, we navigate challenges, capitalize on opportunities,
                and deliver sustainable results.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen flex items-center justify-center py-10 px-2">
        <MaxWidthWrapper classNames="flex flex-col gap-12 max-md:items-center">
          <h1 className="text-charcoal font-bold text-2xl md:text-3xl">
            Benefits of choosing EcomHedge’s Amazon FBA label service
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
              Our Amazon FBA label service includes
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
