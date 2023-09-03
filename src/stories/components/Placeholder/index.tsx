import { ComponentProps } from "react";
import { cn } from "../../../utils";
import { Card } from "./Card";
import { Image } from "./Image";
import { Line } from "./Line";

export type SPACED_SIZE = "sm" | "md" | "lg" | "xl";
export interface Props extends ComponentProps<"div"> {
    spaced?: SPACED_SIZE;
    inline?: boolean;
}

const SPACED_STYLES: Record<SPACED_SIZE, string> = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
};

export const Root = ({ spaced = "md", inline = true, ...rest }: Props) => {
    const rootClass = cn("flex", SPACED_STYLES[spaced], { "flex-col": inline });
    return <div className={rootClass} {...rest}></div>;
};

export const Placeholder = { Root, Card, Image, Line };
