import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const FillBox = ({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames?: string;
}) => {
  return (
    <div
      className={cn(
        "relative z-0 gap-2 overflow-hidden rounded-xl transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-background before:transition-transform before:duration-1000 before:content-[''] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95",
        classNames
      )}
    >
      {children}
    </div>
  );
};
