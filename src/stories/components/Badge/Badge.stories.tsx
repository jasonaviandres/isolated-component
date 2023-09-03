import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import {
    FaLock,
    FaExclamation as DangerIcon,
    FaCheckCircle as CheckIcon,
} from "react-icons/fa";
import { CgSpinner as SpinnerIcon } from "react-icons/cg";

const meta = {
    component: Badge,
    title: "Badge",
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default = {
    args: {
        children: "Locked",
        iconLeft: <FaLock size={12} />,
    },
} satisfies Story;

export const RedBadge = {
    args: {
        children: "Invalid API key",
        size: "large",
        variant: "red",
        iconRight: <DangerIcon size={14} />,
    },
} satisfies Story;

export const GreenBadge = {
    args: {
        children: "Success",
        size: "tiny",
        variant: "green",
        iconRight: <CheckIcon size={11} />,
    },
} satisfies Story;

export const LoadingBadge = {
    args: {
        children: "loading...",
        variant: "blue",
        iconRight: (
            <SpinnerIcon
                className="animate-spin motion-reduce:invisible"
                size={18}
            />
        ),
    },
};
