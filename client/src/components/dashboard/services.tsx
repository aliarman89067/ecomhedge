import { MaxWidthWrapper } from "../max-width-wrapper";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { UsersIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MouseParallax } from "react-just-parallax";

export const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full min-h-screen items-center justify-center py-10 px-3">
      <MaxWidthWrapper classNames="flex flex-col gap-7">
        <h1 className="text-charcoal text-xl md:text-3xl">
          Choose a Service <br />
          <span className="text-gold">Tailored To Your Needs</span>
        </h1>
        <div className="relative grid md:grid-cols-1 lg:grid-cols-2 gap-4 lg:min-h-[500px] p-4">
          <div className="absolute -top-6 -left-6">
            <MouseParallax strength={0.1}>
              <motion.img
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
                src="/elements/circle.png"
                alt="Circle"
                className="w-32 h-32 object-contain"
              />
            </MouseParallax>
          </div>
          {/* Left Column */}
          <motion.div
            className="relative bg-radial max-lg:pb-32 from-charcoal/80 to-charcoal text-white p-6 rounded-xl overflow-hidden flex items-center justify-center h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/dots-texture.png"
              alt="Dots Texture"
              className="absolute top-0 right-0 w-full h-full object-cover opacity-10 mask-gradient-left"
            />
            <div className="w-full flex h-full">
              <div className="w-full sm:w-[80%] flex flex-col gap-5 z-10">
                <h1 className="text-white font-extrabold text-3xl sm:text-5xl md:text-6xl lg:leading-[70px]">
                  Fulfillment by Amazon (FBA)
                </h1>
                <span className="text-white text-base sm:text-xl">
                  Streamline Operations & Boost Sales with FBA Automation.
                </span>
                <Button
                  onClick={() => navigate("/about")}
                  size="lg"
                  variant="secondary"
                  className="absolute bottom-5 left-5 right-5 py-6 z-10 bad-script-regular text-xl oleo "
                >
                  About Us
                  <UsersIcon />
                </Button>
              </div>
              <img
                src="/services/truck.png"
                alt="Chart Image"
                className="absolute -right-20 sm:-right-44 top-1/2 max-sm:-translate-y-1/2 sm:-top-16 flex-1 scale-x-[-1] max-sm:w-60 sm:h-[600px] object-contain sm:object-cover mask-gradient-left max-sm:opacity-30"
              />
            </div>
          </motion.div>

          {/* Right Column - 2 Rows */}
          <div className="flex flex-col h-full gap-4">
            <motion.div
              className="relative h-[250px] lg:h-full bg-radial from-charcoal/80 to-charcoal text-white p-6 rounded-xl overflow-hidden flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="/dots-texture.png"
                alt="Dots Texture"
                className="absolute top-0 right-0 w-full h-full object-cover opacity-10 mask-gradient-left"
              />
              <div className="w-full flex h-full">
                <div className="w-full sm:w-[70%] flex flex-col gap-5 z-10">
                  <h1 className="text-white font-extrabold text-3xl sm:text-4xl">
                    Buy Box Advantage
                  </h1>
                  <span className="text-white text-base sm:text-xl">
                    Win the Buy Box, Maximize Your Sales Today.
                  </span>
                </div>
                <img
                  src="/services/box.png"
                  alt="Chart Image"
                  className="absolute -right-28 -top-10 flex-1 h-[350px] object-cover mask-gradient-right max-sm:opacity-30"
                />
              </div>
            </motion.div>

            <motion.div
              className="relative h-[250px] lg:h-full bg-radial from-charcoal/80 to-charcoal text-white p-6 rounded-xl overflow-hidden flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="/dots-texture.png"
                alt="Dots Texture"
                className="absolute top-0 right-0 w-full h-full object-cover opacity-10 mask-gradient-left"
              />
              <div className="w-full flex h-full">
                <div className="w-full sm:w-[70%] flex flex-col gap-5">
                  <h1 className="text-white font-extrabold text-3xl sm:text-4xl">
                    Organic Sales
                  </h1>
                  <span className="text-white text-base sm:text-xl">
                    Leverage Built-In Demand with High-Visibility Brands.
                  </span>
                </div>
                <img
                  src="/services/chart.png"
                  alt="Chart Image"
                  className="absolute -right-28 -top-10 flex-1 h-[350px] scale-x-[-1] object-cover mask-gradient-right max-sm:opacity-70"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
