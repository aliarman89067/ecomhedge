import { PhoneIcon } from "lucide-react";

export const BookingCall = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10">
      <div className="w-full flex flex-col max-md:mb-10 items-center md:items-start gap-4 h-full bg-white justify-center pl-5">
        <h1 className="text-gold font-extralight text-2xl max-md:text-center sm:text-3xl md:text-4xl lg:text-6xl">
          Let&apos;s Tap Into Your Hidden Potential Together
        </h1>
        <button className="h-14 pl-6 pr-1 w-fit rounded-full bg-charcoal flex items-center justify-between gap-3 cursor-pointer">
          <span className="text-white">Book a Call Now</span>
          <a
            href="tel:+1(469) 935-7701"
            className="h-12 w-12 rounded-full bg-white flex items-center justify-center"
          >
            <PhoneIcon className="size-6 text-charcoal" />
          </a>
        </button>
      </div>
      <img
        src="/booking.jpg"
        alt="Booking image"
        className="w-full h-[500px] md:w-full md:h-full object-contain"
      />
    </div>
  );
};
