import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import { Tabs } from '@mui/material';
import TabItem from './TabItem.component';

type StoryProps = ComponentProps<typeof TabItem>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/TabItem',
  component: TabItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Tabs value={0}>
        <Story />
      </Tabs>
    )
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto do tab'
    },
    component: {
      control: 'text',
      description: 'Componente, página ou rota que será renderizado ao clicar na tab'
    },
    href: {
      control: 'text',
      description: 'Link de navegação'
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: {
    label: 'Tab 1'
  }
};
