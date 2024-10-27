import type { Meta } from '@storybook/react';
import { ComponentProps } from 'react';
import { DataTable } from './DataTable.component';
import { columnsMock, rowsMock } from './DataTable.mock';

type StoryProps = ComponentProps<typeof DataTable>;

const meta: Meta<StoryProps> = {
  title: 'UI/Organisms/DataTable',
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
  return (
    <DataTable
      columns={columnsMock}
      rows={rowsMock}
      page={0}
      rowCount={0}
      rowsPerPage={0}
      setPage={() => {}}
      setRowsPerPage={() => {}}
    />
  );
};
