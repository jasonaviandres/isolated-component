import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta = {
    component: Modal,
    title: "Modal",
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default = {
    args: {
        children: <p>Hello this is modal!</p>,
        isOpen: true,
        setIsOpen: () => {},
    },
} satisfies Story;
