import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";

export const BookingCall = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10">
      <div className="w-full flex flex-col max-md:mb-10 items-center md:items-start gap-4 h-full bg-white justify-center pl-5">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-gold font-extralight text-2xl max-md:text-center sm:text-3xl md:text-4xl lg:text-6xl"
        >
          Let&apos;s Tap Into Your Hidden Potential Together
        </motion.h1>
        <motion.a
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          href="tel:+1(469) 935-7701"
          className="h-14 pl-6 pr-1 w-fit rounded-full bg-charcoal flex items-center justify-between gap-3 cursor-pointer"
        >
          <span className="text-white">Book a Call Now</span>
          <span className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
            <PhoneIcon className="size-6 text-charcoal" />
          </span>
        </motion.a>
      </div>
      <motion.img
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-50px" }}
        src="/booking.jpg"
        alt="Booking image"
        className="w-full h-[500px] md:w-full md:h-full object-contain"
      />
    </div>
  );
};
