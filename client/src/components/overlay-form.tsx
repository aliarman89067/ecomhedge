import { useContext } from "react";
import { FormBox } from "./service/form";
import { FormContext } from "@/context/form-context";
import { cn } from "@/lib/utils";

export const OverlayForm = () => {
  const { isOpen, setIsOpen } = useContext(FormContext);
  return (
    <section
      onClick={() => setIsOpen(false)}
      className={cn(
        "fixed inset-0 w-full h-screen z-[400] bg-background/50 backdrop-blur-md transition-all duration-300 ease-in-out flex items-center justify-center",
        isOpen
          ? "opacity-100 pointer-events-auto select-auto delay-0"
          : "opacity-0 pointer-events-none select-none delay-500"
      )}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={cn(
          "w-[450px] transition-all duration-500 delay-300 ease-in-out",
          isOpen
            ? "opacity-100 pointer-events-auto select-auto translate-y-0"
            : "opacity-0 pointer-events-none select-none translate-y-32"
        )}
      >
        <FormBox isOverlay />
      </div>
    </section>
  );
};
