import { cn } from '@/lib/utils';
import { MaxWidthWrapper } from '../max-width-wrapper';

export const Services = () => {
    const data = [
        {
            id:1,
            heading:"Buy Box Advantage",
            imageSrc:"/services/box.png",
            desc:"Win the Buy Box, Maximize Your Sales Today."
        },
        {
            id:2,
            heading:"Fulfillment by Amazon (FBA)",
            imageSrc:"/services/delivery.png",
            desc:"Streamline Operations & Boost Sales with FBA Automation."
        },
        {
            id:3,
            heading:"Organic Sales",
            imageSrc:"/services/sales.png",
            desc:"Leverage Built-In Demand with High-Visibility Brands."
        },
    ]
    return(
       <div className='flex w-full h-screen items-center justify-center'>
        <MaxWidthWrapper classNames='flex flex-col gap-7'>
            <h1 className='text-charcoal text-3xl'>Choose a Service <br />
            <span className='text-gold'>Tailored To Your Needs</span></h1>
             
             <div className='grid grid-cols-3 gap-5 w-full h-[65vh]'>
                {data.map((item) => (

                    <div key={item.id} className={cn('group px-4 py-3 w-full h-full bg-white border border-charcoal rounded-lg flex flex-col items-center justify-between',
                        item.id === 2 && "bg-charcoal border-0"
                    )}>
                        <h1 className={cn('font-bold text-center text-charcoal text-2xl',
                            item.id === 2 && "text-white"
                        )}>{item.heading}</h1>
                        <img src={item.imageSrc} alt="Image" className='w-[50%] group-hover:w-[53%] group-hover:-rotate-12 transition-all duration-200 ease-in-out object-contain' />
                        <span className={cn('text-center text-charcoal text-base',
                            item.id === 2 && "text-white"
                        )}>{item.desc}</span>
                    </div>
                ))}
             </div>
        </MaxWidthWrapper>
       </div>
    )
}