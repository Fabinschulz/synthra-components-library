import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps, useState } from 'react';
import { columnsMock, rowsMock } from './DataTable.mock';
import DataTable from './DataTable.component';

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

export const Template = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  return (
    <DataTable
      rows={rowsMock}
      columns={columnsMock}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
      rowCount={rowsMock.length}
      enableJumpToPage
    />
  );
};

type Story = StoryObj<StoryProps>;

export const TableWithSkeleton: Story = {
  args: {
    columns: columnsMock,
    rows: rowsMock,
    page: 0,
    rowCount: 0,
    rowsPerPage: 5,
    setPage: () => {},
    setRowsPerPage: () => {},
    isLoading: true
  }
};
