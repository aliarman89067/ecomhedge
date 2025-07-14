export const VideoSection = () => {
  const data = [
    {
      id: 1,
      label: "$30M+",
      desc: "in sales and Counting",
    },
    {
      id: 2,
      label: "20+",
      desc: "Brands Launched (Private Label)",
    },
    {
      id: 3,
      label: "2,809+",
      desc: "Wholesale Brands Partnered",
    },
    {
      id: 4,
      label: "5+ year",
      desc: "Year Fine Tuned Processes",
    },
    {
      id: 5,
      label: "1,000+",
      desc: "Customers Delighted",
    },
  ];

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <div className="top-0 left-0 absolute w-full h-full bg-black/60 z-10 backdrop-blur-xl" />
      <video
        src="/overlay-video.mp4"
        autoPlay
        loop
        muted
        className="z-0 absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/overlay-video.mp4" type="mp4/video" />
      </video>
      <div className="absolute z-20 max-sm:w-full max-sm:px-2  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-16">
        <h1 className="text-white font-extralight text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
          Start your journey with confidence.
        </h1>
        <div className="flex flex-col gap-3">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col gap-1">
              <h1 className="text-gold text-2xl sm:text-3xl md:text-5xl font-medium">
                {item.label}
              </h1>
              <span className="text-white font-extralight text-sm md:text-base">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
