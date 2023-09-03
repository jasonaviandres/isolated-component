import { ComponentProps } from "react";
import { SPACED_SIZE } from ".";
import { twMerge } from "tailwind-merge";

type WidthSize = SPACED_SIZE | "full";

export interface Props extends ComponentProps<"div"> {
    size?: SPACED_SIZE;
    width?: WidthSize;
}

const SIZE_STYLES: Record<SPACED_SIZE, string> = {
    sm: "h-4",
    md: "h-6",
    lg: "h-8",
    xl: "h-10",
};

const WIDTH_STYLES: Record<WidthSize, string> = {
    sm: "w-1/4",
    md: "w-1/3",
    lg: "w-1/2",
    xl: "w-3/4",
    full: "w-full",
};

export const Line = ({ size = "md", width = "full", ...rest }: Props) => {
    const lineClass = twMerge(
        "bg-gray-100 rounded-xl animate-pulse",
        SIZE_STYLES[size],
        WIDTH_STYLES[width]
    );
    return <div className={lineClass} {...rest}></div>;
};
