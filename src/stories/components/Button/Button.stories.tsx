import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { FaLock } from "react-icons/fa";

const meta = {
    component: Button,
    title: "Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButton = {
    args: {
        children: "Connect",
        iconLeft: <FaLock size={12} />,
    },
} satisfies Story;

export const SecondaryButton = {
    args: {
        children: "Login",
        variant: "secondary",
        size: "medium",
    },
} satisfies Story;

export const LoadingButton = {
    args: {
        loading: true,
        children: "Please wait...",
        size: "medium",
    },
} satisfies Story;

export const DisabledButton = {
    args: {
        disabled: true,
        children: "Disabled",
    },
} satisfies Story;

export const OutlinedPrimaryButton = {
    args: {
        variant: "outlined-primary",
        children: "Login",
    },
} satisfies Story;

export const DisabledOutlinedPrimaryButton = {
    args: {
        variant: "outlined-primary",
        disabled: true,
        children: "Disabled",
    },
};
