import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import Avatar from './Avatar.component';

type StoryProps = ComponentProps<typeof Avatar>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    imageSrc: {
      description: 'Imagem do avatar'
    },
    title: {
      description: 'Título do avatar'
    },
    subtitle: {
      description: 'Subtítulo do avatar'
    },
    altText: {
      description: 'Texto alternativo para a imagem do avatar'
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: {
    title: 'John Doe',
    subtitle: 'Software Engineer',
    showText: true
  }
};

export const AvatarWithSkeleton: Story = {
  args: {
    isLoading: true,
    title: 'John Doe',
    subtitle: 'Software Engineer'
  }
};
