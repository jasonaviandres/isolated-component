import { twMerge } from "tailwind-merge";
import { Size, SizeStyleProps } from "../../../types";
import { HiCheck as CheckIcon } from "react-icons/hi2";
import { Icon } from "../Icon/Icon";

interface Props {
    size: Extract<Size, "small" | "medium">;
    checked: boolean;
    onCheck: (checked: boolean) => void;
    disabled?: boolean;
    label: string;
}

const SIZE_STYLES: SizeStyleProps = {
    small: "w-4 h-4",
    medium: "h-5 w-5",
};

const TEXT_SIZE_STYLES: SizeStyleProps = {
    small: "text-sm",
    medium: "text-base",
};

const ICON_SIZE_STYLES: SizeStyleProps = {
    small: "16",
    medium: "20",
};

export const Checkbox = ({
    size = "small",
    checked,
    onCheck,
    disabled,
    label,
}: Props) => {
    const checkboxClass = twMerge(
        "appearance-none peer border cursor-pointer relative border-gray-500 bg-white hover:bg-gray-200 shrink-0 checked:bg-gray-500 checked:border-0 disabled:bg-gray-300 disabled:border-gray-500 checked:hover:gray-600",
        SIZE_STYLES[size]
    );
    return (
        <label className="flex gap-2 items-center">
            <input
                type="checkbox"
                checked={checked}
                className={checkboxClass}
                onChange={(e) => onCheck(e.target.checked)}
                disabled={disabled}
            />
            <Icon
                icon={CheckIcon}
                size={parseInt(ICON_SIZE_STYLES[size] as string)}
                color="white"
                className="absolute hidden peer-checked:block"
            />
            <span className={TEXT_SIZE_STYLES[size]}>{label}</span>
        </label>
    );
};
