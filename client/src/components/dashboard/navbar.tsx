import { navbarLinks } from "@/constant";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { Link } from "react-router-dom";
import { WetButton } from "../wet-button";
import { CTAButton } from "../cta-button";
import { FillButton } from "../fill-button";

export const Navbar = () => {
  return (
    <MaxWidthWrapper classNames="absolute top-0 left-1/2 -translate-x-1/2 w-full flex items-center justify-between py-6 z-50">
      <img src="/logo.png" alt="Logo" className="w-[110px] object-contain" />
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-5">
          {navbarLinks.map((item) => (
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
          ))}
        </div>
        <FillButton title="Get Started" />
      </div>
    </MaxWidthWrapper>
  );
};
