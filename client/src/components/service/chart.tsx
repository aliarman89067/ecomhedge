import type { LucideIcon } from "lucide-react";

interface Props {
  data: { label: string; desc: string; icon: LucideIcon }[];
}

export const Chart = ({ data }: Props) => {
  return (
    <div className="w-full min-h-screen grid grid-rows-2 gap-5 mt-5">
      {/* Top Section */}
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="relative overflow-hidden h-full w-full bg-secondary/20 flex p-3 rounded-xl items-center justify-center">
          <div className="absolute -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
          <img
            src="/new/noise.png"
            alt="Noise Image"
            className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
          />
          <div className="h-full w-full gap-2 bg-secondary/10 flex flex-col p-3 rounded-xl items-center justify-center">
            <h1 className="text-white text-center font-bold text-2xl sm:text-3xl md:text-4xl">
              {data[0].label}
            </h1>
            <h1 className="text-white text-center text-base">{data[0].desc}</h1>
          </div>
        </div>
        <div className="relative overflow-hidden h-full w-full bg-secondary/20 flex p-3 rounded-xl items-center justify-center">
          <div className="absolute -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
          <img
            src="/new/noise.png"
            alt="Noise Image"
            className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
          />
          <div className="h-full w-full bg-secondary/10 flex p-3 rounded-xl items-center justify-center">
            <div className="h-full w-full gap-2 bg-secondary/10 flex flex-col p-3 rounded-xl items-center justify-center">
              <h1 className="text-white text-center font-bold text-2xl sm:text-3xl md:text-4xl">
                {data[1].label}
              </h1>
              <h1 className="text-white text-center text-base">
                {data[1].desc}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="relative overflow-hidden h-full w-full bg-secondary/20 flex p-3 rounded-xl items-center justify-center">
          <div className="absolute -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
          <img
            src="/new/noise.png"
            alt="Noise Image"
            className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
          />
          <div className="h-full w-full bg-secondary/10 flex p-3 rounded-xl items-center justify-center">
            <div className="h-full w-full gap-2 bg-secondary/10 flex flex-col p-3 rounded-xl items-center justify-center">
              <h1 className="text-white text-center font-bold text-2xl sm:text-3xl md:text-4xl">
                {data[2].label}
              </h1>
              <h1 className="text-white text-center text-base">
                {data[2].desc}
              </h1>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden h-full w-full bg-secondary/20 flex p-3 rounded-xl items-center justify-center">
          <div className="absolute -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
          <img
            src="/new/noise.png"
            alt="Noise Image"
            className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
          />
          <div className="h-full w-full bg-secondary/10 flex p-3 rounded-xl items-center justify-center">
            <div className="h-full w-full gap-2 bg-secondary/10 flex flex-col p-3 rounded-xl items-center justify-center">
              <h1 className="text-white text-center font-bold text-2xl sm:text-3xl md:text-4xl">
                {data[3].label}
              </h1>
              <h1 className="text-white text-center text-base">
                {data[3].desc}
              </h1>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden h-full w-full bg-secondary/20 flex p-3 rounded-xl items-center justify-center">
          <div className="absolute -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
          <img
            src="/new/noise.png"
            alt="Noise Image"
            className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
          />
          <div className="h-full w-full bg-secondary/10 flex p-3 rounded-xl items-center justify-center">
            <div className="h-full w-full gap-2 bg-secondary/10 flex flex-col p-3 rounded-xl items-center justify-center">
              <h1 className="text-white text-center font-bold text-2xl sm:text-3xl md:text-4xl">
                {data[4].label}
              </h1>
              <h1 className="text-white text-center text-base">
                {data[4].desc}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
