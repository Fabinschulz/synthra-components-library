import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import CodeField from './CodeField.component';

type StoryProps = ComponentProps<typeof CodeField>;

const meta: Meta<StoryProps> = {
  title: 'UI/Atoms/CodeField',
  component: CodeField,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    name: {
      control: {
        type: 'text'
      }
    },
    toggle: {
      control: {
        type: 'boolean'
      }
    },
    fields: {
      control: {
        type: 'number'
      }
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: {
    name: 'codeField',
    toggle: false,
    fields: 6
  }
};
