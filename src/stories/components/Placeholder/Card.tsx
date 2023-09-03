import { ComponentProps } from "react";
import { SPACED_SIZE } from ".";
import { twMerge } from "tailwind-merge";

export interface Props extends ComponentProps<"div"> {
    size?: SPACED_SIZE;
}

const SIZE_STYLES: Record<SPACED_SIZE, string> = {
    sm: "h-24",
    md: "h-32",
    lg: "h-64",
    xl: "h-96",
};

export const Card = ({ size = "sm", ...rest }: Props) => {
    const cardClass = twMerge(
        "w-full rounded-2xl animate-pulse bg-gray-100",
        SIZE_STYLES[size]
    );
    return <div className={cardClass} {...rest}></div>;
};
