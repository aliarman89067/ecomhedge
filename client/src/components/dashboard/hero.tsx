import z from "zod";
import { motion } from "framer-motion";
import { CTAButton } from "../cta-button";
import { MaxWidthWrapper } from "../max-width-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { FaAmazon, FaTiktok, FaShopify } from "react-icons/fa";
import { PiAmazonLogoFill } from "react-icons/pi";
import { TbBrandWalmart } from "react-icons/tb";
import { MdAccountBalance } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "@/context/form-context";
import axios from "axios";

export const Hero = () => {
  const navigate = useNavigate();
  const { setIsSubmit } = useContext(FormContext);

  const formSchema = z.object({
    name: z.string().min(1, { message: "Please enter your name" }),
    email: z.email().min(1, { message: "Please enter your email" }),
    contact: z.string().min(1, { message: "Please enter your number" }),
    message: z.string().min(1, { message: "Please enter your message" }),
  });

  type FormSchemaType = z.infer<typeof formSchema>;

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    values: {
      name: "",
      email: "",
      contact: "",
      message: "",
    },
  });

  const handleSubmit = async (values: FormSchemaType) => {
    try {
      await axios.post(
        import.meta.env.VITE_API_BASE_URL! + "/generate-lead",
        values
      );
      toast.success(
        "We've received your message. Our team will get back to you shortly."
      );
      setIsSubmit?.(true);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const services = [
    {
      title: "Amazon FBA Automation",
      icon: FaAmazon,
      href: "/tiktok-shop-automation",
    },
    {
      title: "Tiktok Shop Automation",
      icon: FaTiktok,
      href: "/tiktok-shop-automation",
    },
    {
      title: "Amazon Private Label",
      icon: PiAmazonLogoFill,
      href: "/amazon-private-label",
    },
    {
      title: "Walmart Automation",
      icon: TbBrandWalmart,
      href: "/walmart-automation",
    },
    {
      title: "Account Reinstatement",
      icon: MdAccountBalance,
      href: "/account-reinstatement",
    },
    {
      title: "Shopify Dropshipping Automation",
      icon: FaShopify,
      href: "/shopify-dropshipping-automation",
    },
  ];

  return (
    <section className="flex flex-col w-full min-h-screen">
      <div className="py-10 relative min-h-screen w-full flex flex-col overflow-hidden items-center justify-center">
        <MaxWidthWrapper classNames="z-20 px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 max-md:gap-8 h-full items-center">
            <div className="flex flex-col gap-6 max-md:items-center">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-white text-3xl font-bold max-md:text-center"
              >
                Build a Business{" "}
                <div className="inline-flex bg-black text-gold px-4 py-2 rounded-full">
                  That Works
                </div>{" "}
                While You Sleep
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-white text-base max-md:text-center"
              >
                Break free from the paycheck-to-paycheck cycle. With Ecom
                Automations Hub as your trusted business partner, building
                passive income is easier, faster, and smarter than ever.
              </motion.p>
              <CTAButton />
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-full flex flex-col mt-4 gap-2"
              >
                <h1 className="text-white text-xl">Our Services</h1>
                <div className="grid grid-cols-2 gap-2 sm:gap-5">
                  {services.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => navigate(item.href)}
                      className="group relative w-full h-16 text-white transition-all duration-500 ease-in-out cursor-pointer rounded-full border overflow-hidden border-white bg-white/30 flex items-center justify-center gap-2 px-4"
                    >
                      <div className="relative top-0 left-0 flex items-center gap-2 z-10">
                        {
                          <item.icon className="size-6 text-white max-sm:hidden" />
                        }
                        <span className="text-white text-xs sm:text-sm">
                          {item.title}
                        </span>
                      </div>
                      <div className="absolute w-full aspect-square rounded-full bg-gold top-[100%] group-hover:-top-[150%] transition-all duration-200 ease-in-out"></div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex items-center justify-end max-md:justify-center w-full sm:w-[500px] md:w-auto max-md:mx-auto"
            >
              <Form {...form}>
                <form
                  className="bg-gradient-to-bl from-charcoal to-gold rounded-lg border border-gray-400 flex flex-col px-3 sm:px-5 py-3 w-[90%] gap-3 sm:gap-5"
                  onSubmit={form.handleSubmit(handleSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-1">
                        <FormLabel className="text-white text-sm font-extralight">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white/10 rounded-md border border-gray-200 outline-none h-10 w-full px-3 text-sm text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-1">
                        <FormLabel className="text-white text-sm font-extralight">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white/10 rounded-md border border-gray-200 outline-none h-10 w-full px-3 text-sm text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-1">
                        <FormLabel className="text-white text-sm font-extralight">
                          Contact
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white/10 rounded-md border border-gray-200 outline-none h-10 w-full px-3 text-sm text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-1">
                        <FormLabel className="text-white text-sm font-extralight">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="bg-white/10 rounded-md border border-gray-200 outline-none h-20 resize-none w-full px-3 text-sm text-white"
                          ></Textarea>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button
                    type="submit"
                    className="w-full py-4 text-white cursor-pointer rounded-md bg-charcoal hover:bg-charcoal/90 transition-all duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </form>
              </Form>
            </motion.div>
          </div>
        </MaxWidthWrapper>
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-black/40 backdrop-blur-xl" />
        <video
          src="/header-video.mp4"
          autoPlay
          muted
          loop
          className="z-0 w-full h-full object-cover absolute top-0 left-0"
        >
          <source src="/header-video.mp4" />
        </video>
      </div>
    </section>
  );
};

// <div className="relative h-auto w-full">
//   <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-tl from-charcoal/20 to-gold/60" />
//   <video src="/hero-video.mp4" autoPlay muted loop className="w-full">
//     <source src="/hero-video.mp4" type="video/mp4" />
//   </video>
// </div>
