import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import { MenuList } from '@mui/material';
import MenuItem from './MenuItem.component';

type StoryProps = ComponentProps<typeof MenuItem>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MenuList>
        <Story />
      </MenuList>
    )
  ],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Conteúdo do item do menu'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o item do menu'
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'select' },
      description: 'Variações de tamanhos'
    },
    selected: {
      control: { type: 'boolean' },
      description: 'Seleciona o item do menu'
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: {
    children: 'Item',
    selected: false,
    size: 'medium'
  }
};
