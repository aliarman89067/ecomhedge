import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export const FloatingElements = () => {
  const phoneNumber = "+19208286573";
  const message = "Hi, I want to know more about your services!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="w-full h-screen absolute top-0 left-0">
      <motion.a
        href={url}
        target="_blank"
        className="z-[100] fixed bg-white w-14 h-14 rounded-full flex items-center justify-center bottom-5 right-5 cursor-pointer hover:scale-[105%] transition-all duration-200 ease-in-out"
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <FaWhatsapp className="size-8 text-green-500" />
      </motion.a>
    </div>
  );
};
