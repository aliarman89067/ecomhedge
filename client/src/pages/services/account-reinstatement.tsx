import { CTAButton } from "@/components/cta-button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { FormBox } from "@/components/service/form";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TabName } from "@/lib/tab-name";
import {
  ArrowsUpFromLineIcon,
  ChartColumnBigIcon,
  DicesIcon,
  DollarSignIcon,
  HandHeartIcon,
  LockOpenIcon,
  MailPlusIcon,
  NavigationIcon,
  StoreIcon,
  SunIcon,
  ThumbsUpIcon,
  UserRoundSearchIcon,
} from "lucide-react";
import { InfoCols } from "@/components/about/info-cols";
import { MouseParallax } from "react-just-parallax";
import { ReinstatementCols } from "@/components/service/reinstatement-cols";
import { useContext } from "react";
import { FormContext } from "@/context/form-context";

export const AccountReinstatement = () => {
  const { setIsOpen } = useContext(FormContext);
  const gridData = [
    {
      icon: DollarSignIcon,
      label: "Amazon insider expertise",
      desc: "We understand Amazon's internal processes and leverage this insider knowledge to navigate account reinstatement challenges effectively.",
    },
    {
      icon: DicesIcon,
      label: "Tailored strategies for success",
      desc: "Each account reinstatement case on Amazon is unique, so we craft customized strategies and Plans of Action tailored to your specific suspension reasons and business circumstances.",
    },
    {
      icon: ThumbsUpIcon,
      label: "Proven success record",
      desc: "With a track record of successfully reinstating numerous Amazon accounts, we have the expertise and strategies that yield results.",
    },
    {
      icon: NavigationIcon,
      label: "Support and guidance",
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
  const benefitsData = [
    {
      icon: SunIcon,
      label: "Stress-free process",
      desc: "Dealing with account suspensions can be stressful. Our friendly consultants handle all aspects of the reinstatement process, providing not only technical support but also emotional reassurance, making the experience as smooth as possible.",
    },
    {
      icon: StoreIcon,
      label: "Rapid problem resolution",
      desc: "We understand the urgency of account suspensions. Our team, including former employees, leverages insider knowledge to resolve issues swiftly and effectively, minimizing downtime for your business.",
    },
    {
      icon: ChartColumnBigIcon,
      label: "Expert legal assistance",
      desc: "Our team provides comprehensive legal support tailored to platform-specific reinstatement requirements. With strategic appeal plans, we ensure a higher success rate in getting your account reinstated.",
    },
  ];
  const servicesData = [
    {
      icon: UserRoundSearchIcon,
      label: "Comprehensive account evaluation",
      desc: "We start with a thorough analysis of your suspended account to understand the specific reasons for the suspension. This helps us craft a precise and effective Plan of Action tailored to your situation.",
    },
    {
      icon: ArrowsUpFromLineIcon,
      label: "Tailored plan of action",
      desc: "Our experts create a detailed, customized Plan of Action that addresses all account reinstatement requirements. This plan is strategically designed to tackle the root causes of your suspension and demonstrate compliance.",
    },
    {
      icon: NavigationIcon,
      label: "Legal guidance and support",
      desc: "We provide legal assistance to navigate account complex reinstatement process. Our team of former employees uses their insider knowledge to ensure that all legal aspects are covered, increasing your chances of a successful appeal.",
    },
    {
      icon: MailPlusIcon,
      label: "Ongoing communication with the platform",
      desc: "We manage all communication with the platform on your behalf. Our team stays in constant contact with platform representatives to provide updates, respond to inquiries, and push for a swift resolution.",
    },
    {
      icon: HandHeartIcon,
      label: "Stress management and support",
      desc: "Our dedicated consultants offer emotional support throughout the reinstatement process. We handle the stressful aspects of dealing with the platform, allowing you to focus on your business while we work on getting your account back.",
    },
    {
      icon: LockOpenIcon,
      label: "Post-reinstatement strategies",
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
                Amazon Account Reinstatement Services that{" "}
                <span className="relative">
                  Specialize
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
                in Reviving Suspended Seller Accounts.
              </h1>
              <p className="bebas font-light text-gray-400 text-lg sm:text-xl xl:text-2xl max-lg:text-center tracking-wider mb-5">
                Stressed about your suspended seller account?
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
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute scale-y-[-1] inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-screen flex items-center">
          <ReinstatementCols
            headingP1="Multiple"
            headingP2="Account"
            headingP3="Management"
            desc="Running multiple Amazon accounts is a leading cause of account suspension—and it can really mess up your earnings. At Ecom Automations Hub, we understand how it can negatively impact your profits. We have a team of legal account reinstatement specialists who have the expertise to save your multiple accounts from getting suspended. If needed, we also help you fight a case, make it up, and live so you can start earning from it again."
            imageHref="/new/services/image1.png"
            isFlip={false}
          />
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-screen flex items-center">
          <ReinstatementCols
            headingP1="Product"
            headingP2="Complaints"
            desc="Amazon offers a convenient experience to its consumers, which is why it takes inauthentic product complaints very seriously. The sale of counterfeit products on platform is strictly forbidden, but sometimes platform bans your store if it fails to meet platform's unknown standards. This is where our Amazon account reactivation services come into play! With our extensive knowledge and expertise, we take charge of your account and make it live again."
            imageHref="/new/services/image2.png"
            isFlip={true}
          />
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute scale-y-[-1] inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-screen flex items-center">
          <ReinstatementCols
            headingP1="Intellectual Property"
            headingP2="Issues"
            headingP3="& Complaints"
            desc="Is your account being suspended due to intellectual property issues? Well, we won’t let that happen. Our Amazon seller account reinstatement services assist in addressing and resolving any intellectual property issues or complaints. From identifying infringing listings to working with legal counsel to protect your intellectual property rights, we work diligently to ensure that your brand and products are protected on the platform."
            imageHref="/new/services/image3.png"
            isFlip={false}
          />
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-screen flex items-center">
          <ReinstatementCols
            headingP1="Fake"
            headingP2="Reviews"
            headingP3="and Manipulation"
            desc="Dealing with fake reviews can be super stressful. Not addressing this matter timely manner can significantly impact your seller account’s standing on Amazon. Our team dedicated to Amazon account reactivation services, helps in addressing and resolving these issues promptly. Our account reinstatement service includes identifying fake reviews, removing them, and implementing strategies to prevent future manipulation. We work closely with Amazon’s policies and guidelines to ensure an unscathed account reputation."
            imageHref="/new/services/image4.png"
            isFlip={true}
          />
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute scale-y-[-1] inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-screen flex items-center">
          <ReinstatementCols
            headingP1="Reputation"
            headingP2="Management"
            desc="Are negative reviews staining your account’s reputation on Amazon? Well, our Amazon account reinstatement services can help you turn things around. We keep a close check on negative feedback, address it timely, and turn those into a power move. And if your account’s already suspended due to the negative feedback, we will help you reinstate it in the shortest possible time."
            imageHref="/new/services/image5.png"
            isFlip={false}
          />
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-screen flex items-center">
          <ReinstatementCols
            headingP1="Reinstating"
            headingP2="Restricted"
            headingP3="Products"
            desc="It’s common for many products to be removed from Amazon due to restrictions or policy violations. Our Amazon reinstatement services can help shield you against this as well. With our experience and expertise, we will help you reinstate these products by identifying the issue and resolving the root cause."
            imageHref="/new/services/image6.png"
            isFlip={true}
          />
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute scale-y-[-1] inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-screen flex items-center">
          <ReinstatementCols
            headingP1="Inaccurate"
            headingP2="Product"
            headingP3="Descriptions"
            desc="Are your customers complaining about items not being as described? No worries, let us take the lead. Our team of Amazon reinstatement appeal experts will not only understand and prepare an appeal but also take the necessary measures to prevent something like this from happening again in the future."
            imageHref="/new/services/image7.png"
            isFlip={false}
          />
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-screen flex items-center">
          <ReinstatementCols
            headingP1="The"
            headingP2="Pricing"
            headingP3="Issue"
            desc="You don’t have to deal with the price-fixing issues alone. Let our team of Amazon account reinstatement service handle it for you. We will help you step out of this situation and even assist you in implementing strategies ensuring your products are back on Amazon on time."
            imageHref="/new/services/image8.png"
            isFlip={true}
          />
        </MaxWidthWrapper>
      </div>
      <div className="w-full min-h-screen relative py-5">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute scale-y-[-1] inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-screen flex items-center">
          <ReinstatementCols
            headingP1="FBM"
            headingP2="Issues"
            desc="Fulfillment by Merchant (FBM) issues are quite common on Amazon. So, take a back seat while we take charge of the steering wheel. We have a track record of successfully handling these issues. Helping our clients with the reinstatement of their suspended accounts and resumed sales. The FBM policies can, sometimes, be too complex to understand, but we address all issues so that you can enjoy an undisturbed selling experience."
            imageHref="/new/services/image9.png"
            isFlip={false}
          />
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
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>

        {/* Content Wrapper */}
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-screen flex flex-col gap-10 items-center">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
            How We Do It at{" "}
            <span className="relative">
              Ecom
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
            Automations Hub?
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
                  Become a stable seller with our proven Amazon reinstatement
                  services.
                </span>
                <div className="w-full h-[1px] bg-secondary" />
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">1.</span>
                    <span className="text-white">
                      Catering to every type of seller suspension
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">2.</span>
                    <span className="text-white">
                      Offering a 50-100% refund guarantee
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">3.</span>
                    <span className="text-white">
                      Multiple free appeals for the same case
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">4.</span>
                    <span className="text-white">
                      We help you generate profits!
                    </span>
                  </div>
                </div>
                <span className="text-secondary text-lg">
                  Choose our Amazon seller account reinstatement services, sit
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
                src="/new/services/reinstatement.jpg"
                alt="Person Image"
                className="w-full h-full rounded-xl object-cover max-md:hidden"
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl">
                  With Ecom Automations Hub’s{" "}
                  <span className="relative">
                    Amazon
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
                  Account Reinstatement Service, Your Comeback Is Just a Matter
                  of Time
                </h1>
                <span className="text-secondary">
                  At Ecom Automations Hub, our experts specialize in reinstating
                  suspended accounts. We understand the frustration and
                  difficulties caused by a suspended account. Trust our Amazon
                  reinstatement services to get your account up and live without
                  any hassle. Drafting a Plan of Action is crucial for regaining
                  access to your account. Platforms often withhold specific
                  reasons for suspensions. Our team provides detailed legal
                  assistance, ensuring compliance with Amazon account
                  reinstatement requirements for strategic and successful
                  appeals.
                </span>

                <h1 className="text-white font-extrabold text-xl md:text-2xl">
                  Proven expertise and reliable support
                </h1>
                <span className="text-secondary">
                  Our Amazon account reinstatement service is efficient and
                  effective!
                  <br />
                  <br />
                  We strive to offer quick and effective solutions. Rely on our
                  expertise to manage your account issues, reduce your stress,
                  and provide emotional support throughout the process.
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
            Unlock the{" "}
            <span className="relative">
              Benefits
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
            with Our Amazon Account Reinstatement Services
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
            Our Amazon Account{" "}
            <span className="relative">
              Reinstatement
              <svg
                viewBox="0 0 290 150"
                fill="none"
                className="absolute -left-2 -right-2 -top-6 bottom-0 translate-y-1"
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
            Services Include
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
                className="absolute -left-2 -right-2 top-2 bottom-0 translate-y-1"
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
