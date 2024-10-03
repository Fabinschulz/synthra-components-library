import React, { useState } from 'react';
import { DataTable } from '../../organisms';
import { GridColDef } from '@mui/x-data-grid';

type TableComponentProps<T> = {
  rows: T[];
  columns: GridColDef[];
};

export default function TableComponent<T>({ rows, columns }: TableComponentProps<T>) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  return (
    <DataTable
      rows={rows}
      columns={columns}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
      rowCount={rows.length}
    />
  );
}
