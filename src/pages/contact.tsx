import { CTAButton } from "@/components/cta-button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin } from "lucide-react";

const Contact = () => {
  const faqData = [
    {
      title: "What is EcomHedge, and what does it do?",
      desc: "EcomHedge is a digital consultancy firm that specializes in guiding individuals and businesses through the process of starting, growing, and optimizing their ventures for success.",
    },
    {
      title: "How can EcomHedge help my business?",
      desc: "EcomHedge offers tailored strategies, expert guidance, and solutions to help businesses increase revenue, optimize operations, and achieve their goals.",
    },
    {
      title: "What services does EcomHedge provide?",
      desc: "EcomHedge offers a range of services, including business planning, digital marketing, brand development, and more. Explore our services page for details.",
    },
    {
      title: "Is EcomHedge only for startups?",
      desc: "No, EcomHedge caters to both startups and established businesses looking to enhance their revenue streams and expand their market presence.",
    },
    {
      title: "Can I get a personalized business plan from EcomHedge?",
      desc: "Yes, EcomHedge provides personalized business plans tailored to your specific goals and needs.",
    },
    {
      title: "How do I schedule a consultation with EcomHedge?",
      desc: "You can schedule a consultation by visiting our contact page or reaching out via email or phone.",
    },
    {
      title: "Is EcomHedge's guidance confidential?",
      desc: "Yes, EcomHedge values your privacy and follows strict confidentiality practices. We do not share your information without your consent.",
    },
    {
      title: "What industries does EcomHedge specialize in?",
      desc: "EcomHedge has experience across various industries, including e-commerce, digital marketing, technology, and more. We adapt our strategies to fit your industry.",
    },
    {
      title: "How long does it take to see results with EcomHedge?",
      desc: "Results vary based on your goals and industry, but many clients experience positive outcomes within a few months.",
    },
    {
      title: "Does EcomHedge offer ongoing support?",
      desc: "Yes, we provide ongoing support to help you adapt and grow as your business evolves.",
    },
  ];

  return (
    <section className="flex flex-col w-full h-full">
      {/* Hero */}
      <div className="py-10 px-2 relative min-h-screen w-full flex flex-col overflow-hidden items-center justify-center">
        <MaxWidthWrapper classNames="z-20">
          <div className="flex flex-col gap-3">
            <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
              Contact us
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="flex flex-col gap-3 w-full py-10 px-5 bg-charcoal rounded-xl">
                <h2 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl">
                  Find Us
                </h2>
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-2 text-white text-sm">
                    <MapPin /> 5429 Lyndon B Johnson Fwy #800, Dallas, TX 75240
                  </span>
                  <span className="flex items-center gap-2 text-white text-sm">
                    <MapPin /> 4140 Temescal Canyon Rd, Corona, CA 92883
                  </span>
                  <span className="flex items-center gap-2 text-white text-sm">
                    <MapPin /> 222 Jarvis St, Toronto, ON M5B 2B8
                  </span>
                  <span className="flex items-center gap-2 text-white text-sm">
                    <MapPin /> 782M+XWV - Port Saeed - Dubai - United Arab
                    Emirates
                  </span>
                  <span className="flex items-center gap-2 text-white text-sm">
                    <MapPin /> Tai Roshan Trade Center, Karachi, Pakistan -
                    74000
                  </span>
                  <div className="mt-3">
                    <CTAButton />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 w-full py-10 px-5 bg-charcoal rounded-xl">
                <h2 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl">
                  Contact Info
                </h2>
                <span className="flex items-center gap-2 text-white text-sm">
                  +1(469) 935-7701{" "}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 w-full py-10 px-5 bg-charcoal rounded-xl">
                <h2 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl">
                  Ask a question
                </h2>
                <span className="flex items-center gap-2 text-white text-sm text-center">
                  Our agents will get back to you as soon as possible.
                </span>
                <CTAButton />
              </div>
            </div>
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
    </section>
  );
};

export default Contact;
