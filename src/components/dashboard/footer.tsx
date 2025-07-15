import { PhoneIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const data = [
    {
      title: "Services",
      links: [
        {
          label: "Amazon FBA Automation",
          href: "/amazon-automation",
        },
        {
          label: "Amazon Private Label",
          href: "/amazon-private-label",
        },
        {
          label: "Account Reinstatement",
          href: "/account-reinstatement",
        },
        {
          label: "Tiktok Shop Automation",
          href: "/tiktok-shop-automation",
        },
        {
          label: "Walmart Automation",
          href: "/walmart-automation",
        },
        {
          label: "Shopify Automation",
          href: "/shopify-dropshipping-automation",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "About",
          href: "/about",
        },
        {
          label: "Contact",
          href: "/contact",
        },
        {
          label: "FAQ's",
          href: "/faq",
        },
        // {
        //   label: "Privacy Policy",
        //   href: "/",
        // },
        // {
        //   label: "Term of Services",
        //   href: "/",
        // },
      ],
    },
    {
      title: "Find Us",
      links: [
        {
          label: "777 S Central Expy #4h Richardson, TX 75080, USA",
          href: "#footer",
        },
      ],
    },
  ];
  return (
    <footer
      id="footer"
      className="bg-black flex flex-col min-h-screen pt-20 pb-5 gap-10"
    >
      <div className="flex justify-between px-2 max-w-5xl max-md:gap-8 flex-col md:flex-row w-full mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h3 className="text-white font-medium text-lg">{item.title}</h3>
            <div className="flex flex-col gap-1">
              {item.links.map((item, i) => (
                <Link
                  key={i}
                  to={item.href}
                  className="text-gray-200 text-base font-extralight"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 bg-white py-14 items-center">
        <div className="flex items-center gap-1">
          <h3 className="text-charcoal text-base">Let&apos;s Talk.</h3>
          <PhoneIcon className="size-4 text-charcoal" />
        </div>
        <a
          href="tel:+1(469) 935-7701"
          className="text-gold font-medium text-3xl"
        >
          +1(469) 935-7701
        </a>
        <a href="mailto:info@ecomasis.com">info@ecomasis.com</a>
      </div>
      <div className="w-full  mx-auto -mt-8">
        <h1 className="text-white font-extralight text-3xl lg:text-[170px] text-center">
          Ecomasis
        </h1>
      </div>
      <p className="text-white text-center my-2">
        Copyright © 2025 ECOM ASIS. All Rights Reserved.
      </p>
    </footer>
  );
};
