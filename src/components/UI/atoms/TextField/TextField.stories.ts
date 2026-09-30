import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import { expect, within } from 'storybook/test';
import TextField from './TextField.component';

type StoryProps = ComponentProps<typeof TextField>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/TextField',
  component: TextField,
  tags: ['autodocs'],
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
    skeleton: {
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
    skeleton: false,
    placeholder: 'Digite seu nome'
  }
};

export const TextFieldWithSkeleton: Story = {
  args: {
    skeleton: true
  }
};

export const Required: Story = {
  args: {
    label: 'Nome',
    required: true
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('textbox', { name: /Nome/ });
    await expect(input).toBeRequired();
  }
};

export const WithError: Story = {
  args: {
    label: 'E-mail',
    error: true,
    helperText: 'Informe um e-mail válido'
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('textbox', { name: 'E-mail' });
    await expect(input).toBeInvalid();
    await expect(input).toHaveAccessibleDescription('Informe um e-mail válido');
  }
};

export const Disabled: Story = {
  args: {
    label: 'Nome',
    disabled: true,
    value: 'Valor não editável'
  }
};
