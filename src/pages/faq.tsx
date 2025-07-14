import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqData = [
    {
      title: "What is EcomHike, and what does it do?",
      desc: "EcomHike is a digital consultancy firm that specializes in guiding individuals and businesses through the process of starting, growing, and optimizing their ventures for success.",
    },
    {
      title: "How can EcomHike help my business?",
      desc: "EcomHike offers tailored strategies, expert guidance, and solutions to help businesses increase revenue, optimize operations, and achieve their goals.",
    },
    {
      title: "What services does EcomHike provide?",
      desc: "EcomHike offers a range of services, including business planning, digital marketing, brand development, and more. Explore our services page for details.",
    },
    {
      title: "Is EcomHike only for startups?",
      desc: "No, EcomHike caters to both startups and established businesses looking to enhance their revenue streams and expand their market presence.",
    },
    {
      title: "Can I get a personalized business plan from EcomHike?",
      desc: "Yes, EcomHike provides personalized business plans tailored to your specific goals and needs.",
    },
    {
      title: "How do I schedule a consultation with EcomHike?",
      desc: "You can schedule a consultation by visiting our contact page or reaching out via email or phone.",
    },
    {
      title: "Is EcomHike's guidance confidential?",
      desc: "Yes, EcomHike values your privacy and follows strict confidentiality practices. We do not share your information without your consent.",
    },
    {
      title: "What industries does EcomHike specialize in?",
      desc: "EcomHike has experience across various industries, including e-commerce, digital marketing, technology, and more. We adapt our strategies to fit your industry.",
    },
    {
      title: "How long does it take to see results with EcomHike?",
      desc: "Results vary based on your goals and industry, but many clients experience positive outcomes within a few months.",
    },
    {
      title: "Does EcomHike offer ongoing support?",
      desc: "Yes, we provide ongoing support to help you adapt and grow as your business evolves.",
    },
  ];

  return (
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
  );
};
export default Faq;
