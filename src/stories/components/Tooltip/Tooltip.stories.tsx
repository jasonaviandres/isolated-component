import { Meta, StoryObj } from "@storybook/react";
import { FaCheckCircle as CheckIcon } from "react-icons/fa";

import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";
import { TooltipProvider } from "@radix-ui/react-tooltip";
const meta = {
    component: Tooltip,
    title: "Tooltip",
    // note: this is to let the storybook wrap the component with provider
    decorators: [
        (Story) => (
            <TooltipProvider delayDuration={300}>
                <div className="grid items-center justify-center h-screen bg-gray-50">
                    <Story />
                </div>
            </TooltipProvider>
        ),
    ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
    args: {
        children: <Button variant="primary"> Greet </Button>,
        tip: <p> Greet a person </p>,
        sideOffset: 6,
    },
} satisfies Story;

export const TopTooltip = {
    args: {
        children: (
            <button className="p-2 rounded glass-pane">
                <CheckIcon />
            </button>
        ),
        tip: <p> Mark the report </p>,
        sideOffset: 6,
        side: "top",
    },
} satisfies Story;
