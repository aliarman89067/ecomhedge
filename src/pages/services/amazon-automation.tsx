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

export const AmazonAutomation = () => {
  const perksData = [
    {
      href: "/services/tiktok/social.png",
      title: "The initial setup",
      desc: "Offering the best Amazon FBA automation services, we help you establish an LLC, get an EIN, and set up a W9 to ensure your business is compliant from the start.",
    },
    {
      href: "/services/tiktok/video.png",
      title: "Building an e-commerce store",
      desc: "We build your e-commerce store and help set up products with our Amazon automation services, preparing your store for launch.",
    },
    {
      href: "/services/tiktok/rocket.png",
      title: "Seamless management",
      desc: "Our Amazon FBA automation experts handle orders, manage inventory, and oversee fulfillment through our warehouse for 12 months, ensuring smooth operations.",
    },
    {
      href: "/services/tiktok/user.png",
      title: "Boosted sales",
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
  const stepsData = [
    "We build your store",
    "We source your product",
    "We ship your product.",
    "We help you generate profits!",
  ];
  const benefitsData = [
    {
      href: "/services/tiktok/sun.jpg",
      title: "Optimize your inventory",
      desc: "We streamline stock levels, minimize overstocking, and ensure timely replenishments to meet demand, ultimately boosting profitability and customer satisfaction.",
    },
    {
      href: "/services/tiktok/laptop.jpg",
      title: "Superior store management",
      desc: "Our method employs discreet packaging and valid tracking, ensuring compliance and security. We meticulously monitor inventory and pricing, mitigating risks and maximizing cost-efficiency.",
    },
    {
      href: "/services/tiktok/ranking.jpg",
      title: "Maximum efficiency",
      desc: "Experience faster transactions, improved operational efficiency, and heightened customer satisfaction. Trust us to optimize your store operations effortlessly for increased sales and success.",
    },
  ];
  const servicesData = [
    {
      icon: PaperclipIcon,
      title: "Product listing management",
      desc: "We conduct thorough research on high-demand products and collaborate with suppliers to list inventory items in your platform’s account.",
    },
    {
      icon: ShoppingCartIcon,
      title: "Product and stock management",
      desc: "Our store experts vigilantly monitor stock levels and pricing across your inventory using advanced automation tools.",
    },
    {
      icon: BoxIcon,
      title: "Order management",
      desc: "Our dedicated team and automated system promptly process new orders, ensuring efficient fulfillment by promptly notifying suppliers.",
    },
    {
      icon: LaptopIcon,
      title: "Account monitoring",
      desc: "Our team monitors the store account for issues such as policy violations and A-Z claims to maintain its health.",
    },
    {
      icon: FileQuestionIcon,
      title: "Customer service",
      desc: "We provide comprehensive customer support via email, phone, and our CRM system, offering quick resolutions to ensure customer satisfaction.",
    },
    {
      icon: Axis3dIcon,
      title: "Growth and scale",
      desc: "We collaborate with you over time to strategize and scale your seller account continuously, aiming for sustained growth and expansion.",
    },
  ];
  const faqData = [
    {
      title: "What are automation services?",
      desc: "EcomHike automates every aspect of your online store, from product sourcing and listings to inventory, order processing, and customer support, using proprietary tools to scale your business and boost profitability.",
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
      desc: "With EcomHike, there are no hidden fees. We prioritize transparency, offering clear, upfront pricing for all our services, so you always know exactly what you're paying for.",
    },
  ];
  return (
    <section className="flex flex-col w-full min-h-screen">
      {/* Hero */}
      <ServicesHero
        title={
          <h1 className="text-white text-3xl font-bold max-md:text-center">
            Amazon FBA Automation Service A{" "}
            <div className="inline-flex bg-black text-gold px-4 py-2 rounded-full">
              That Leads
            </div>{" "}
            You To High Profits
          </h1>
        }
        desc="What if there was a way to enjoy the benefits of a fully automated FBA store, without you having to stress over the complexities?"
      />

      <div className="flex flex-col min-h-screen items-center justify-center py-10 px-2">
        <MaxWidthWrapper classNames="flex flex-col gap-10">
          <h1 className="text-charcoal font-bold text-2xl md:text-3xl text-center">
            Wholesale Benefits with EcomHike's Amazon FBA Automation Service
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-charcoal group-hover:text-white text-lg md:text-xl font-semibold transition-all duration-150 ease-in-out">
                  Reselling Established Brands
                </h2>
                <img
                  src="/services/tiktok/laptop.png"
                  alt="Laptop"
                  className="w-9 md:w-16 h-9 md:h-16 object-contain"
                />
              </div>
              <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                With our Amazon wholesale automation, you can purchase and
                resell well-known brands that already have established demand.
                This reduces the risk associated with launching new products
                since you’re selling items that customers are already searching
                for and purchasing.
              </p>
            </div>
            <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-charcoal group-hover:text-white text-lg md:text-xl font-semibold transition-all duration-150 ease-in-out">
                  Potential for High Sales Volume
                </h2>
                <img
                  src="/services/tiktok/social.png"
                  alt="Laptop"
                  className="w-9 md:w-16 h-9 md:h-16 object-contain"
                />
              </div>
              <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                The wholesale model our dedicated team of Amazon automation
                services builds is highly scalable. You can easily increase
                order quantities as your business grows, without needing to
                invest in new product lines or branding.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-lg font-semibold transition-all duration-150 ease-in-out">
                    Buy Box Advantage
                  </h2>
                  <img
                    src="/services/tiktok/hands.png"
                    alt="Hands"
                    className="w-9 h-9  md:w-12 md:h-12 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  When you sell well-known brands and maintain competitive
                  pricing and good seller metrics, you increase your chances of
                  winning the Buy Box. The Buy Box is where the majority of
                  sales happen, making it crucial for maximizing revenue.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-lg font-semibold transition-all duration-150 ease-in-out">
                    Fulfillment by Amazon (FBA)
                  </h2>
                  <img
                    src="/services/tiktok/clock.png"
                    alt="Clock"
                    className="w-9 h-9  md:w-12 md:h-12 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  Using our Amazon FBA automation services allows you to
                  outsource warehousing, packing, and shipping. This not only
                  saves time and reduces overhead costs but also makes your
                  products eligible for premium services, which can
                  significantly boost sales.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-lg font-semibold transition-all duration-150 ease-in-out">
                    Organic Sales
                  </h2>
                  <img
                    src="/services/tiktok/bell.png"
                    alt="Bell"
                    className="w-9 h-9  md:w-12 md:h-12 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  Popular branded products typically have strong organic search
                  visibility on the platform, meaning customers are likely to
                  find and purchase your products without significant
                  advertising.
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
            An Amazon automation company changing the lives of ecommerce
            sellers.
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
                Choose EcomHike as your Amazon FBA company, sit back, and relax
                while we do the heavy lifting for you!
              </p>
              <CTAButton />
            </div>
            <img
              src="/services/amazon-fba/amazon-fba.jpg"
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
                How Our Amazon FBA Automation Service Drives Success?
              </h1>
              <p className="text-charcoal text-sm">
                EcomHike pioneers a transformative online business program,
                setting benchmarks in the industry. Our mission is to foster and
                elevate the next generation of agencies.
              </p>
              <p className="text-charcoal text-sm">
                We, as an Amazon FBA company, challenge outdated business
                practices, aiming to triple your revenue. Whether you're a
                novice or seasoned entrepreneur, our proven formula ensures
                profitable growth. We empower 5-figure agencies to scale
                effortlessly into 6 and 7-figures.
              </p>
              <h2 className="text-gold font-semibold text-2xl">
                Streamline Your Operations with Ecom Hike As Your Amazon FBA
                Company!
              </h2>
              <h3 className="text-charcoal font-semibold text-xl">
                Optimize your inventory and sales with our automation tools
              </h3>
              <p className="text-charcoal text-sm">
                At EcomHike, we focus on your business’s operational efficiency
                to drive sales growth. Whether you operate with FBA, FBM, or PL,
                we manage listings, orders, product sourcing, and inventory with
                utmost finesse. With state-of-the-art automation tools, your
                store operates seamlessly around the clock, ensuring continuous
                performance.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen flex items-center justify-center py-10 px-2">
        <MaxWidthWrapper classNames="flex flex-col gap-12 max-md:items-center">
          <h1 className="text-charcoal font-bold text-2xl md:text-3xl">
            Benefits of launching automation with EcomHike
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
              Our Amazon FBA automation services include
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
