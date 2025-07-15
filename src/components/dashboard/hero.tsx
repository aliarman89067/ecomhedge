export const Hero = () => {
  return (
    <div className="h-auto w-full">
      <video src="/hero-video.mp4" autoPlay muted loop className="w-full">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
