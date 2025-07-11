import { cn } from "@/lib/utils";
import type { ReactNode } from "react"

interface Props {
    children: ReactNode;
    classNames?: string
}

export const MaxWidthWrapper = ({children, classNames}: Props) => {
    return(
        <div className={cn("max-w-5xl w-full mx-auto", classNames)}>
            {children}
        </div>
    )
}