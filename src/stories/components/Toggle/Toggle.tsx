import { ButtonHTMLAttributes, ComponentProps } from "react";
import { Size } from "../../../types";
import { cn } from "../../../utils";
import { Switch } from "@headlessui/react";

type ToggleSize = Extract<Size, "small" | "medium">;

export interface Props
    extends Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "size" | "ref" | "children" | "value" | "onChange"
    > {
    value: boolean;
    disabled?: boolean;
    onChange: (value: boolean) => void;
    size?: ToggleSize;
}

interface ToggleButtonProps extends ComponentProps<"button"> {
    size?: ToggleSize;
    enabled?: boolean;
}

interface ToggleButtonThumbProps extends ComponentProps<"span"> {
    size?: ToggleSize;
    enabled?: boolean;
}

const SIZE_STYLES: Record<ToggleSize, string> = {
    small: "h-6 w-11",
    medium: "h-7 w-12",
};

const THUMB_SIZE_STYLES: Record<ToggleSize, string> = {
    small: "h-4 w-4",
    medium: "h-5 w-5",
};

const ToggleButton = ({
    size = "medium",
    enabled,
    ...rest
}: ToggleButtonProps) => {
    const toggleButtonClass = cn(
        "relative disabled:opacity-50 inline-flex  items-center rounded-full",
        SIZE_STYLES[size],
        {
            "bg-primary-500": enabled,
            "bg-gray-400": !enabled,
        }
    );
    return <button className={toggleButtonClass} {...rest} />;
};

const ToggleButtonThumb = ({
    size = "medium",
    enabled,
    ...rest
}: ToggleButtonThumbProps) => {
    const toggleButtonThumbClass = cn(
        "inline-block transform rounded-full bg-white transition",
        THUMB_SIZE_STYLES[size],
        {
            "translate-x-6": enabled,
            "translate-x-1": !enabled,
        }
    );
    return <span className={toggleButtonThumbClass} {...rest} />;
};

export const Toggle = ({ value, disabled, onChange, size, ...rest }: Props) => {
    return (
        <Switch
            disabled={disabled}
            checked={value}
            onChange={onChange}
            size={size as ToggleSize}
            as={ToggleButton}
            enabled={value}
            {...rest}
        >
            <ToggleButtonThumb size={size as ToggleSize} enabled={value} />
        </Switch>
    );
};
