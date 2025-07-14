import { CTAButton } from "@/components/cta-button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
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
      title: "Lift together",
      desc: "Pioneering solutions that leverage cutting-edge technology to streamline business processes and enhance efficiency, setting new standards in the digital industry.",
    },
    {
      icon: UsersIcon,
      title: "Champion our customers",
      desc: "Our clients are our priority. We strive to be trusted partners, supporting their journey with essential tools and expertise. By understanding their challenges, we anticipate needs to simplify and enhance their business operations.",
    },
    {
      icon: PuzzleIcon,
      title: "See the whole picture",
      desc: "Driven by curiosity, we connect the dots to ensure a seamless experience. Collaborating to comprehend the broader impact of our decisions, we prioritize every detail of our clients' journey. Our focus is on creating a comprehensive, flawless solution.",
    },
    {
      icon: SearchIcon,
      title: "Focus on results",
      desc: "Ownership defines our approach to achieving excellence. We set clear goals, monitor progress, and uphold accountability. Embracing an entrepreneurial spirit, we innovate fearlessly, learn from mistakes, and push boundaries to deliver exceptional outcomes",
    },
    {
      icon: MessageCircleOffIcon,
      title: "Keep it simple",
      desc: "Clear and direct communication is key to simplicity at EcomHike. We actively listen, incorporate diverse viewpoints, and encourage open dialogue. Our transparent approach builds trust with both our team and clients.",
    },
    {
      icon: HeartHandshakeIcon,
      title: "Together we achieve",
      desc: "Collaboration is ingrained in our DNA. By working together seamlessly, we harness collective strengths to drive success. Embracing inclusivity and mutual respect, we foster an environment where ideas flourish and innovation thrives.",
    },
  ];

  return (
    <section className="flex flex-col w-full h-full">
      {/* Hero */}
      <div className="py-10 px-2 relative min-h-screen w-full flex flex-col overflow-hidden items-center justify-center">
        <MaxWidthWrapper classNames="z-20">
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Go global with EcomHike
            </h1>
            <p className="text-white text-center px-2">
              EcomHike aims to lead the way in digital solutions, empowering
              global businesses through expert account setup, marketing
              strategies, and business consultancy. Our vision is to innovate
              and streamline operations, ensuring every client achieves
              sustainable growth and success. We are dedicated to providing
              unparalleled support and guidance, driving businesses towards
              their full potential.
            </p>
            <p className="text-white text-center px-2">
              At EcomHike, we leverage cutting-edge automation solutions to
              simplify processes for our clients. Our innovative approach
              streamlines account setup, enhances marketing efficiency, and
              provides strategic business consultancy. By integrating
              automation, we empower businesses to achieve greater productivity
              and success in today's digital age.
            </p>
          </div>
        </MaxWidthWrapper>
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-black/40 backdrop-blur-xl" />
        <video
          src="/golden-video.mp4"
          autoPlay
          muted
          loop
          className="z-0 w-full h-full object-cover absolute top-0 left-0"
        >
          <source src="/golden-video.mp4" />
        </video>
      </div>
      <div className="flex fle-col gap-5 mt-10 pb-64">
        <MaxWidthWrapper>
          <img
            src="/about/banner.jpg"
            alt="Banner"
            className="w-full h-[300px] rounded-2xl object-cover"
          />
        </MaxWidthWrapper>
      </div>
      <div className="relative w-full min-h-screen bg-gradient-to-t from-charcoal to-gold px-2">
        <MaxWidthWrapper>
          <div className="flex flex-col md:flex-row gap-10 -translate-y-52">
            {/* Box 1 */}
            <div className="px-5 py-10 rounded-lg bg-radial from-black to-charcoal flex flex-col gap-4">
              <h1 className="text-white font-bold text-xl">Our Heritage</h1>
              <div className="flex flex-col gap-2">
                <span className="text-gold">2019 - 2020 : B2B Marketplace</span>
                <span className="text-white">
                  We started our journey as a Global B2B Marketplace connecting
                  buyers & suppliers.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gold">2021 - 2022 : Digital Agency</span>
                <span className="text-white">
                  We transitioned to serve as a digital agency, catering to
                  clients worldwide.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gold">
                  2023 - Present: Ecom Automation
                </span>
                <span className="text-white">
                  Became the e-com solution provider, helping entrepreneurs to
                  generate passive income.
                </span>
              </div>
            </div>
            {/* Box 2 */}
            <div className="px-5 py-10 rounded-lg bg-radial from-black to-charcoal flex flex-col gap-4">
              <h1 className="text-white font-bold text-xl">Our Heritage</h1>
              <div className="flex flex-col gap-2">
                <span className="text-gold">2019 - 2020 : B2B Marketplace</span>
                <span className="text-white">
                  We started our journey as a Global B2B Marketplace connecting
                  buyers & suppliers.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gold">2021 - 2022 : Digital Agency</span>
                <span className="text-white">
                  We transitioned to serve as a digital agency, catering to
                  clients worldwide.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gold">
                  2023 - Present: Ecom Automation
                </span>
                <span className="text-white">
                  Became the e-com solution provider, helping entrepreneurs to
                  generate passive income.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full -translate-y-36">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                Key Features of <br /> Seller Account:
              </h1>
              <p className="text-white">
                The Seller Account service is the gateway for individuals and
                businesses to sell products directly to customers on
                marketplace. By creating an Seller Account, sellers can list
                their products, manage their inventory, process orders, and
                engage with customers through platform. Here’s an overview of
                what the Seller Account service entails:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mb-7">
              <div className="flex flex-col gap-3">
                {keyFeatureData.map((item, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <h2 className="text-white text-lg font-bold">
                      {item.label}
                    </h2>
                    <span className="text-white text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>
              <img
                src="/about/image1.jpg"
                alt="Image 1"
                className="w-full h-[500px] object-cover rounded-xl"
              />
            </div>
            <CTAButton />
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen py-10">
        <MaxWidthWrapper classNames="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-gold font-bold text-2xl md:text-3xl lg:text-4xl">
              EcomHike, your top choice for empowering business automation
            </h1>
            <p className="text-charcoal">
              We're for the visionaries. Those driven by success, fueled by
              ambition, and inspired by their loved ones.
            </p>
            <p className="text-charcoal">
              We're about technology that simplifies, strategists and experts
              who streamline, and trusted partners who turn challenges into
              opportunities.
            </p>
            <p className="text-charcoal">
              We're about unlocking doors, expanding horizons, and revealing
              what's achievable. We empower individuals to take that crucial
              first step and every subsequent stride. We ensure everyone has an
              equal chance.
            </p>
            <p className="text-charcoal">
              For entrepreneurs launching their ventures, for families relying
              on them, for safeguarding innovative ideas—we are EcomHike. Here
              to formalize aspirations and pave the way forward.
            </p>
          </div>
          <div className="relative w-full h-full">
            <div className="absolute left-0 bottom-0 flex flex-col gap-2 bg-charcoal/60 backdrop-blur-lg w-fit px-10 py-6 rounded-lg">
              <CheckIcon className="size-10 text-white" />
              <p className="w-52 text-sm text-white">
                Achieved Best Seller status in your category!
              </p>
            </div>
            <img
              src="/about/image2.jpg"
              alt="Image 2"
              className="h-full object-cover rounded-xl"
            />
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative h-[80vh] md:h-[60vh] flex items-center justify-center">
        <div className="absolute flex flex-col items-center gap-10 px-2 z-20">
          <h2 className="text-white font-extralight text-2xl max-md:text-center md:text-3xl">
            A few highlights
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
      <div className="w-full min-h-screen py-10">
        <MaxWidthWrapper classNames="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative w-full h-full">
            <div className="absolute left-0 bottom-0 flex flex-col gap-2 bg-charcoal/60 backdrop-blur-lg w-fit px-10 py-6 rounded-lg">
              <CheckIcon className="size-10 text-white" />
              <p className="w-52 text-sm text-white">
                Achieved Best Seller status in your category!
              </p>
            </div>
            <img
              src="/about/image3.jpg"
              alt="Image 3"
              className="h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-gold font-bold text-2xl md:text-3xl lg:text-4xl">
              The EcomHike journey into automation
            </h1>
            <p className="text-charcoal">
              In the wake of the COVID-19 pandemic, the business landscape
              underwent unprecedented challenges. Thousands of businesses
              struggled to adapt, facing shortages in skilled personnel and
              operational inefficiencies. The ripple effects were profound, with
              many enterprises experiencing reduced performance and financial
              strain, leading to widespread job losses.
            </p>
            <p className="text-charcoal">
              Witnessing these challenges firsthand, EcomHike recognized a
              critical need to pivot from traditional business strategy services
              to pioneering business automation solutions. With a vision to
              empower businesses across over 40 industries.
            </p>
            <p className="text-charcoal">
              Today, EcomHike continues to evolve, dedicated to empowering
              entrepreneurs and enterprises alike with transformative automation
              solutions that pave the way for success in the new era of
              business.
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper classNames="py-10 px-2">
        <div className="mt-14 flex flex-col gap-5 items-center">
          <h1 className="text-gold font-medium text-2xl md:text-3xl">
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
      <MaxWidthWrapper classNames="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 px-2">
        <div className="relative w-full h-full">
          <div className="absolute left-0 bottom-0 flex flex-col gap-2 bg-charcoal/60 backdrop-blur-lg w-fit px-10 py-6 rounded-lg">
            <CheckIcon className="size-10 text-white" />
            <p className="w-52 text-sm text-white">
              Achieved Best Seller status in your category!
            </p>
          </div>
          <img
            src="/about/image4.jpg"
            alt="Image 4"
            className="h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-gold font-bold text-2xl md:text-3xl lg:text-4xl">
            Making it official for everyone
          </h1>
          <p className="text-charcoal">
            At EcomHike, we are dedicated to making business automation
            accessible to all, irrespective of background or circumstance. We
            aim to empower entrepreneurs and businesses alike, ensuring they
            have the tools and support needed to thrive in the digital age.
          </p>
          <p className="text-charcoal">
            We are deeply committed to supporting the broader business community
            through our social impact initiatives. By forming strategic
            partnerships, we aim to uplift underserved sectors and communities
            that may not have easy access to advanced business solutions.
            Furthermore, we actively participate in corporate giving and provide
            our employees with opportunities for community service and corporate
            matching programs.
          </p>
        </div>
      </MaxWidthWrapper>
      <div className="min-h-screen py-10 px-2">
        <MaxWidthWrapper>
          <div className="border-2 border-gold rounded-xl grid grid-cols-1 md:grid-cols-2 gap-2 overflow-hidden">
            <div className="flex flex-col gap-4 py-14 pl-6 pr-2">
              <h1 className="text-charcoal font-bold text-2xl md:text-3xl lg:text-4xl">
                "We believe every business deserves the full protection of the
                legal system as well as a simple way to start, operate, and run
                their business daily."
              </h1>
              <span className="text-charcoal text-lg">
                - Dan Wernikoff, CEO
              </span>
            </div>
            <img
              src="/about/image5.jpg"
              alt="Image 5"
              className="h-[300px] md:h-full w-full rounded-xl object-cover"
            />
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper classNames="flex flex-col gap-3 items-center pb-20">
        <h2 className="text-gold font-semibold text-2xl">Get in touch</h2>
        <p className="text-charcoal text-center max-w-3xl w-full">
          At EcomHike, we value trust, teamwork, and bringing transparency to
          help organisations make better decisions. Please don’t hesitate to
          reach out directly at info@ecomhike.com.
        </p>
        <CTAButton />
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
