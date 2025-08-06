import { Benefits } from "@/components/dashboard/benefit";
import { BookingCall } from "@/components/dashboard/booking-call";
import { CaseStudies } from "@/components/dashboard/case-studies";
import { Headline } from "@/components/dashboard/head-line";
import { Hero } from "@/components/dashboard/hero";
import { HeroBento } from "@/components/dashboard/hero-bento";
import { HeroTagLine } from "@/components/dashboard/hero-tag-line";
import { IntroVideo } from "@/components/dashboard/intro-video";
import { Services } from "@/components/dashboard/services";
import { ServicesList } from "@/components/dashboard/services-list";
import { VideoSection } from "@/components/dashboard/video-section";
import { TabName } from "@/lib/tab-name";

export const Home = () => {
  TabName("");
  return (
    <section className="min-h-screen flex flex-col overflow-hidden">
      <Hero />
      <HeroBento />
      <Benefits />
      <Headline />
      <VideoSection />
      <IntroVideo />
      <ServicesList />
      <Services />
      <CaseStudies />
      <BookingCall />
    </section>
  );
};
