import { MaxWidthWrapper } from "../max-width-wrapper";

export const HeroTagLine = () => {
  return (
    <section className="w-full py-20 px-3">
      <MaxWidthWrapper>
        <div className="flex items-center flex-col gap-2 px-3">
          <h1 className="text-center text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
            Keep Up That Hustle with a Profitable Entrepreneurial Journey
          </h1>

          <p className="text-center text-base text-charcoal">
            Starting a business is one thing—sustaining and scaling it is where
            most fail. At Ecom Automations Hub, we help turn your
            entrepreneurial vision into a long-term, thriving reality.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
