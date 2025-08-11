import { useEffect, type Dispatch, type SetStateAction } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { servicesData } from "@/constant";
import { Link, useLocation } from "react-router-dom";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavbarSheet = ({ isOpen, setIsOpen }: Props) => {
  const pathname = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="left" className="border-black [&>button]:text-white">
        <SheetHeader>
          <SheetTitle className="text-white">Services</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col mt-5 gap-2 px-4">
          {servicesData.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group w-full h-10 flex items-center bg-transparent hover:bg-white transition-all duration-300 ease-in-out px-2"
            >
              <span className="text-white group-hover:text-background text-xl transition-all duration-300 ease-in-out">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
