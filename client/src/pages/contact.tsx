import { CTAButton } from "@/components/cta-button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TabName } from "@/lib/tab-name";
import { MapPin } from "lucide-react";

const Contact = () => {
  const faqData = [
    {
      title: "What is ecomasis, and what does it do?",
      desc: "ecomasis is a digital consultancy firm that specializes in guiding individuals and businesses through the process of starting, growing, and optimizing their ventures for success.",
    },
    {
      title: "How can ecomasis help my business?",
      desc: "ecomasis offers tailored strategies, expert guidance, and solutions to help businesses increase revenue, optimize operations, and achieve their goals.",
    },
    {
      title: "What services does ecomasis provide?",
      desc: "ecomasis offers a range of services, including business planning, digital marketing, brand development, and more. Explore our services page for details.",
    },
    {
      title: "Is ecomasis only for startups?",
      desc: "No, ecomasis caters to both startups and established businesses looking to enhance their revenue streams and expand their market presence.",
    },
    {
      title: "Can I get a personalized business plan from ecomasis?",
      desc: "Yes, ecomasis provides personalized business plans tailored to your specific goals and needs.",
    },
    {
      title: "How do I schedule a consultation with ecomasis?",
      desc: "You can schedule a consultation by visiting our contact page or reaching out via email or phone.",
    },
    {
      title: "Is ecomasis's guidance confidential?",
      desc: "Yes, ecomasis values your privacy and follows strict confidentiality practices. We do not share your information without your consent.",
    },
    {
      title: "What industries does ecomasis specialize in?",
      desc: "ecomasis has experience across various industries, including e-commerce, digital marketing, technology, and more. We adapt our strategies to fit your industry.",
    },
    {
      title: "How long does it take to see results with ecomasis?",
      desc: "Results vary based on your goals and industry, but many clients experience positive outcomes within a few months.",
    },
    {
      title: "Does ecomasis offer ongoing support?",
      desc: "Yes, we provide ongoing support to help you adapt and grow as your business evolves.",
    },
  ];

  TabName(" | Contact");

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
                    <MapPin /> 777 S Central Expy #4h Richardson, TX 75080, USA
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
                <a
                  href="tel:+1(469) 935-7701"
                  className="flex items-center gap-2 text-white text-sm"
                >
                  +1(469) 935-7701
                </a>
                <a
                  href="mailto:info@ecomasis.com"
                  className="flex items-center gap-2 text-white text-sm"
                >
                  info@ecomasis.com
                </a>
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
