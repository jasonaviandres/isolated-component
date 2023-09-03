import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
    component: Checkbox,
    title: "Checkbox",
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default = {
    args: {
        onCheck: () => void 0,
        disabled: false,
        checked: false,
        size: "small",
        label: "hello this is checkbox",
    },
} satisfies Story;

export const Disabled = {
    args: {
        disabled: true,
        checked: false,
        label: "hello this is disabled checkbox",
    },
} satisfies Story;
