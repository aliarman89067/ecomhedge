import { useContext } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { FormContext } from "@/context/form-context";
import { X } from "lucide-react";

export const OverlayForm = () => {
  const { isOpen, setIsOpen } = useContext(FormContext);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-transparent border-none outline-none shadow-none ring-0 [&>button]:hidden">
        <form className="relative bg-gradient-to-bl from-charcoal to-gold rounded-lg border border-gray-400 flex flex-col px-5 py-3 w-[90%] gap-5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsOpen?.(false);
            }}
            className="bg-transparent cursor-pointer absolute right-2 top-2"
          >
            <X className="size-5 text-white" />
          </button>
          <h2 className="text-white font-extralight text-lg text-center">
            Let&apos;s Get Started
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-white text-sm font-extralight"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="bg-white/10 rounded-md border border-gray-200 outline-none h-10 w-full px-3 text-sm text-white"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-white text-sm font-extralight"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="bg-white/10 rounded-md border border-gray-200 outline-none h-10 w-full px-3 text-sm text-white"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="number"
                className="text-white text-sm font-extralight"
              >
                Contact Number
              </label>
              <input
                id="number"
                type="text"
                className="bg-white/10 rounded-md border border-gray-200 outline-none h-10 w-full px-3 text-sm text-white"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-white text-sm font-extralight"
              >
                Messaage
              </label>
              <textarea
                id="message"
                className="bg-white/10 rounded-md border border-gray-200 outline-none h-24 resize-none w-full px-3 py-2 text-sm text-white"
              />
            </div>
            <button className="w-full py-4 text-white cursor-pointer rounded-md bg-charcoal hover:bg-charcoal/90 transition-all duration-150 ease-in-out">
              Submit
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
