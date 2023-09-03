import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta = {
    title: "Tabs",
    component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof Tabs>;

const TEST_CONTENT = {
    "tab-1": "hellooo",
    "tab-2": "yuhuuuuu",
};

export const Default = {
    args: {
        contents: TEST_CONTENT,
    },
} satisfies Story;
