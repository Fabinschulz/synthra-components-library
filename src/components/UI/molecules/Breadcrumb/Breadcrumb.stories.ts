import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import Breadcrumb from './Breadcrumb.component';
import { breadcrumbMock, breadcrumbWithSkeleton } from './Breadcrumb.mock';

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
  args: breadcrumbMock
};

export const BreadcrumbWithSkeleton: Story = {
  args: breadcrumbWithSkeleton
};

