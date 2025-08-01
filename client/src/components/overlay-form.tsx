import { useContext } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { FormContext } from "@/context/form-context";
import { X } from "lucide-react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

export const OverlayForm = () => {
  const { isOpen, setIsOpen, setIsSubmit } = useContext(FormContext);

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
        "https://ecomasis-email-server.vercel.app/generate-lead",
        values
      );
      toast.success(
        "We've received your message. Our team will get back to you shortly."
      );
      setIsOpen?.(false);
      setIsSubmit?.(true);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-transparent w-full border-none outline-none shadow-none ring-0 [&>button]:hidden">
        <Form {...form}>
          <form
            className="relative  bg-gradient-to-bl from-charcoal to-gold rounded-lg border border-gray-400 flex flex-col px-5 py-3 w-full sm:w-[90%] gap-5"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <X
              onClick={() => setIsOpen?.(false)}
              className="absolute top-2 right-2 size-5 text-white cursor-pointer"
            />
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
      </DialogContent>
    </Dialog>
  );
};
