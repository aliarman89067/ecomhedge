import { navbarLinks } from "@/constant";
import { ChevronDown, ChevronLeft, ChevronUp, MenuIcon } from "lucide-react";
import { MaxWidthWrapper } from "../max-width-wrapper";
import {
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetContent,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { CTAButton } from "../cta-button";

export const Navbar = () => {
  const location = useLocation();
  const [isServices, setIsServices] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(location.pathname); // Default to current path

  const servicesData = [
    {
      label: "Amazon FBA Automation",
      desc: "Effortlessly scale your business with automated Amazon FBA solutions.",
      href: "/amazon-fba-automation",
    },
    {
      label: "Tiktok Shop Automation",
      desc: "Launch your TikTok Shop Store and earn Monthly passive income.",
      href: "/tiktok-shop-automation",
    },
    {
      label: "Amazon Private Label",
      desc: "Effortlessly scale your business with automated Amazon FBA solutions.",
      href: "/amazon-private-label",
    },
    {
      label: "Walmart Automation",
      desc: "Streamline your business operations, driving efficiency and success with Walmart Automation.",
      href: "/walmart-automation",
    },
    {
      label: "Account Reinstatement",
      desc: "Efficient Solutions to Swiftly Regain Control of Your platform account",
      href: "/account-reinstatement",
    },
    {
      label: "Shopify Automation",
      desc: "Simplify your e-commerce success with automated Shopify dropshipping.",
      href: "/shopify-dropshipping-automation",
    },
  ];

  useEffect(() => {
    setIsServices(false);
    const servicesTab = [
      "/amazon-fba-automation",
      "/tiktok-shop-automation",
      "/amazon-private-label",
      "/walmart-automation",
      "/account-reinstatement",
      "/shopify-dropshipping-automation",
    ];
    if (servicesTab.includes(location.pathname)) {
      setActiveTab("services");
    } else {
      setActiveTab(location.pathname);
    }
  }, [location]);

  useEffect(() => {
    // Disable scroll
    if (isServices) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isServices]);

  return (
    <div className="fixed top-0 left-0 flex items-center justify-between bg-transparent w-full z-50">
      <MaxWidthWrapper classNames="flex items-center justify-between w-full py-5">
        <img src="/logo.png" alt="Logo" className="w-20 object-contain" />
        <div className="flex items-center gap-5">
          <a
            href="tel:+1(469) 935-7701"
            className="text-white text-base flex items-center gap-2"
          >
            <img src="/usa-flag.gif" alt="Flag gif" className="w-10" />
            +1(469) 935-7701
          </a>
          <CTAButton />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
