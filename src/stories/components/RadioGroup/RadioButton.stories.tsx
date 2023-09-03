import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta = {
    component: RadioButton,
    title: "Radio Button",
    args: {
        value: "hellooo",
        size: "small",
        label: "hellooo",
        name: "test",
    },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default = {
    args: {
        onChange: () => void 0,
        disabled: false,
        value: "Test Radio",
        size: "small",
        label: "hello this is Radio Button",
        name: "test",
    },
} satisfies Story;

export const Disabled = {
    args: {
        disabled: true,
        value: "Test Radio",
        label: "hello this is disabled Radio Button",
        name: "test",
    },
} satisfies Story;

export const Group: StoryFn<typeof RadioButton> = (args) => {
    return (
        <>
            <RadioButton {...args} />
            <RadioButton {...args} />
            <RadioButton {...args} />
        </>
    );
};
