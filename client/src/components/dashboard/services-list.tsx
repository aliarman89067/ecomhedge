import { ArrowRightIcon } from "lucide-react";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export const ServicesList = () => {
  const servicesData = [
    {
      label: "Amazon FBA Automation",
      desc: "Effortlessly scale your business with automated Amazon FBA solutions.",
      href: "/amazon-fba-automation",
      imgSrc: "/services-list/amazon-private-label.jpg",
    },
    {
      label: "Tiktok Shop Automation",
      desc: "Launch your TikTok Shop Store and earn Monthly passive income.",
      href: "/tiktok-shop-automation",
      imgSrc: "/services-list/tiktok-shop-automation.jpg",
    },
    {
      label: "Amazon Private Label",
      desc: "Effortlessly scale your business with automated Amazon FBA solutions.",
      href: "/amazon-private-label",
      imgSrc: "/services-list/amazon-label-automation.jpg",
    },
    {
      label: "Walmart Automation",
      desc: "Streamline your business operations, driving efficiency and success with Walmart Automation.",
      href: "/walmart-automation",
      imgSrc: "/services-list/walmart-automation.jpg",
    },
    {
      label: "Account Reinstatement",
      desc: "Efficient Solutions to Swiftly Regain Control of Your platform account",
      href: "/account-reinstatement",
      imgSrc: "/services-list/account-reinstatement.jpg",
    },
    {
      label: "Shopify Automation",
      desc: "Simplify your e-commerce success with automated Shopify dropshipping.",
      href: "/shopify-dropshipping-automation",
      imgSrc: "/services-list/shopify-automation.jpg",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="py-10 relative min-h-screen w-full flex flex-col overflow-hidden items-center justify-center px-2">
      <MaxWidthWrapper classNames="flex flex-col gap-10">
        <h1 className="text-charcoal font-bold text-4xl sm:text-5xl text-center">
          We Provide <span className="text-gold font-extrabold">Quality</span>{" "}
          Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-tl from-white to-gold/20 w-full rounded-xl overflow-hidden flex flex-col p-3 border border-charcoal"
            >
              <img
                src={item.imgSrc}
                alt="Services Image"
                className="w-full h-44 object-cover rounded-xl"
              />
              <div className="mt-4 flex flex-col w-full gap-2 min-h-32">
                <h1 className="text-charcoal text-2xl">{item.label}</h1>
                <p className="text-charcoal text-base">{item.desc}</p>
              </div>
              <Button onClick={() => navigate(item.href)} className="py-7">
                See Details <ArrowRightIcon />
              </Button>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
