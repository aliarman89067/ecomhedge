import type { ReactNode } from "react";
import { CTAButton } from "../cta-button"
import { MaxWidthWrapper } from "../max-width-wrapper"

interface Props {
    title: ReactNode;
    desc: string
}

export const ServicesHero = ({title, desc}:Props) => {
    return(
        <>
        {/* Hero */}
            <div className="relative h-screen w-full flex flex-col overflow-hidden items-center justify-center">
                <MaxWidthWrapper classNames="absolute z-20">
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col gap-6">
                                {title}
                                <p className="text-white text-base">
                                    {desc}
                                </p>
                                <CTAButton />
                            </div>
                            <div className="flex items-center justify-end">
                                r<form className="bg-gradient-to-bl from-charcoal to-gold rounded-lg border border-gray-400 flex flex-col px-5 py-3 w-[90%] gap-5">
                                    <h2 className="text-white font-extralight text-lg text-center">Let&apos;s Get Started</h2>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="name" className="text-white text-sm font-extralight">Name</label>
                                            <input id="name" type="text" className="bg-white/10 rounded-md border border-gray-200 outline-none h-10 w-full px-3 text-sm text-white" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="email" className="text-white text-sm font-extralight">Email</label>
                                            <input id="email" type="email" className="bg-white/10 rounded-md border border-gray-200 outline-none h-10 w-full px-3 text-sm text-white" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="number" className="text-white text-sm font-extralight">Contact Number</label>
                                            <input id="number" type="text" className="bg-white/10 rounded-md border border-gray-200 outline-none h-10 w-full px-3 text-sm text-white" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="message" className="text-white text-sm font-extralight">Messaage</label>
                                            <textarea id="message" className="bg-white/10 rounded-md border border-gray-200 outline-none h-24 resize-none w-full px-3 py-2 text-sm text-white" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                </MaxWidthWrapper>
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-black/40 backdrop-blur-xl" />
            <video src="/golden-video.mp4" autoPlay muted loop className="z-0 w-full h-full object-cover absolute top-0 left-0">
                <source  src="/golden-video.mp4"/>
            </video>
            </div>
            </>
    )
}