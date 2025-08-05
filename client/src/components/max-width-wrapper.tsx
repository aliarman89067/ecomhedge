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
        "w-full md:max-w-2xl lg:max-w-6xl xl:max-w-7xl mx-auto",
        classNames
      )}
    >
      {children}
    </div>
  );
};
