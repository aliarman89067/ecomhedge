export const Hero = () => {
  return (
    <div className="relative h-auto w-full">
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-tl from-charcoal/20 to-gold/60" />
      <video src="/hero-video.mp4" autoPlay muted loop className="w-full">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
