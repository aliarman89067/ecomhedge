import { navbarLinks } from "@/constant"
import { MenuIcon } from "lucide-react"
import { MaxWidthWrapper } from "../max-width-wrapper"
import {Sheet, SheetTrigger, SheetHeader, SheetTitle, SheetContent} from "@/components/ui/sheet"

export const Navbar= ()=> {
    return(
        <div className="flex items-center justify-between bg-black h-16 w-full">
            <MaxWidthWrapper>

            <div className="flex items-center justify-between flex-1">
                <div className="text-white">
                    ecomhedge 
                </div>
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                    {navbarLinks.map((item) =>(
                        <span key={item.id} className="text-gray-100 font-extralight text-lg">
                            {item.label}
                        </span>
                    ))}
                    </div>
                        <Sheet>
                            <SheetTrigger>

                        <MenuIcon className="size-8 text-white"/>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <div className="flex items-center gap-5 flex-col">

                    {navbarLinks.map((item) =>(
                        <div key={item.id} className="relative overflow-hidden group w-full h-14 flex items-center gap-3 px-4 cursor-pointer bg-white">
                            <div className="absolute -top-14 group-hover:top-0 transition-all duration-150 ease-in-out left-0 w-full h-full bg-charcoal"></div>
                            <span className="z-10 text-black group-hover:text-white font-extralight text-xl duration-200 transition-all ease-in-out">{item.label}</span>
                        </div>
                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    
                </div>
            </div>
                    </MaxWidthWrapper>
        </div>
    )
}