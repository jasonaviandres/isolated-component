import { Meta, StoryObj } from "@storybook/react";
import { Disclosure } from "./Disclosure";

const meta = {
    component: Disclosure,
    title: "Disclosure",
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof Disclosure>;

export const Default = {
    args: {
        label: "this is disclosure",
        children: <div>This is disclosure</div>,
    },
} satisfies Story;
