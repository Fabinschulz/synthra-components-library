import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import { fn } from 'storybook/test';
import Alert from './Alert.component';

type StoryProps = ComponentProps<typeof Alert>;

const meta: Meta<StoryProps> = {
  title: 'UI/molecules/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    onClose: {
      description: 'Função executada ao fechar o alerta'
    },
    variant: {
      options: ['filled', 'outlined', 'standard'],
      default: 'filled',
      control: { type: 'select' },
      description: 'Variações de estilo do alert'
    },
    severity: {
      options: ['error', 'info', 'success', 'warning'],
      default: 'info',
      control: { type: 'select' },
      description: 'Tipo de cor do alert'
    },
    description: {
      description: 'Descrição do alerta'
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: {
    title: 'Alerta',
    onClose: fn(),
    description: 'Alerta de exemplo'
  }
};
