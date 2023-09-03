import { TextBox } from "./TextBox";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    component: TextBox,
    title: "TextBox",
} satisfies Meta<typeof TextBox>;

export default meta;
type Story = StoryObj<typeof TextBox>;

export const Normal = {
    args: {
        label: "This is label",
        size: "medium",
        value: "hello this is a description",
        description: "this is a description box",
    },
} satisfies Story;
