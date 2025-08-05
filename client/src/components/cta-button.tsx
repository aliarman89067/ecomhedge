import { motion } from "framer-motion";
import { useContext } from "react";
import { FormContext } from "@/context/form-context";
import { ArrowRight, ArrowRightIcon } from "lucide-react";

export const CTAButton = () => {
  const { setIsOpen } = useContext(FormContext);

  return (
    <motion.button className="flex items-center gap-3 border-2 border-purple-700 w-44 py-3 justify-center rounded-full">
      <span className="text-white z-10 font-semibold text-base">
        Get Started
      </span>
      <ArrowRightIcon className="text-white size-5" />
    </motion.button>
  );
};

{
  /* <motion.button
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeInOut" }}
  onClick={() => setIsOpen?.(true)}
  className="group relative pl-7 pr-20 h-16 rounded-full bg-gold flex w-fit items-center cursor-pointer"
>
  <span className="text-white z-10 font-medium text-lg">Get Started</span>
  <div className="absolute right-1 top-1/2 -translate-y-1/2 w-14 h-14 bg-charcoal rounded-full group-hover:w-full group-hover:right-0 group-hover:h-16 transition-all duration-200 ease-in-out flex items-center">
    <ArrowRight className="text-white size-6 absolute right-7 translate-x-1/2 group-hover:-rotate-45 transition-all duration-200 ease-in-out" />
  </div>
</motion.button>; */
}
