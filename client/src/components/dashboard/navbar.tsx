import { navbarLinks } from "@/constant";
import { ChevronLeft, ChevronUp, MenuIcon } from "lucide-react";
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

  return (
    <div className="relative flex items-center justify-between bg-gradient-to-l from-white to-gold/70 h-24 w-full ">
      <div className="w-full flex justify-between h-full">
        <div className="pointer-events-none select-none absolute w-full h-full flex-1 flex overflow-hidden max-md:hidden">
          <img
            src="/boxesTexture.png"
            alt="Boxes Texture"
            className="absolute -right-[250px] top-0 rotate-45 opacity-40"
          />
        </div>
        <div
          className={cn(
            "absolute top-24 left-0 hidden md:flex w-full h-[calc(220vh)] z-50 bg-charcoal transition-all duration-200 ease-in-out",
            isServices
              ? "opacity-100 pointer-events-auto select-auto"
              : "opacity-0 pointer-events-none select-none"
          )}
        >
          <MaxWidthWrapper classNames="mt-10">
            <div className="flex flex-col items-center w-full gap-5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7 w-full">
                {servicesData.map((item, index) => (
                  <Link
                    to={item.href}
                    key={index}
                    className="flex flex-col w-sm cursor-pointer"
                  >
                    <h2 className="text-gold text-base font-medium">
                      {item.label}
                    </h2>
                    <p className="hidden md:block text-white text-sm font-extralight">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
              <button
                onClick={() => setIsServices(false)}
                className="w-16 h-16  border border-gold rounded-full cursor-pointer bg-transparent outline-none flex items-center justify-center"
              >
                <ChevronUp className="size-6 text-gold" />
              </button>
            </div>
          </MaxWidthWrapper>
        </div>
        <MaxWidthWrapper>
          <div className="flex h-full items-center justify-between flex-1 px-4">
            <div className="h-full flex items-center">
              <Link to="/" className="text-white ">
                <motion.img
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "linear" }}
                  src="/logo.png"
                  alt="Logo"
                  className="w-32 h-14 object-contain z-[100]"
                />
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex translate-y-3 items-center gap-4">
                {navbarLinks.map((item, index) => {
                  const isActive =
                    item.label === "Services"
                      ? activeTab === "services"
                      : activeTab === item.href;

                  return (
                    <div
                      key={index}
                      className="relative w-16 flex flex-col items-center"
                    >
                      <div
                        className={cn(
                          "absolute w-12 h-12 rounded-full bg-charcoal bottom-6 transition-all duration-200 ease-in-out",
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-3"
                        )}
                      ></div>

                      <item.icon
                        className={cn(
                          "size-4 text-charcoal transition-all duration-500 ease-in-out",
                          isActive
                            ? "-translate-y-4 text-white opacity-100"
                            : "translate-y-0 text-charcoal opacity-0"
                        )}
                      />

                      {item.label === "Services" ? (
                        <span
                          onClick={() => {
                            setIsServices(!isServices);
                            setActiveTab("services");
                          }}
                          className="text-charcoal text-base cursor-pointer"
                        >
                          {item.label}
                        </span>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setActiveTab(item.href)}
                          className="text-charcoal text-base cursor-pointer"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
              <Sheet>
                <SheetTrigger>
                  <MenuIcon className="size-8 text-charcoal flex md:hidden" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  {isServices ? (
                    <div className="flex flex-col gap-3">
                      <Button
                        variant="outline"
                        className="w-fit mx-4"
                        onClick={() => setIsServices(false)}
                      >
                        <ChevronLeft /> Back
                      </Button>
                      <div className="flex flex-col gap-4">
                        {servicesData.map((item, index) => (
                          <Link
                            key={index}
                            to={item.href}
                            className="relative overflow-hidden group w-full h-14 flex items-center gap-3 px-4 cursor-pointer bg-white"
                          >
                            <div className="absolute -top-14 group-hover:top-0 transition-all duration-150 ease-in-out left-0 w-full h-full bg-charcoal"></div>
                            <span className="z-10 text-black group-hover:text-white font-extralight text-xl duration-200 transition-all ease-in-out">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-5 flex-col">
                      {navbarLinks.map((item) => (
                        <>
                          {item.label === "Services" ? (
                            <span
                              key={item.id}
                              onClick={() => setIsServices(true)}
                              className="relative overflow-hidden group w-full h-14 flex items-center gap-3 px-4 cursor-pointer bg-white"
                            >
                              <div className="absolute -top-14 group-hover:top-0 transition-all duration-150 ease-in-out left-0 w-full h-full bg-charcoal"></div>
                              <span className="z-10 text-black group-hover:text-white font-extralight text-xl duration-200 transition-all ease-in-out">
                                {item.label}
                              </span>
                            </span>
                          ) : (
                            <Link
                              key={item.id}
                              to={item.href}
                              className="relative overflow-hidden group w-full h-14 flex items-center gap-3 px-4 cursor-pointer bg-white"
                            >
                              <div className="absolute -top-14 group-hover:top-0 transition-all duration-150 ease-in-out left-0 w-full h-full bg-charcoal"></div>
                              <span className="z-10 text-black group-hover:text-white font-extralight text-xl duration-200 transition-all ease-in-out">
                                {item.label}
                              </span>
                            </Link>
                          )}
                        </>
                      ))}
                    </div>
                  )}
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};
