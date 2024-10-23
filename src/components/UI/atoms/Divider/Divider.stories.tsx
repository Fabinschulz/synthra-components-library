import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider.component';
import { ComponentProps } from 'react';
import { dividerHorizontalProps, dividerVerticalProps } from './Divider.mock';

type StoryProps = ComponentProps<typeof Divider>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    variant: {
      options: ['fullWidth', 'inset', 'middle'],
      control: { type: 'select' },
      description: 'Variações do separador'
    },
    color: {
      control: { type: 'color' },
      description: 'Cor do separador'
    },
    textAlign: {
      options: ['center', 'left', 'right'],
      control: { type: 'select' },
      description: 'Alinhamento do texto'
    },
    children: {
      control: { type: 'text' },
      description: 'Texto do separador'
    },
    absolute: {
      control: { type: 'boolean' },
      description: 'Define se o separador é absoluto'
    },
    flexItem: {
      control: { type: 'boolean' },
      description: 'Define se o separador é um item flexível'
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: dividerHorizontalProps
};

export const Vertical: Story = {
  args: dividerVerticalProps
};
export const Horizontal: Story = {
  args: dividerHorizontalProps
};
