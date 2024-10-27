import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { TextField } from './TextField.component';

type StoryProps = ComponentProps<typeof TextField>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto do label'
    },
    required: {
      control: 'boolean',
      description: 'Determina se o campo é obrigatório'
    },
    maxLength: {
      control: 'number',
      description: 'Número máximo de caracteres'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Determina se o campo deve ocupar toda a largura'
    },
    disabled: {
      control: 'boolean',
      description: 'Determina se o campo está desabilitado'
    },
    placeholder: {
      control: 'text',
      description: 'Texto do placeholder'
    },
    InputProps: {
      control: 'object',
      description: 'Propriedades do input'
    },
    InputLabelProps: {
      control: 'object',
      description: 'Propriedades do label'
    },
    dataTestId: {
      control: 'text',
      description:
        'Propriedade data-testid, usada para testes automatizados, como: e2e, unitários e integração'
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: {
    label: 'Nome',
    required: true,
    maxLength: 50,
    fullWidth: false,
    disabled: false,
    placeholder: 'Digite seu nome'
  }
};
