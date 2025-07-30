import { MaxWidthWrapper } from "../max-width-wrapper";

export const IntroVideo = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <MaxWidthWrapper classNames="flex items-center justify-center px-3">
        <div className="max-w-[700px] h-[400px] sm:h-[500px] border-4 border-charcoal rounded-xl overflow-hidden">
          <video
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            className="z-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" />
          </video>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
