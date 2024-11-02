import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import LoadingBar from './LoadingBar.component';

type StoryProps = ComponentProps<typeof LoadingBar>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/LinearProgress',
  component: LoadingBar,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    color: {
      options: ['inherit', 'primary', 'secondary'],
      default: 'inherit',
      control: { type: 'select' },
      description: 'Variações de cores da barra de carregamento'
    },
    variant: {
      options: ['buffer', 'determinate', 'indeterminate'],
      default: 'indeterminate',
      control: { type: 'select' },
      description: 'Variante usada para determinar o valor de progresso'
    },
    valueBuffer: {
      control: { type: 'text' },
      description: 'Valor do progresso'
    },
    value: {
      control: { type: 'text' },
      description: 'Valor do progresso'
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: {
    color: 'primary',
    variant: 'indeterminate'
  }
};
