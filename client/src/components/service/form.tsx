import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { useContext } from "react";
import { FormContext } from "@/context/form-context";

interface Props {
  isOverlay?: boolean;
}

export const FormBox = ({ isOverlay = false }: Props) => {
  const { setIsOpen } = useContext(FormContext);

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
      //   setIsSubmit?.(true);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="relative w-full h-full bg-secondary/20 overflow-hidden rounded-xl p-3">
      <div className="absolute -top-5 left-0 w-32 h-32 rounded-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] opacity-40 blur-3xl"></div>
      <img
        src="/new/noise.png"
        alt="Noise Image"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
      />
      <div
        className={cn(
          "relative overflow-hidden w-full h-full bg-secondary/10 rounded-xl",
          isOverlay && "pt-6"
        )}
      >
        {isOverlay && (
          <XIcon
            onClick={() => setIsOpen(false)}
            className="absolute cursor-pointer top-2 right-2 text-white size-6 z-50"
          />
        )}
        <video
          src="/new/hero/earth.mp4"
          autoPlay
          muted
          loop
          className="absolute w-full h-full top-0 mask-gradient-left opacity-30 object-cover rounded-r-3xl z-10"
        >
          <source src="/new/hero/earth.mp4" />
        </video>
        <Form {...form}>
          <form
            className="relative z-50 flex flex-col w-full gap-2 p-3"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="text-white text-sm">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-md border border-white outline-none h-10 w-full px-3 text-sm text-white"
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
                  <FormLabel className="text-white text-sm">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-md border border-white outline-none h-10 w-full px-3 text-sm text-white"
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
                  <FormLabel className="text-white text-sm">Contact</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-md border border-white outline-none h-10 w-full px-3 text-sm text-white"
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
                  <FormLabel className="text-white text-sm">Messsage</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="rounded-md border border-white outline-none h-20 resize-none w-full px-3 text-sm text-white"
                    ></Textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="group mt-4 relative w-full transition-transform duration-300 active:scale-95 cursor-pointer"
            >
              <div className="relative z-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 p-0.5 cursor-pointer duration-300 group-hover:scale-105 w-full">
                <span className="block rounded-md bg-slate-950 px-10 py-3 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
                  Send
                </span>
              </div>
              <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-60 group-active:opacity-50"></span>
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
};
