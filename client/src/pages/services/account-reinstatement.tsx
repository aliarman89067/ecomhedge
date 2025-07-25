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
  ArrowsUpFromLineIcon,
  CheckIcon,
  HandHeartIcon,
  LockOpenIcon,
  MailPlusIcon,
  NavigationIcon,
  UserRoundSearchIcon,
} from "lucide-react";

export const AccountReinstatement = () => {
  const perksData = [
    {
      href: "/services/reinstatement/amazon.png",
      title: "Amazon insider expertise",
      desc: "We understand Amazon's internal processes and leverage this insider knowledge to navigate account reinstatement challenges effectively.",
    },
    {
      href: "/services/reinstatement/chess.png",
      title: "Tailored strategies for success",
      desc: "Each account reinstatement case on Amazon is unique, so we craft customized strategies and Plans of Action tailored to your specific suspension reasons and business circumstances.",
    },
    {
      href: "/services/reinstatement/thumb.png",
      title: "Proven success record",
      desc: "With a track record of successfully reinstating numerous Amazon accounts, we have the expertise and strategies that yield results.",
    },
    {
      href: "/services/reinstatement/navigator.png",
      title: "Support and guidance",
      desc: "Our proactive approach includes post-reinstatement strategies to ensure long-term compliance and account health.",
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
    "Catering to every type of seller suspension",
    "Offering a 50-100% refund guarantee",
    "Multiple free appeals for the same case",
    "We help you generate profits!",
  ];
  const benefitsData = [
    {
      href: "/services/tiktok/sun.jpg",
      title: "Stress-free process",
      desc: "Dealing with account suspensions can be stressful. Our friendly consultants handle all aspects of the reinstatement process, providing not only technical support but also emotional reassurance, making the experience as smooth as possible.",
    },
    {
      href: "/services/tiktok/laptop.jpg",
      title: "Rapid problem resolution",
      desc: "We understand the urgency of account suspensions. Our team, including former employees, leverages insider knowledge to resolve issues swiftly and effectively, minimizing downtime for your business.",
    },
    {
      href: "/services/tiktok/ranking.jpg",
      title: "Expert legal assistance",
      desc: "Our team provides comprehensive legal support tailored to platform-specific reinstatement requirements. With strategic appeal plans, we ensure a higher success rate in getting your account reinstated.",
    },
  ];
  const servicesData = [
    {
      icon: UserRoundSearchIcon,
      title: "Comprehensive account evaluation",
      desc: "We start with a thorough analysis of your suspended account to understand the specific reasons for the suspension. This helps us craft a precise and effective Plan of Action tailored to your situation.",
    },
    {
      icon: ArrowsUpFromLineIcon,
      title: "Tailored plan of action",
      desc: "Our experts create a detailed, customized Plan of Action that addresses all account reinstatement requirements. This plan is strategically designed to tackle the root causes of your suspension and demonstrate compliance.",
    },
    {
      icon: NavigationIcon,
      title: "Legal guidance and support",
      desc: "We provide legal assistance to navigate account complex reinstatement process. Our team of former employees uses their insider knowledge to ensure that all legal aspects are covered, increasing your chances of a successful appeal.",
    },
    {
      icon: MailPlusIcon,
      title: "Ongoing communication with the platform",
      desc: "We manage all communication with the platform on your behalf. Our team stays in constant contact with platform representatives to provide updates, respond to inquiries, and push for a swift resolution.",
    },
    {
      icon: HandHeartIcon,
      title: "Stress management and support",
      desc: "Our dedicated consultants offer emotional support throughout the reinstatement process. We handle the stressful aspects of dealing with the platform, allowing you to focus on your business while we work on getting your account back.",
    },
    {
      icon: LockOpenIcon,
      title: "Post-reinstatement strategies",
      desc: "After your account is reinstated, we provide strategies and recommendations to prevent future suspensions. Our team helps you implement best practices for account management, ensuring long-term stability and compliance with platform policies.",
    },
  ];
  const faqData = [
    {
      title: "What causes account suspensions?",
      desc: "Account suspensions can result from various reasons such as policy violations, performance issues, or suspected fraudulent activities. Our experts analyze your case comprehensively to determine the root cause and devise a tailored strategy for reinstatement",
    },
    {
      title: "How long does the reinstatement process take?",
      desc: "The duration varies depending on the complexity of the suspension reason and the responsiveness of platform. Generally, our proactive approach ensures a swift resolution, with many cases resolved within days to weeks.",
    },
    {
      title: "How can i get started with your reinstatement services?",
      desc: "To begin, schedule a consultation with our reinstatement specialists. We'll assess your situation, provide a comprehensive analysis, and recommend the best course of action. Our goal is to alleviate your concerns and swiftly restore your platform selling privileges.",
    },
    {
      title: "What is included in your Plan of Action (POA)?",
      desc: "Our detailed Plan of Action addresses all aspects required by platform for reinstatement, including root cause analysis, corrective actions taken, preventive measures implemented, and compelling evidence to support your case.",
    },
    {
      title: "Do you guarantee reinstatement of accounts?",
      desc: "While we have a high success rate, reinstatement cannot be guaranteed due to platform discretion in evaluating each appeal. However, our experienced team maximizes your chances by adhering strictly to platform guidelines and leveraging proven strategies.",
    },
  ];

  TabName(" | Account Reinstatement");
  return (
    <section className="flex flex-col w-full min-h-screen">
      {/* Hero */}
      <ServicesHero
        title={
          <h1 className="text-white text-3xl font-bold max-md:text-center">
            Amazon Account Reinstatement Services that{" "}
            <div className="inline-flex bg-black text-gold px-4 py-2 rounded-full">
              Specialize
            </div>{" "}
            in Reviving Suspended Seller Accounts
          </h1>
        }
        desc="Stressed about your suspended seller account?"
      />
      <MaxWidthWrapper classNames="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-2 py-10">
        <div className="flex flex-col max-md:items-center gap-5">
          <h1 className="text-charcoal font-semibold text-2xl md:text-3xl">
            Multiple Account Management
          </h1>
          <p className="text-base max-md:text-center">
            Running multiple Amazon accounts is a leading cause of account
            suspension—and it can really mess up your earnings. At ecomasis, we
            understand how it can negatively impact your profits. We have a team
            of legal account reinstatement specialists who have the expertise to
            save your multiple accounts from getting suspended. If needed, we
            also help you fight a case, make it up, and live so you can start
            earning from it again.
          </p>
          <CTAButton />
        </div>
        <img
          src="/services/reinstatement/image1.png"
          alt="Image 1"
          className="mx-auto w-[400px] md:w-full object-contain"
        />
      </MaxWidthWrapper>
      <MaxWidthWrapper classNames="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-2 py-10">
        <img
          src="/services/reinstatement/image2.png"
          alt="Image 2"
          className="mx-auto w-[400px] md:w-full object-contain"
        />
        <div className="flex flex-col max-md:items-center gap-5">
          <h1 className="text-charcoal font-semibold text-2xl md:text-3xl">
            Product Complaints
          </h1>
          <p className="text-base max-md:text-center">
            Amazon offers a convenient experience to its consumers, which is why
            it takes inauthentic product complaints very seriously. The sale of
            counterfeit products on platform is strictly forbidden, but
            sometimes platform bans your store if it fails to meet platform's
            unknown standards. This is where our Amazon account reactivation
            services come into play! With our extensive knowledge and expertise,
            we take charge of your account and make it live again.
          </p>
          <CTAButton />
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper classNames="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-2 py-10">
        <div className="flex flex-col max-md:items-center gap-5">
          <h1 className="text-charcoal font-semibold text-2xl md:text-3xl">
            Intellectual Property Issues & Complaints
          </h1>
          <p className="text-base max-md:text-center">
            Is your account being suspended due to intellectual property issues?
            Well, we won’t let that happen. Our Amazon seller account
            reinstatement services assist in addressing and resolving any
            intellectual property issues or complaints. From identifying
            infringing listings to working with legal counsel to protect your
            intellectual property rights, we work diligently to ensure that your
            brand and products are protected on the platform.
          </p>
          <CTAButton />
        </div>
        <img
          src="/services/reinstatement/image3.png"
          alt="Image 3"
          className="mx-auto w-[400px] md:w-full object-contain"
        />
      </MaxWidthWrapper>
      <MaxWidthWrapper classNames="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-2 py-10">
        <img
          src="/services/reinstatement/image4.png"
          alt="Image 4"
          className="mx-auto w-[400px] md:w-full object-contain"
        />
        <div className="flex flex-col max-md:items-center gap-5">
          <h1 className="text-charcoal font-semibold text-2xl md:text-3xl">
            Fake Reviews and Manipulation
          </h1>
          <p className="text-base max-md:text-center">
            Dealing with fake reviews can be super stressful. Not addressing
            this matter timely manner can significantly impact your seller
            account’s standing on Amazon. Our team dedicated to Amazon account
            reactivation services, helps in addressing and resolving these
            issues promptly. Our account reinstatement service includes
            identifying fake reviews, removing them, and implementing strategies
            to prevent future manipulation. We work closely with Amazon’s
            policies and guidelines to ensure an unscathed account reputation.
          </p>
          <CTAButton />
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper classNames="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-2 py-10">
        <div className="flex flex-col max-md:items-center gap-5">
          <h1 className="text-charcoal font-semibold text-2xl md:text-3xl">
            Reputation Management
          </h1>
          <p className="text-base max-md:text-center">
            Are negative reviews staining your account’s reputation on Amazon?
            Well, our Amazon account reinstatement services can help you turn
            things around. We keep a close check on negative feedback, address
            it timely, and turn those into a power move. And if your account’s
            already suspended due to the negative feedback, we will help you
            reinstate it in the shortest possible time.
          </p>
          <CTAButton />
        </div>
        <img
          src="/services/reinstatement/image5.png"
          alt="Image 5"
          className="mx-auto w-[400px] md:w-full object-contain"
        />
      </MaxWidthWrapper>
      <MaxWidthWrapper classNames="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-2 py-10">
        <img
          src="/services/reinstatement/image6.png"
          alt="Image 6"
          className="mx-auto w-[400px] md:w-full object-contain"
        />
        <div className="flex flex-col max-md:items-center gap-5">
          <h1 className="text-charcoal font-semibold text-2xl md:text-3xl">
            Reinstating Restricted Products
          </h1>
          <p className="text-base max-md:text-center">
            It’s common for many products to be removed from Amazon due to
            restrictions or policy violations. Our Amazon reinstatement services
            can help shield you against this as well. With our experience and
            expertise, we will help you reinstate these products by identifying
            the issue and resolving the root cause.
          </p>
          <CTAButton />
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper classNames="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-2 py-10">
        <div className="flex flex-col max-md:items-center gap-5">
          <h1 className="text-charcoal font-semibold text-2xl md:text-3xl">
            Inaccurate Product Descriptions
          </h1>
          <p className="text-base max-md:text-center">
            Are your customers complaining about items not being as described?
            No worries, let us take the lead. Our team of Amazon reinstatement
            appeal experts will not only understand and prepare an appeal but
            also take the necessary measures to prevent something like this from
            happening again in the future.
          </p>
          <CTAButton />
        </div>
        <img
          src="/services/reinstatement/image7.png"
          alt="Image 7"
          className="mx-auto w-[400px] md:w-full object-contain"
        />
      </MaxWidthWrapper>
      <MaxWidthWrapper classNames="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-2 py-10">
        <img
          src="/services/reinstatement/image8.png"
          alt="Image 8"
          className="mx-auto w-[400px] md:w-full object-contain"
        />
        <div className="flex flex-col max-md:items-center gap-5">
          <h1 className="text-charcoal font-semibold text-2xl md:text-3xl">
            The Pricing Issue
          </h1>
          <p className="text-base max-md:text-center">
            You don’t have to deal with the price-fixing issues alone. Let our
            team of Amazon account reinstatement service handle it for you. We
            will help you step out of this situation and even assist you in
            implementing strategies ensuring your products are back on Amazon on
            time.
          </p>
          <CTAButton />
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper classNames="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-2 py-10">
        <div className="flex flex-col max-md:items-center gap-5">
          <h1 className="text-charcoal font-semibold text-2xl md:text-3xl">
            FBM Issues
          </h1>
          <p className="text-base max-md:text-center">
            Fulfillment by Merchant (FBM) issues are quite common on Amazon. So,
            take a back seat while we take charge of the steering wheel. We have
            a track record of successfully handling these issues. Helping our
            clients with the reinstatement of their suspended accounts and
            resumed sales. The FBM policies can, sometimes, be too complex to
            understand, but we address all issues so that you can enjoy an
            undisturbed selling experience.
          </p>
          <CTAButton />
        </div>
        <img
          src="/services/reinstatement/image9.png"
          alt="Image 9"
          className="mx-auto w-[400px] md:w-full object-contain"
        />
      </MaxWidthWrapper>

      <div className="flex flex-col min-h-screen items-center justify-center py-10 px-2">
        <MaxWidthWrapper classNames="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-charcoal text-2xl md:text-3xl font-bold">
              How We Do It at ecomasis?
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
              src="/services/reinstatement/account-reinstatement.jpg"
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
                Become a stable seller with our proven Amazon reinstatement
                services
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
                Choose our Amazon seller account reinstatement services, sit
                back, and relax while we do the heavy lifting for you!
              </p>
              <CTAButton />
            </div>
            <img
              src="/services/reinstatement/amazon.jpg"
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
                With ecomasis’s Amazon Account Reinstatement Service, Your
                Comeback Is Just a Matter of Time
              </h1>
              <p className="text-charcoal text-sm">
                At ecomasis, our experts specialize in reinstating suspended
                accounts. We understand the frustration and difficulties caused
                by a suspended account. Trust our Amazon reinstatement services
                to get your account up and live without any hassle.
              </p>
              <p className="text-charcoal text-sm">
                Drafting a Plan of Action is crucial for regaining access to
                your account. Platforms often withhold specific reasons for
                suspensions. Our team provides detailed legal assistance,
                ensuring compliance with Amazon account reinstatement
                requirements for strategic and successful appeals.
              </p>
              <h2 className="text-gold font-semibold text-2xl">
                Proven expertise and reliable support
              </h2>
              <h3 className="text-charcoal font-semibold text-xl">
                Our Amazon account reinstatement service is efficient and
                effective!
              </h3>
              <p className="text-charcoal text-sm">
                We strive to offer quick and effective solutions. Rely on our
                expertise to manage your account issues, reduce your stress, and
                provide emotional support throughout the process.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen flex items-center justify-center py-10 px-2">
        <MaxWidthWrapper classNames="flex flex-col gap-12 max-md:items-center">
          <h1 className="text-charcoal font-bold text-2xl md:text-3xl">
            Unlock the Benefits with Our Amazon Account Reinstatement Services
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
              Our Amazon account reinstatement services include
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
