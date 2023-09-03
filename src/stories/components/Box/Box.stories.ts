import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import { Button } from '../Button/Button';

const meta = {
    component: Box,
    title: 'Box',
} satisfies Meta<typeof Box>

export default meta;
type Story = StoryObj<typeof Box>

export const BoxAsButton = {
    args: {
        children: 'Connect',
        as: Button
    }
} satisfies Story;