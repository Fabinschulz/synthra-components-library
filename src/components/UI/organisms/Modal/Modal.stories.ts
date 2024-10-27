import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Modal } from './Modal.component';
import { fn } from '@storybook/test';

type StoryProps = ComponentProps<typeof Modal>;

const meta: Meta<StoryProps> = {
  title: 'UI/Organisms/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: {
    open: false,
    onClose: fn,
    children: 'Modal content'
  }
};
