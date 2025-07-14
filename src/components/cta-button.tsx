import { useContext } from "react";
import { FormContext } from "@/context/form-context";
import { ArrowRight } from "lucide-react";

export const CTAButton = () => {
  const { setIsOpen } = useContext(FormContext);

  return (
    <button
      onClick={() => setIsOpen?.(true)}
      className="group relative pl-7 pr-20 h-16 rounded-full bg-gold flex w-fit items-center cursor-pointer"
    >
      <span className="text-white z-10 font-medium text-lg">Get Started</span>
      <div className="absolute right-1 top-1/2 -translate-y-1/2 w-14 h-14 bg-charcoal rounded-full group-hover:w-full group-hover:right-0 group-hover:h-16 transition-all duration-200 ease-in-out flex items-center">
        <ArrowRight className="text-white size-6 absolute right-7 translate-x-1/2 group-hover:-rotate-45 transition-all duration-200 ease-in-out" />
      </div>
    </button>
  );
};
