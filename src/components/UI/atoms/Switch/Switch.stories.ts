import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import Switch from './Switch.component';

type StoryProps = ComponentProps<typeof Switch>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Se true, o switch será renderizado como selecionado'
    },
    disabled: {
      control: 'boolean',
      description: 'Determina se o switch esta desabilitado'
    },
    color: { control: 'radio', options: ['primary', 'secondary', 'default'] }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {};
