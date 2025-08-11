import { useContext, useEffect, useState } from "react";
import { navbarLinks, servicesData } from "@/constant";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { Link, useLocation } from "react-router-dom";
import { FillButton } from "../fill-button";
import { NavbarSheet } from "../navbar-sheet";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MenuIcon, MoveLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { FormContext } from "@/context/form-context";

export const Navbar = () => {
  const pathname = useLocation();
  const { setIsOpen: setIsOverlayOpen } = useContext(FormContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServices, setIsServices] = useState(false);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServices(false);
  }, [pathname]);
  return (
    <MaxWidthWrapper classNames="absolute top-0 left-1/2 -translate-x-1/2 w-full flex items-center justify-between py-6 z-50">
      <NavbarSheet isOpen={isOpen} setIsOpen={setIsOpen} />
      <Link to="/">
        <img
          src="/logo-icon.png"
          alt="Logo"
          className="w-[50px] object-contain"
        />
      </Link>
      <div className="hidden lg:flex items-center gap-10">
        <div className="flex items-center gap-5">
          {navbarLinks.map((item) => {
            const isService = item.label === "Services";
            return (
              <span key={item.id}>
                {isService ? (
                  <button
                    onClick={() => setIsOpen(true)}
                    className="group relative"
                  >
                    <button
                      key={item.id}
                      className={cn(
                        "group relative z-10 group flex h-10 items-center gap-2 rounded-full bg-black pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-secondary hover:pl-2 text-white hover:text-background active:bg-neutral-700 cursor-pointer",
                        isOpen && "bg-secondary pl-2 text-background"
                      )}
                    >
                      <span
                        className={cn(
                          "rounded-full bg-white p-1 text-sm transition-colors duration-300 group-hover:bg-white",
                          isOpen && "bg-white"
                        )}
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className={cn(
                            "-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45",
                            isOpen && "text-black translate-x-0 text-lg"
                          )}
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                      <span>{item.label}</span>
                    </button>
                    <span
                      className={cn(
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary opacity-0 group-hover:opacity-30 transition-all duration-[800ms] ease-in-out w-20 h-14 rounded-full blur-2xl",
                        isOpen && "opacity-30"
                      )}
                    ></span>
                  </button>
                ) : (
                  <Link to={item.href} className="group relative">
                    <button
                      key={item.id}
                      className="group relative z-10 group flex h-10 items-center gap-2 rounded-full bg-black pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-secondary hover:pl-2 text-white hover:text-background active:bg-neutral-700 cursor-pointer"
                    >
                      <span className="rounded-full bg-white p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                      <span>{item.label}</span>
                    </button>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary opacity-0 group-hover:opacity-30 transition-all duration-[800ms] ease-in-out w-20 h-14 rounded-full blur-2xl"></span>
                  </Link>
                )}
              </span>
            );
          })}
        </div>
        <FillButton
          title="Get Started"
          onClick={() => setIsOverlayOpen(true)}
        />
      </div>
      <div className="flex lg:hidden">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger>
            <MenuIcon className="size-8 cursor-pointer text-white" />
          </SheetTrigger>
          <SheetContent className="border-black [&>button]:text-white">
            <SheetHeader>
              <SheetTitle className="text-white">Navbar</SheetTitle>
            </SheetHeader>
            <div className="relative w-full">
              <div
                className={cn(
                  "absolute flex flex-col w-full mt-5 gap-2 px-4 transition-all duration-200 ease-in-out",
                  isServices
                    ? "opacity-100 pointer-events-auto select-auto"
                    : "opacity-0 pointer-events-none select-none"
                )}
              >
                <span
                  onClick={() => setIsServices(false)}
                  className="cursor-pointer"
                >
                  <MoveLeftIcon className="text-white size-10" />
                </span>
                {servicesData.map((item) => {
                  return (
                    <span key={item.label}>
                      <Link
                        to={item.href}
                        className="group w-full h-10 flex items-center bg-transparent hover:bg-white transition-all duration-300 ease-in-out px-2"
                      >
                        <span className="text-white group-hover:text-background text-xl transition-all duration-300 ease-in-out">
                          {item.label}
                        </span>
                      </Link>
                    </span>
                  );
                })}
              </div>
              <div
                className={cn(
                  "absolute flex flex-col w-full mt-5 gap-2 px-4 transition-all duration-200 ease-in-out",
                  isServices
                    ? "opacity-0 pointer-events-none select-none"
                    : "opacity-100 pointer-events-auto select-auto"
                )}
              >
                {navbarLinks.map((item) => {
                  const isService = item.label === "Services";
                  return (
                    <span key={item.id}>
                      {isService ? (
                        <button
                          onClick={() => setIsServices(true)}
                          className="group cursor-pointer w-full h-10 flex items-center bg-transparent hover:bg-white transition-all duration-300 ease-in-out px-2"
                        >
                          <span className="text-white group-hover:text-background text-xl transition-all duration-300 ease-in-out">
                            {item.label}
                          </span>
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          className="group w-full h-10 flex items-center bg-transparent hover:bg-white transition-all duration-300 ease-in-out px-2"
                        >
                          <span className="text-white group-hover:text-background text-xl transition-all duration-300 ease-in-out">
                            {item.label}
                          </span>
                        </Link>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </MaxWidthWrapper>
  );
};
