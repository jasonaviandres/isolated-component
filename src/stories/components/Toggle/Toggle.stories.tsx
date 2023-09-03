import { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";

const meta = {
    component: Toggle,
    title: "Toggle",
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default = {
    args: {
        value: false,
    },
} satisfies Story;

export const Disabled = {
    args: {
        value: false,
        disabled: true,
    },
};
