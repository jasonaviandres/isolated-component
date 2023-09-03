import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
    component: Card,
    title: "Card",
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const CardPrimary = {
    args: {
        children: "Card Primary",
    },
} satisfies Story;

export const CardSecondary = {
    args: {
        children: "Card Secondary",
        variant: "secondary",
    },
} satisfies Story;

export const CardDanger = {
    args: {
        children: "Card Danger",
        variant: "danger",
    },
} satisfies Story;
