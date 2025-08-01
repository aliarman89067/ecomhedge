import { useContext, type ReactNode } from "react";
import { CTAButton } from "../cta-button";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { toast } from "sonner";
import { FormContext } from "@/context/form-context";
import axios from "axios";

interface Props {
  title: ReactNode;
  desc: string;
}

export const ServicesHero = ({ title, desc }: Props) => {
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

  const { setIsSubmit } = useContext(FormContext);

  const handleSubmit = async (values: FormSchemaType) => {
    try {
      await axios.post(
        "https://ecomasis-email-server.vercel.app/generate-lead",
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

  return (
    <>
      {/* Hero */}
      <div className="py-10 relative min-h-screen w-full flex flex-col overflow-hidden items-center justify-center">
        <MaxWidthWrapper classNames="z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 max-md:gap-8 h-full items-center">
            <div className="flex flex-col gap-6 max-md:items-center">
              {title}
              <p className="text-white text-base max-md:text-center">{desc}</p>
              <CTAButton />
            </div>
            <div className="flex items-center justify-end max-md:justify-center w-[350px] sm:w-[500px] md:w-auto max-md:mx-auto">
              <Form {...form}>
                <form
                  className="bg-gradient-to-bl from-charcoal to-gold rounded-lg border border-gray-400 flex flex-col px-5 py-3 w-[90%] gap-5"
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
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-black/40 backdrop-blur-xl" />
        <video
          src="/golden-video.mp4"
          autoPlay
          muted
          loop
          className="z-0 w-full h-full object-cover absolute top-0 left-0"
        >
          <source src="/golden-video.mp4" />
        </video>
      </div>
    </>
  );
};
