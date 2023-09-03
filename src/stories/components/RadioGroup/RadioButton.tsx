import { twMerge } from "tailwind-merge";
import { Size, SizeStyleProps } from "../../../types";

interface Props {
    size: Extract<Size, "small" | "medium">;
    value: string;
    onChange: (checked: string) => void;
    disabled?: boolean;
    label: string;
    name: string;
}

const SIZE_STYLES: SizeStyleProps = {
    small: "w-4 h-4",
    medium: "h-5 w-5",
};

const TEXT_SIZE_STYLES: SizeStyleProps = {
    small: "text-sm",
    medium: "text-base",
};

const CIRCLE_SIZE_STYLES: SizeStyleProps = {
    small: "w-2 h-2",
    medium: "w-2.5 h-2.5",
};

export const RadioButton = ({
    size = "small",
    value,
    onChange,
    disabled,
    label,
    name,
}: Props) => {
    const checkboxClass = twMerge(
        "appearance-none peer border cursor-pointer rounded-full relative border-gray-500 bg-white disabled:cursor-not-allowed hover:bg-gray-200 shrink-0 disabled:bg-gray-300 disabled:border-gray-500",
        SIZE_STYLES[size]
    );

    const circleClass = twMerge(
        "absolute hidden peer-checked:block translate-x-1/2 rounded-full bg-gray-500",
        CIRCLE_SIZE_STYLES[size]
    );
    return (
        <label className="flex gap-2 items-center">
            <input
                type="radio"
                value={value}
                name={name}
                className={checkboxClass}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
            />
            <div className={circleClass}></div>
            <span className={TEXT_SIZE_STYLES[size]}>{label}</span>
        </label>
    );
};
