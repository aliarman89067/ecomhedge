import { Loader2Icon } from "lucide-react";

export const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col gap-1 items-center">
        <Loader2Icon className="size-6 animate-spin text-charcoal" />
        <span className="text-charcoal text-base">Loading...</span>
      </div>
    </div>
  );
};
