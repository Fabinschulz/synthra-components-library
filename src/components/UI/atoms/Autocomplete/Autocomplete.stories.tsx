import type { Meta, StoryObj } from '@storybook/nextjs';
import Autocomplete from './Autocomplete.component';
import { ComponentProps } from 'react';
import { autocompletMock, autocompletWithSkeleton } from './Autocomplete.mock';

type StoryProps = ComponentProps<typeof Autocomplete>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/Autocomplete',
  component: Autocomplete,
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
      description: 'Label do campo',
      defaultValue: 'Autocomplete com select'
    },
    options: {
      control: 'object',
      description: 'Opções do select'
    },
    onChange: {
      description: 'Função de callback de quando o valor do autocomplete é alterado'
    },
    multiple: {
      description: 'Determina se o autocomplete aceita múltiplas seleções',
      control: 'boolean',
      defaultValue: false
    },
    value: {
      description: 'Valor do autocomplete',
      control: 'object'
    },
    error: {
      control: 'boolean',
      description: 'Determina se o autocomplete esta com erro',
      defaultValue: false
    },
    endIconType: {
      control: { type: 'select' },
      options: ['link', 'submit', undefined],
      description: 'Tipo de valor do ícone de pesquisa no final do campo',
      defaultValue: undefined
    },
    link: {
      control: 'text',
      description: 'Rota para onde o link do ícone de pesquisa deve apontar',
      defaultValue: '/'
    },

    loading: {
      description: 'Determina se o autocomplete esta carregando'
    },
    onChangeTextField: {
      description: 'Função de callback de quando o valor do TextField é alterado'
    },
    name: {
      description: 'Nome do autocomplete'
    },
    required: {
      description: 'Determina se o autocomplete é obrigatório'
    },
    isLoading: {
      description: 'Determina se o skeleton do autocomplete deve ser exibido',
      control: 'boolean',
      defaultValue: false
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: autocompletMock
};

export const AutocompleteWithSkeleton: Story = {
  args: autocompletWithSkeleton
};
