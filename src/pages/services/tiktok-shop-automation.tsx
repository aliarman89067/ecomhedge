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
  Brain,
  CarIcon,
  KeyIcon,
  NotepadText,
  PhoneIcon,
  SearchIcon,
  ShieldUserIcon,
  StoreIcon,
} from "lucide-react";

export const TiktokShopAutomation = () => {
  const perksData = [
    {
      href: "/services/tiktok/social.png",
      title: "Wider reach",
      desc: "TikTok's vast user base offers unparalleled reach, helping you connect with millions of potential customers daily.",
    },
    {
      href: "/services/tiktok/video.png",
      title: "Engage with trends",
      desc: "Leverage trending challenges and hashtags to boost visibility and attract a highly engaged audience to your products.",
    },
    {
      href: "/services/tiktok/rocket.png",
      title: "Cost-effective marketing",
      desc: "With organic reach and affordable advertising options, TikTok offers cost-effective marketing solutions to maximize your ROI.",
    },
    {
      href: "/services/tiktok/user.png",
      title: "Increase brand awareness",
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
  const stepsData = [
    "We set up your store",
    "We scale your Tiktok Shop",
    "We ship your product",
    "We help you generate a stable passive income",
  ];
  const benefitsData = [
    {
      href: "/services/tiktok/sun.jpg",
      title: "Expand your reach",
      desc: "EcomHike strategies tap into TikTok's vast user base, increasing your brand's visibility and attracting a global audience.",
    },
    {
      href: "/services/tiktok/laptop.jpg",
      title: "Streamline operations",
      desc: "EcomHike automates your inventory management, order processing, and customer service for a seamless and efficient operation.",
    },
    {
      href: "/services/tiktok/ranking.jpg",
      title: "Boost your sales",
      desc: "EcomHike expertise to drive high engagement and conversions with targeted TikTok campaigns tailored for your audience.",
    },
  ];
  const servicesData = [
    {
      icon: KeyIcon,
      title: "Business registration",
      desc: "We register your business, setting up the legal foundation essential for your TikTok shop to operate seamlessly and compliantly from the start.",
    },
    {
      icon: StoreIcon,
      title: "Store setup",
      desc: "We create and configure your TikTok shop, ensuring it is visually appealing and optimized for attracting and retaining customers.",
    },
    {
      icon: SearchIcon,
      title: "Product hunting & research",
      desc: "Our experts find profitable products and niches, ensuring you offer in-demand items that drive high sales and maximize your profit margins.",
    },
    {
      icon: NotepadText,
      title: "Product listings",
      desc: "We add and optimize products in your store, ensuring they are compelling and easily accessible to potential customers for higher conversions.",
    },
    {
      icon: Brain,
      title: "Marketing strategies",
      desc: "We implement effective marketing strategies, including influencer collaborations, to promote your store and products, driving significant traffic and sales.",
    },
    {
      icon: CarIcon,
      title: "Order fulfillment",
      desc: "Our team manages orders and fulfillment, ensuring timely and accurate delivery while maintaining high customer satisfaction and repeat business.",
    },
  ];
  const faqData = [
    {
      title: "What Are TikTok Shop Automation Services?",
      desc: "TikTok Shop Automation services manage your TikTok shop, handling everything from product sourcing and listings to order fulfillment and customer service, allowing you to earn passively.",
    },
    {
      title: "Why Should I Trust EcomHike For TikTok Shop Automation?",
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
  return (
    <section className="flex flex-col w-full min-h-screen">
      {/* Hero */}
      <ServicesHero
        title={
          <h1 className="text-white text-3xl font-bold">
            Hop on the{" "}
            <div className="inline-flex bg-black text-gold px-4 py-2 rounded-full">
              TikTok Shop
            </div>{" "}
            Bandwagon with TikTok Shop Automation Service
          </h1>
        }
        desc="TikTok shop opens a doorway to unimaginable profits only if it's done the right way. Thinking how to do that?"
      />

      <div className="flex flex-col min-h-screen items-center justify-center">
        <MaxWidthWrapper classNames="flex flex-col gap-10">
          <h1 className="text-charcoal font-bold text-3xl text-center">
            The Undeniable Benefits of TikTok Shop Automation
          </h1>
          <div className="grid grid-cols-2 gap-5 w-full">
            <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-charcoal group-hover:text-white text-xl font-semibold transition-all duration-150 ease-in-out">
                  Marketing Like Never Before
                </h2>
                <img
                  src="/services/tiktok/laptop.png"
                  alt="Laptop"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                With EcomHike&apos;s top-notch TikTok shop automation, you get a
                chance to be as creative as you want in your marketing efforts.
                Innovative marketing is TikTok&apos;s USP, and we make sure to
                leverage it fully!
              </p>
            </div>
            <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-charcoal group-hover:text-white text-xl font-semibold transition-all duration-150 ease-in-out">
                  Unparalleled Engagement
                </h2>
                <img
                  src="/services/tiktok/social.png"
                  alt="Laptop"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                When it&apos;s TikTok and we are your TikTok private label
                service providers—engagement should be the least of your
                worries.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 w-full">
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-xl font-semibold transition-all duration-150 ease-in-out">
                    Guaranteed Convenience
                  </h2>
                  <img
                    src="/services/tiktok/hands.png"
                    alt="Hands"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  With our TikTok shop automation service, you can offer your
                  customers a seamless shopping experience thanks to our strong
                  business model along with TikTok in-app shopping feature.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-xl font-semibold transition-all duration-150 ease-in-out">
                    Real-time Dealings
                  </h2>
                  <img
                    src="/services/tiktok/clock.png"
                    alt="Clock"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  TikTok shop setup allows you to curate the most creative live
                  shopping events with strong creator collaborations—and we
                  assist you in getting it all done with perfection.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col gap-3 bg-white hover:bg-charcoal rounded-lg py-4 px-5 border border-gray-300 transition-all duration-150 ease-in-out">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-charcoal group-hover:text-white text-xl font-semibold transition-all duration-150 ease-in-out">
                    Impactful Promotions
                  </h2>
                  <img
                    src="/services/tiktok/bell.png"
                    alt="Bell"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <p className="text-sm text-charcoal group-hover:text-white transition-all duration-150 ease-in-out">
                  We specialize in identifying the most suitable TikTok
                  influencers, connecting you with them, and ensuring an
                  authentic and relatable product promotion.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <MaxWidthWrapper classNames="grid grid-cols-[1.3fr_1fr] gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-charcoal text-3xl font-bold">
              Why You Need TikTok Shop Automation?
            </h2>
            <div className="flex flex-col gap-4">
              {perksData.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <img
                    src={item.href}
                    alt="Image"
                    className="w-10 h-10 object-contain"
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
          <div className="relative w-full h-[80%] rounded-xl overflow-hidden">
            <div className="absolute left-0 bottom-0 flex flex-col gap-2 bg-charcoal/60 backdrop-blur-lg w-fit px-10 py-6 rounded-lg">
              <ShieldUserIcon className="size-10 text-white" />
              <p className="w-52 text-sm text-white">
                We will take the drivers seat in building, launching , operating
                and scaling you a 6 or 7 figure automated Tiktok Shop.
              </p>
            </div>
            <img
              src="/services/tiktok/person1.jpg"
              alt="Person"
              className="w-full h-full object-cover"
            />
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative h-[60vh] flex items-center justify-center">
        <div className="absolute flex flex-col items-center gap-10 z-20">
          <h2 className="text-white font-extralight text-3xl">
            Changing the lives Of ecommerce sellers
          </h2>
          <MaxWidthWrapper classNames="flex items-center justify-center gap-20">
            {analyticsData.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col gap-3",
                  index === 1 && "items-center",
                  index === 2 && "items-end"
                )}
              >
                <h1 className="text-white font-bold text-3xl">
                  {item.count}
                  {item.prefix}
                </h1>
                <span className="text-white text-base">{item.title}</span>
                <span
                  className={cn(
                    "text-white font-extralight text-sm",
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
      <div className="w-full h-screen">
        <MaxWidthWrapper classNames="py-10 h-full">
          <div className="grid grid-cols-[1fr_1fr] gap-10 overflow-hidden border border-charcoal rounded-lg h-full pl-10">
            <div className="flex flex-col gap-3 justify-center">
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
              <p className="text-charcoal text-base">
                Choose our TikTok shop automation service, sit back, and relax
                while we do the heavy lifting for you!
              </p>
              <CTAButton />
            </div>
            <img
              src="/services/tiktok/tiktok.jpg"
              alt="Tik Tok"
              className="w-full h-full object-cover"
            />
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen">
        <MaxWidthWrapper>
          <div className="grid grid-cols-[1fr_1.3fr] gap-10 overflow-hidden h-full">
            <img
              src="/services/tiktok/tiktok2.jpg"
              alt="Tiktok 2"
              className="w-full h-[450px] object-cover rounded-lg"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-gold font-semibold text-2xl">
                A TikTok Shop Automation Service that Drives Excellent Profits
              </h1>
              <p className="text-charcoal text-sm">
                Maximize TikTok's explosive growth with EcomHike's expert
                management and strategic TikTok automation, ensuring robust
                sales and visibility for your store. EcomHike, a TikTok shop
                private label service, manages marketing, order fulfillment, and
                more, freeing you to focus on growth while enjoying reliable
                passive income.
              </p>
              <p className="text-charcoal text-sm">
                With over half a decade in ecommerce across multiple platforms,
                EcomHike offers a dependable route to profitable TikTok stores,
                backed by extensive industry experience and success.
              </p>
              <h2 className="text-gold font-semibold text-2xl">
                A{" "}
                <span className="font-bold">
                  TikTok Private Label Ads Agency
                </span>{" "}
                Handling Everything From Marketing Strategies to Order
                Fulfillment
              </h2>
              <h3 className="text-charcoal font-semibold text-xl">
                Client-centric approach
              </h3>
              <p className="text-charcoal text-sm">
                At EcomHike, your success is our priority. We provide
                transparent communication, detailed performance tracking, and
                ongoing support to help you navigate and thrive in the dynamic
                world of TikTok eCommerce.
              </p>
              <p className="text-charcoal text-sm">
                Ready to launch your profitable TikTok store with EcomHike?
                Schedule a call with our team today to explore how we can help
                you achieve your eCommerce goals effortlessly with our TikTok
                private label and automation service.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full h-screen flex items-center justify-center">
        <MaxWidthWrapper classNames="flex flex-col gap-12">
          <h1 className="text-charcoal font-bold text-3xl">
            Benefits of TikTok Shop Automation with EcomHedge
          </h1>
          <div className="grid grid-cols-3 gap-14">
            {benefitsData.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <img
                  src={item.href}
                  alt="Image"
                  className="w-12 h-12 object-contain"
                />
                <h2 className="text-charcoal font-bold text-xl">
                  {item.title}
                </h2>
                <h2 className="text-charcoal text-base">{item.desc}</h2>
              </div>
            ))}
          </div>
          <CTAButton />
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen">
        <MaxWidthWrapper>
          <div className="flex flex-col gap-5 w-full">
            <h1 className="text-gold font-medium text-3xl">
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
              Our TikTok shop automation services include
            </h1>
            <div className="grid grid-cols-3 gap-x-9 gap-y-7 w-full">
              {servicesData.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
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
      <div className="w-full  mt-12">
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
      <div className="relative w-full h-[90vh] bg-gold mt-12 flex items-center justify-center overflow-hidden">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-6">
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
              className="absolute -right-32 w-[600px] object-contain"
            />
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};
