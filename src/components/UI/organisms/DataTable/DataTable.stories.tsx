import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import DataTable from './DataTable.component';
import { columnsMock, rowsMock } from './DataTable.mock';

type StoryProps = ComponentProps<typeof DataTable>;

const meta: Meta<StoryProps> = {
  title: 'UI/organisms/DataTable',
  component: DataTable,
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
    columns: columnsMock,
    rows: rowsMock,
    page: 0,
    rowCount: 0,
    rowsPerPage: 5,
    setPage: () => {},
    setRowsPerPage: () => {}
  }
};
