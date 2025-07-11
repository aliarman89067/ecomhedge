import { ChartNoAxesColumnIncreasing, QuoteIcon } from "lucide-react"
import { MaxWidthWrapper } from "../max-width-wrapper"

export const Benefits = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <MaxWidthWrapper classNames="flex flex-col gap-4 items-center">
                <div className="grid grid-cols-[2fr_1.5fr]  gap-10 w-full">
                    {/* Top Left */}
                        <h1 className="text-black text-4xl">
                            Wholesale Gains with{" "}
                            <span className="inline-flex text-gold font-bold relative">
                                <span>Ecomhedge&apos;s</span>
                                <img
                                    src="/heading-stars.png"
                                    alt="Stars"
                                className="absolute -top-2 -right-6 rotate-[20deg] w-10 h-10 object-contain"
                                />
                            </span>{" "} <br />
                            FBA Automation
                        </h1>

                    {/* Right - Spans 2 Rows */}
                    <div className="row-span-2 bg-charcoal p-6 shadow rounded-xl flex flex-col items-center justify-between">
                        {/* Right box content here */}
                        <p className="text-3xl text-white font-bold">Automate Your Growth on Amazon.</p>
                        <div className="flex items-center gap-2 bg-white px-6 py-6 rounded-full">
                            <span className="text-charcoal text-xl">1,200+ Customers</span>
                            <ChartNoAxesColumnIncreasing className="text-charcoal size-7"/>
                        </div>
                        <div className="flex items-center gap-5">
                           <div className="w-10 h-10 rounded-full bg-white overflow-hidden shrink-0 grow flex items-center justify-center">

                                <img src="/benefits/p3.png" alt="Person Image" className="w-8 h-8 object-contain" />
                            </div>
                                <span className="text-white font-extralight text-base">Start Your Business Today.</span>
                        </div>
                    </div>

                    {/* Bottom Left */}
                    <div className="grid grid-cols-2 gap-5">
                            <div className="w-full bg-gray-100 rounded-lg p-4 flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-white overflow-hidden shrink-0 grow flex items-center justify-center">

                                    <img src="/benefits/p1.png" alt="Person Image" className="w-8 h-8 object-contain" />
                                    </div>
                                    <h1 className="text-gold font-medium text-base">Reselling Established Brands</h1>
                                </div>
                                <div className="relative mt-2">
                                    <QuoteIcon className="absolute -left-3 -top-1 size-3 rotate-[200deg]"/>
                                    <QuoteIcon className="absolute right-0 -bottom-1 size-3 rotate-[20deg]"/>
                                    <p className="text-charcoal text-sm">

                                    With our Amazon wholesale automation, resell trusted brands with built-in demand—minimizing risk and maximizing reliable sales.

                                    </p>
                                </div>
                            </div>
                            <div className="w-full bg-gray-100 rounded-lg p-4 flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-white overflow-hidden shrink-0 grow flex items-center justify-center">

                                    <img src="/benefits/p2.png" alt="Person Image" className="w-8 h-8 object-contain" />
                                    </div>
                                    <h1 className="text-gold font-medium text-base">Potential for High Sales Volume</h1>
                                </div>
                                <div className="relative mt-2">
                                    <QuoteIcon className="absolute -left-3 -top-1 size-3 rotate-[200deg]"/>
                                    <QuoteIcon className="absolute left-16 -bottom-1 size-3 rotate-[20deg]"/>
                                    <p className="text-charcoal text-sm">

                                    Our wholesale model is built for scale—grow by increasing orders, no need for new products or branding.


                                    </p>
                                </div>
                            </div>
                            
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}
