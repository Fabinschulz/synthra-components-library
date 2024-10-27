import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Breadcrumb } from './Breadcrumb.component';

type StoryProps = ComponentProps<typeof Breadcrumb>;

const meta: Meta<StoryProps> = {
  title: 'UI/molecules/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    separator: {
      control: { type: 'text' },
      description: 'Determina o separador do breadcrumb'
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: {
    items: [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'Breadcrumb',
        href: '/breadcrumb'
      }
    ]
  }
};
