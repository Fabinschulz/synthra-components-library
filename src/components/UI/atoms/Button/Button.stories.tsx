import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button.component';
import { argsProps, iconeADireitaProps, iconeAEsquerdaProps } from './Button.mock';

const meta: Meta = {
  title: 'UI/atoms/Button',
  component: Button,
  tags: ['autodocs', 'button'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/wszzS39ImbNm0Un5Z6OamL/MUI---Hypera?node-id=11011-143217&node-type=frame&t=4gGOkgoaVbfPsEKF-0'
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
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Template: Story = {
  args: argsProps
};

export const IconeADireita = { args: iconeADireitaProps };
export const IconeAEsquerda = { args: iconeAEsquerdaProps };
