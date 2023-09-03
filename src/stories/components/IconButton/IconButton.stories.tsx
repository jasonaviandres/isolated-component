import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

const meta = {
    component: IconButton,
    title: "Icon Button",
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default = {
    args: {
        label: "Close",
        icon: <CloseIcon size={12} />,
        size: "medium",
    },
} satisfies Story;
