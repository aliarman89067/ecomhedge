import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  classNames?: string;
}

export const MaxWidthWrapper = ({ children, classNames }: Props) => {
  return (
    <div
      className={cn(
        "w-full md:max-w-4xl lg:max-w-6xl xl:max-w-[1200px] mx-auto px-3",
        classNames
      )}
    >
      {children}
    </div>
  );
};
