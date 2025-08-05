import { CTAButton } from "../cta-button";
import { MaxWidthWrapper } from "../max-width-wrapper";
import Spline from "@splinetool/react-spline";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex bg-[url(/new/background.png)] bg-cover overflow-hidden items-center justify-center">
      <img
        src="/new/noise.png"
        alt="Noise Image"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-1 object-cover opacity-15"
      />
      <MaxWidthWrapper classNames="relative z-10 grid grid-cols-2 w-full gap-10 pt-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-extrabold text-7xl">
            Build a Business That Works While You Sleep
          </h1>
          <p className="bebas font-light text-gray-400 text-2xl tracking-wider mb-5">
            Break free from the paycheck-to-paycheck cycle. With Ecom
            Automations Hub as your trusted business partner, building passive
            income is easier, faster, and smarter than ever.
          </p>
          <CTAButton title="Get Started" />
        </div>
        <div className="flex flex-col">
          <Spline scene="https://prod.spline.design/SvUcPeJj3ADOtwyn/scene.splinecode" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
