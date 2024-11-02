import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import TabBar from './TabBar.component';
import { tabBarMock } from './TabBar.mock';

type StoryProps = ComponentProps<typeof TabBar>;

const meta: Meta<StoryProps> = {
  title: 'UI/molecules/TabBar',
  component: TabBar,
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
  args: tabBarMock
};
