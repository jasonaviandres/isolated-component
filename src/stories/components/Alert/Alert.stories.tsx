import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta = {
    component: Alert,
    title: "Alert",
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default = {
    args: {
        text: "This is default alert",
        title: "This is default alert",
        isOpen: true,
        setIsOpen: () => {},
    },
} satisfies Story;
