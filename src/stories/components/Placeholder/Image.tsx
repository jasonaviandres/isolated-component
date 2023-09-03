import { ComponentProps } from "react";
import { SPACED_SIZE } from ".";
import { twMerge } from "tailwind-merge";

type ROUNDED = "none" | "sm" | "md" | "lg" | "full";

export interface Props extends ComponentProps<"div"> {
    size?: SPACED_SIZE;
    rounded?: ROUNDED;
}
const SIZE_STYLES: Record<SPACED_SIZE, string> = {
    sm: "h-24 w-24",
    md: "w-32 h-32",
    lg: "w-64 h-64",
    xl: "w-96 h-96",
};

const ROUNDED_STYLES: Record<ROUNDED, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
};

export const Image = ({ size = "md", rounded = "md", ...rest }: Props) => {
    const imageClass = twMerge(
        "bg-gray-100 animate-pulse",
        SIZE_STYLES[size],
        ROUNDED_STYLES[rounded]
    );
    return <div className={imageClass} {...rest}></div>;
};
