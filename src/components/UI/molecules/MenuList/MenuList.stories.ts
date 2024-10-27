import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { MenuList } from './MenuList.component';
import { menuListMediumMock, menuListSmallMock } from './MenuList.mock';

type StoryProps = ComponentProps<typeof MenuList>;

const meta: Meta<StoryProps> = {
  title: 'UI/molecules/MenuList',
  component: MenuList,
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

export const MenuListMedium: Story = {
  args: menuListMediumMock
};

export const MenuListSmall: Story = {
  args: menuListSmallMock
};
