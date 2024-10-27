import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { CardData } from './CardData.component';
import { cardDataMock } from './CardData.mock';

type StoryProps = ComponentProps<typeof CardData>;

const meta: Meta<StoryProps> = {
  title: 'UI/molecules/CardData',
  component: CardData,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    listItem: {
      control: { type: 'object' },
      description: 'Determina a lista de items'
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: cardDataMock
};
