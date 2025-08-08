import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from "lucide-react";
import { TiSocialPinterest } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";

import { Link } from "react-router-dom";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { Button } from "../ui/button";

export const Footer = () => {
  const data = [
    {
      title: "Services",
      links: [
        {
          label: "Amazon FBA Automation",
          href: "/amazon-fba-automation",
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
        {
          label: "Privacy Policy",
          href: "/privacy-policy",
        },
        {
          label: "Term of Services",
          href: "term-of-services",
        },
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
    <section className="relative w-full flex bg-[url(/new/background.png)] bg-cover justify-center">
      <img
        src="/new/noise.png"
        alt="Noise Image"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
      />
      <MaxWidthWrapper classNames="flex w-full flex-col gap-5 justify-between">
        <div className="flex flex-wrap gap-20 w-full py-14">
          <div className="flex flex-col gap-3">
            <img src="/logo.png" alt="Logo" className="w-28 object-contain" />
            <p className="text-white text-lg bebas tracking-wider">
              Start your business today.
            </p>
            <a href="tel:+1(469) 935-7701">
              <Button variant="secondary" className="w-full py-5 text-white">
                <PhoneIcon />
                +1(469) 935-7701
              </Button>
            </a>
            <a
              href="mailto:info@ecomautomationshub.com"
              className="text-white flex items-center gap-2"
            >
              <MailIcon className="size-5" />
              info@ecomautomationshub.com
            </a>
            <div className="flex gap-4 items-center">
              <FacebookIcon className="text-white size-6 hover:text-secondary cursor-pointer transition-all duration-200 ease-in-out" />
              <InstagramIcon className="text-white size-6 hover:text-secondary cursor-pointer transition-all duration-200 ease-in-out" />
              <TiSocialPinterest className="text-white size-6 hover:text-secondary cursor-pointer transition-all duration-200 ease-in-out" />
              <BsTwitterX className="text-white size-6 hover:text-secondary cursor-pointer transition-all duration-200 ease-in-out" />
            </div>
          </div>
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h2 className="text-white text-lg font-semibold">{item.title}</h2>
              <div className="flex flex-col gap-1">
                {item.links.map((link, i) => (
                  <Link
                    key={i}
                    to={link.href}
                    className="text-secondary text-base font-light"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pb-10">
          <p className="text-center text-white text-base font-light">
            Copyright © 2025 Ecom Automations Hub. All Rights Reserved.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
