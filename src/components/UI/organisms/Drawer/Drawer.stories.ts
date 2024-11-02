import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import Drawer from './Drawer.component';

type StoryProps = ComponentProps<typeof Drawer>;

const meta: Meta<StoryProps> = {
  title: 'UI/organisms/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {};
