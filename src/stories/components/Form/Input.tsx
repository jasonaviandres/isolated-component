/* eslint-disable react-refresh/only-export-components */
import {
    ForwardedRef,
    InputHTMLAttributes,
    ReactNode,
    forwardRef,
    useState,
} from "react";
import { Size, SizeStyleProps } from "../../../types";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import { cn } from "../../../utils";
import { FieldLayout } from "./FieldLayout";
import { Icon } from "../Icon/Icon";
import { FiCopy as CopyIcon } from "react-icons/fi";

export interface Props
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "size" | "id" | "children"
    > {
    label?: string;
    size?: Exclude<Size, "tiny">;
    success?: string;
    error?: string;
    description?: ReactNode;
    icon?: IconType;
    iconClass?: string;
    copy?: boolean;
    actions?: ReactNode;
    optional?: boolean;
}

export const SIZE_STYLES: SizeStyleProps = {
    small: "pl-2.5 py-1.5 text-base md:text-sm",
    medium: "pl-4 py-2 text-base",
    large: "pl-4 py-2.5 text-base",
};

export const STATE_STYLES = {
    error: "border-brand-secondary hover:border-brand-secondary focus:border-brand-secondary focus:ring-brand-secondary",
    success:
        "border-green-500 hover:border-green-500 focus:border-green-500 focus:ring-green-500",
};

const INPUT_BUTTON_SIZE: SizeStyleProps = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
};

export const Input = forwardRef(
    (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
        const {
            size = "medium",
            value,
            copy,
            error,
            success,
            description,
            label,
            icon,
            iconClass,
            actions,
            required,
            optional,
            ...inputProps
        } = props;

        const [isCopied, setCopy] = useState(false);
        const hidden = inputProps.type === "password" || inputProps.hidden;

        const inputSizeStyle = SIZE_STYLES[size];
        let inputStateStyles = "";

        if (error) {
            inputStateStyles = STATE_STYLES.error;
        } else if (success) {
            inputStateStyles = STATE_STYLES.success;
        }

        const inputButtonClass = twMerge(
            "px-2 py-0.5 border border-gray-300 flex items-center gap-2 hover:border-gray-400 text-gray-600 hover:text-black shadow-sm rounded-lg",
            INPUT_BUTTON_SIZE[size]
        );

        const inputClass = cn(
            "block w-full box-border bg-ui-secondary-800 text-white rounded-lg transition-all shadow-sm border border-gray-400 hover:border-gray-500 focus:ring-gray-500 focus:border-gray-500 focus:outline-none flex-1 disabled:bg-gray-400",
            inputSizeStyle,
            inputStateStyles,
            {
                "pl-10": icon,
            }
        );

        return (
            <FieldLayout
                label={label}
                optional={optional}
                required={required}
                size={size}
                error={error}
                success={success}
                description={description}
                hidden={inputProps.type === "hidden"}
            >
                <div className="relative">
                    {icon && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <div className={iconClass}>
                                <Icon size={size} icon={icon} />
                            </div>
                        </span>
                    )}
                    <input
                        required={required}
                        {...inputProps}
                        id={label}
                        value={value}
                        ref={ref}
                        className={inputClass}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pl-4 pr-1">
                        {copy && !hidden && (
                            <button
                                onClick={() => setCopy(true)}
                                className={inputButtonClass}
                            >
                                <CopyIcon /> {isCopied ? "Copied" : "Copy"}
                            </button>
                        )}
                        {actions}
                    </div>
                </div>
            </FieldLayout>
        );
    }
);
