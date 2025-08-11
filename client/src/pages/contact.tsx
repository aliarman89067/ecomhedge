import { CTAButton } from "@/components/cta-button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FormContext } from "@/context/form-context";
import { motion } from "framer-motion";
import { MailIcon, MapIcon, PhoneIcon } from "lucide-react";
import { useContext } from "react";

const Contact = () => {
  const { setIsOpen } = useContext(FormContext);
  const faqData = [
    {
      title: "What is Ecom Automations Hub, and what does it do?",
      desc: "Ecom Automations Hub is a digital consultancy firm that specializes in guiding individuals and businesses through the process of starting, growing, and optimizing their ventures for success.",
    },
    {
      title: "How can Ecom Automations Hub help my business?",
      desc: "Ecom Automations Hub offers tailored strategies, expert guidance, and solutions to help businesses increase revenue, optimize operations, and achieve their goals.",
    },
    {
      title: "What services does Ecom Automations Hub provide?",
      desc: "Ecom Automations Hub offers a range of services, including business planning, digital marketing, brand development, and more. Explore our services page for details.",
    },
    {
      title: "Is Ecom Automations Hub only for startups?",
      desc: "No, Ecom Automations Hub caters to both startups and established businesses looking to enhance their revenue streams and expand their market presence.",
    },
    {
      title:
        "Can I get a personalized business plan from Ecom Automations Hub?",
      desc: "Yes, Ecom Automations Hub provides personalized business plans tailored to your specific goals and needs.",
    },
    {
      title: "How do I schedule a consultation with Ecom Automations Hub?",
      desc: "You can schedule a consultation by visiting our contact page or reaching out via email or phone.",
    },
    {
      title: "Is Ecom Automations Hub's guidance confidential?",
      desc: "Yes, Ecom Automations Hub values your privacy and follows strict confidentiality practices. We do not share your information without your consent.",
    },
    {
      title: "What industries does Ecom Automations Hub specialize in?",
      desc: "Ecom Automations Hub has experience across various industries, including e-commerce, digital marketing, technology, and more. We adapt our strategies to fit your industry.",
    },
    {
      title: "How long does it take to see results with Ecom Automations Hub?",
      desc: "Results vary based on your goals and industry, but many clients experience positive outcomes within a few months.",
    },
    {
      title: "Does Ecom Automations Hub offer ongoing support?",
      desc: "Yes, we provide ongoing support to help you adapt and grow as your business evolves.",
    },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col bg-cover justify-center overflow-hidden">
      <div className="w-full relative">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <div className="relative w-full min-h-screen lg:h-screen py-20 flex flex-col">
            <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
              <span className="relative">
                Contact
                <svg
                  viewBox="0 0 290 150"
                  fill="none"
                  className="absolute -left-2 -right-2 top-1 bottom-0 translate-y-1"
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
              Us.
            </h1>
            <div className="relative grid grid-cols-1 md:grid-cols-2 w-full h-full gap-5 mt-10">
              <div className="relative w-full h-full px-3 py-3 flex items-center justify-center rounded-xl overflow-hidden bg-secondary/20">
                <div className="absolute overflow-hidden -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
                <img
                  src="/new/noise.png"
                  alt="Noise Image"
                  className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative w-full h-full px-3 py-10 md:py-3 flex rounded-xl bg-secondary/10  flex-col gap-2">
                  <motion.img
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                    src="/new/about/moon.jpg"
                    alt="Moon"
                    className="absolute opacity-60 -bottom-10 left-0 w-full object-contain mask-gradient-snap-edges"
                  />
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl w-full lg:w-[90%] font-bold text-white relative">
                    Find Us
                  </h1>
                  <div className="flex gap-2 items-center">
                    <MapIcon className="text-white size-4" />
                    <span className="text-white text-base">
                      777 S Central Expy #4h Richardson, TX 75080, USA
                    </span>
                  </div>
                  <CTAButton
                    title="Get Started"
                    onClick={() => setIsOpen(true)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5">
                <div className="relative w-full h-full p-3 flex items-center justify-center rounded-xl bg-secondary/20">
                  <div className="absolute overflow-hidden -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
                  <img
                    src="/new/noise.png"
                    alt="Noise Image"
                    className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="w-full h-full px-3 py-10 md:py-3 gap-3 flex items-center justify-center flex-col rounded-xl bg-secondary/10">
                    <h1 className="text-2xl font-bold text-white relative">
                      Contact Info
                    </h1>
                    <div className="flex flex-col items-center">
                      <a
                        href="tel:+1(469) 935-7701"
                        className="flex items-center gap-2"
                      >
                        <PhoneIcon className="text-white size-4" />
                        <span className="text-white text-base">
                          +1(469) 935-7701
                        </span>
                      </a>
                      <a
                        href="mailto:info@ecomautomationshub.com"
                        className="flex items-center gap-2"
                      >
                        <MailIcon className="text-white size-4" />
                        <span className="text-white text-base">
                          info@ecomautomationshub.com
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full p-3 flex items-center justify-center rounded-xl bg-secondary/20">
                  <div className="absolute overflow-hidden -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
                  <img
                    src="/new/noise.png"
                    alt="Noise Image"
                    className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="w-full h-full px-3 py-10 md:py-3 gap-3 flex items-center justify-center flex-col rounded-xl bg-secondary/10">
                    <h1 className="text-2xl font-bold text-white relative">
                      Ask a question
                    </h1>
                    <div className="flex flex-col items-center">
                      <span className="text-white text-base">
                        Our agents will get back to you as soon as possible.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full relative">
        <img
          src="/new/noise.png"
          alt="Noise Image"
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[url(/new/background.png)] scale-y-[-1] bg-cover"></div>
        <MaxWidthWrapper classNames="relative z-10 w-full min-h-full flex flex-col">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
            Frequently{" "}
            <span className="relative">
              Asked
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
            Questions.
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
    </section>
  );
};

export default Contact;
