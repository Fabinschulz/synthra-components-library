import type { Meta, StoryObj } from '@storybook/nextjs';
import Button from './Button.component';
import { argsProps, iconeADireitaProps, iconeAEsquerdaProps } from './Button.mock';
import { ComponentProps } from 'react';
import { fn } from 'storybook/test';

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined'],
      default: 'text',
      control: { type: 'select' },
      description: 'Variações do botão'
    },
    color: {
      options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: { type: 'select' },
      description: 'Cores do botão'
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      description: 'Tamanhos do botão'
    },
    fullWidth: {
      description: 'Determina se o botão irá preencher toda a largura'
    },
    disabled: {
      description: 'Determina se o botão esta desabilitado'
    },
    children: {
      description: 'Determina o conteúdo escrito do botão'
    },
    endIcon: {
      control: false
    },
    startIcon: {
      control: false
    }
  },
  args: {
    onClick: fn()
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: argsProps
};

export const IconeADireita = { args: iconeADireitaProps };
export const IconeAEsquerda = { args: iconeAEsquerdaProps };

export const ButtonWithSkeleton = {
  args: {
    ...argsProps,
    isLoading: true
  }
};
