import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox.component';
import { ComponentProps } from 'react';
import { checkboxMock } from './Checkbox.mock';

type StoryProps = ComponentProps<typeof Checkbox>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/Checkbox',
  component: Checkbox,
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
      defaultValue: 'Checkbox'
    },
    name: {
      control: 'text',
      description: 'Nome do campo',
      defaultValue: 'checkbox'
    },
    formControlSX: {
      control: 'object',
      description: ' Edita o style do FormControlLabel'
    },
    checked: {
      control: 'boolean',
      description: 'Determina se o checkbox está marcado'
    },
    disabled: {
      control: 'boolean',
      description: 'Determina se o checkbox está desabilitado'
    },
    onChange: {
      description: 'Função de callback de quando o checkbox é alterado'
    },
    color: {
      control: 'select',
      options: ['primary', 'default'],
      description: 'Cor do checkbox'
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: checkboxMock
};
