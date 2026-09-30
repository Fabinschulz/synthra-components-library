import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import TextField from './TextField.component';

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
    slotProps: {
      control: 'object',
      description: 'Propriedades dos slots (input, inputLabel, htmlInput...)'
    },
    dataTestId: {
      control: 'text',
      description:
        'Propriedade data-testid, usada para testes automatizados, como: e2e, unitários e integração'
    },
    isLoading: {
      description: 'Determina se o skeleton do textfield deve ser exibido',
      control: 'boolean',
      defaultValue: false
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: {
    label: 'Nome',
    required: true,
    fullWidth: true,
    disabled: false,
    isLoading: false,
    placeholder: 'Digite seu nome'
  }
};

export const TextFieldWithSkeleton: Story = {
  args: {
    isLoading: true
  }
};
