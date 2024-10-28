import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Menu } from './Menu.component';
import { menuMock } from './Menu.mock';

type StoryProps = ComponentProps<typeof Menu>;

const meta: Meta<StoryProps> = {
  title: 'UI/organisms/Menu',
  component: Menu,
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

export const Template: Story = {
  args: menuMock
};
