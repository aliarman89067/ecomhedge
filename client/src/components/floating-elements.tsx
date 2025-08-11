import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const FloatingElements = () => {
  const phoneNumber = "+19208286573";
  const message = "Hi, I want to know more about your services!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="w-full h-screen absolute top-0 left-0">
      <div className="w-14 h-14 fixed z-[100] right-6 bottom-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.5, 1, 1, 1, 0.5, 0],
            scale: [1, 1.2, 1.4, 1.6, 1.7, 1.8],
          }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          className="w-full h-full border-2 border-green-300/60 rounded-full absolute"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.5, 1, 1, 1, 0.5, 0],
            scale: [1, 1.2, 1.4, 1.6, 1.7, 1.8],
          }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            delay: 1,
          }}
          className="w-full h-full border-2 border-green-300/60 rounded-full absolute"
        />
        <a
          href={url}
          target="_blank"
          className="absolute bg-white w-full h-full rounded-full flex items-center justify-center cursor-pointer hover:scale-[105%] transition-all duration-200 ease-in-out"
        >
          <FaWhatsapp className="size-8 text-green-500" />
        </a>
      </div>
    </div>
  );
};
