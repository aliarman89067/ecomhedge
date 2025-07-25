import { Benefits } from "@/components/dashboard/benefit";
import { BookingCall } from "@/components/dashboard/booking-call";
import { CaseStudies } from "@/components/dashboard/case-studies";
import { Headline } from "@/components/dashboard/head-line";
import { Hero } from "@/components/dashboard/hero";
import { Services } from "@/components/dashboard/services";
import { VideoSection } from "@/components/dashboard/video-section";
import { TabName } from "@/lib/tab-name";

export const Home = () => {
  TabName("");
  return (
    <section className="min-h-screen flex flex-col overflow-hidden">
      <Hero />
      <Benefits />
      <Headline />
      <VideoSection />
      <Services />
      <CaseStudies />
      <BookingCall />
    </section>
  );
};
