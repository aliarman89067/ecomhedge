import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { Link } from "react-router-dom";

export const CaseStudies = () => {
  return (
    <section className="w-full min-h-screen py-10 flex items-center justify-center bg-charcoal px-3">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-3xl">
            Experience Ecom Automations Hub - <br />
            <span className="text-gold">Our Latest Case Studies:</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -100, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, ease: "circInOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col w-full gap-1"
            >
              <img
                src="/case-studies1.jpg"
                alt="Case study image"
                className="w-full rounded-lg h-[230px] object-cover"
              />
              <h1 className="text-2xl text-white">
                $19,760 Profit in 8 Months with FBA Wholesale
              </h1>
              <div className="flex flex-wrap mt-6 gap-x-3 gap-y-1">
                <Link
                  to="/amazon-automation"
                  className="py-2 px-4 rounded-full bg-gold text-white text-xs"
                >
                  Stable Cashflow
                </Link>
                <Link
                  to="/amazon-automation"
                  className="py-2 px-4 rounded-full bg-gold text-white text-xs"
                >
                  FBA Wholesale Automtion
                </Link>
                <Link
                  to="/faq"
                  className="py-2 px-4 rounded-full bg-white text-charcoal text-xs flex items-center gap-2"
                >
                  Read full case study{" "}
                  <div className="w-4 h-4 rounded-full bg-gold flex items-center justify-center">
                    <ArrowRight className="text-white size-3" />
                  </div>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, ease: "circInOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col w-full gap-1"
            >
              <img
                src="/case-studies2.jpg"
                alt="Case study 2"
                className="w-full rounded-lg h-[230px] object-cover"
              />
              <h1 className="text-2xl text-white">
                201.62% Sales Growth With 5x Less PPC Cost
              </h1>
              <div className="flex flex-wrap mt-6 gap-x-3 gap-y-1">
                <Link
                  to="/account-reinstatement"
                  className="py-2 px-4 rounded-full bg-gold text-white text-xs"
                >
                  Account Reinstatement
                </Link>
                <Link
                  to="/amazon-private-label"
                  className="py-2 px-4 rounded-full bg-gold text-white text-xs"
                >
                  Amazon Private Label
                </Link>
                <Link
                  to="/faq"
                  className="py-2 px-4 rounded-full bg-white text-charcoal text-xs flex items-center gap-2"
                >
                  Read full case study{" "}
                  <div className="w-4 h-4 rounded-full bg-gold flex items-center justify-center">
                    <ArrowRight className="text-white size-3" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
