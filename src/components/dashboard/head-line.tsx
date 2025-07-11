import { cn } from "@/lib/utils"
import { MaxWidthWrapper } from "../max-width-wrapper"

export const Headline = () =>{
    const data = [
        {
            id:1,
            count:"100",
            prefix:"+",
            label:"Active Seller"
        },
        {
            id:2,
            count:"85,000",
            prefix:"+",
            label:"Orders Processed"
        },
        {
            id:3,
            count:"$2.6M",
            prefix:"",
            label:"Members Sales"
        },
    ]
    return(
        <section className="relative w-full h-screen flex items-center justify-center">
            <div className="w-[400px] h-[400px] rounded-full bg-gold/25 absolute blur-3xl" />
            <MaxWidthWrapper classNames="flex flex-col items-center z-10">
                <h1 className="w-3xl text-center text-2xl font-extralight text-charcoal">An Amazon automation <span className="font-medium">company changing</span> the lives of ecommerce sellers.</h1>
                <img src="/laptop.png" alt="Laptop" className="h-[65vh] object-contain" />
                <div className="grid grid-cols-3 gap-4 w-full mt-2">
                    {data.map((item, index)=>(

                    <div key={item.id} className={cn("w-full h-18 rounded-full flex flex-col items-center justify-center bg-white border border-charcoal", index === 1 && "bg-charcoal -translate-y-2")}>
                        <span className={cn("text-xl font-bold text-charcoal", index === 1 && "text-gold")}>{item.count}{item.prefix}</span>
                        <span className={cn("text-lg font-extralight text-charcoal",
                            index === 1 && "text-white"
                        )}>{item.label}</span>
                    </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    )
}