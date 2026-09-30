'use client';

import type { DataTableProps } from './DataTable.interface';
import type { GridRowIdGetter, GridValidRowModel } from '@mui/x-data-grid';
import { GridFilterModel, GridPaginationModel, GridRowSelectionModel } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import { useState } from 'react';
import { MainBox, StyledDataGrid } from './DataTable.styled';
import { Typography } from '../../atoms';
import { DataTableSkeleton } from './DataTable.skeleton';

const OverlayMessage = (message: string) => {
  return (
    <Stack sx={{ height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="body2" sx={{ color: 'neutral.darkest', lineHeight: '29px' }}>
        {message}
      </Typography>
    </Stack>
  );
};

const emptyRowSelectionModel: GridRowSelectionModel = { type: 'include', ids: new Set() };

const generatedRowIds = new WeakMap<object, string>();
let generatedRowIdCounter = 0;
const defaultGetRowId: GridRowIdGetter<any> = (row) => {
  if (row?.id !== undefined && row?.id !== null) return row.id;
  let id = generatedRowIds.get(row);
  if (!id) {
    id = `synthra-row-${++generatedRowIdCounter}`;
    generatedRowIds.set(row, id);
  }
  return id;
};

const DataTable = <R extends GridValidRowModel = any>({
  NoRowsOverlayNew = 'Nenhum resultado encontrado',
  NoResultsOverlayNew = 'Nenhum resultado encontrado',
  rows,
  setPage,
  setRowsPerPage,
  hideFooterSelectedRowCount = false,
  onSelectionModelChange,
  keepNonExistentRowsSelected,
  page,
  rowsPerPage,
  columns,
  rowCount,
  loading = false,
  checkboxSelection = false,
  rowSelectionModel = emptyRowSelectionModel,
  isRowSelectable,
  isCellEditable = () => false,
  paginationMode = 'client',
  getRowId = defaultGetRowId,
  skeleton = false,
  enableJumpToPage = false,
  labelRowsPerPage,
  ...props
}: DataTableProps<R>) => {
  const [filterModel, setFilterModel] = useState<GridFilterModel | undefined>(undefined);

  const handleFilterModelChange = (model: GridFilterModel) => {
    setFilterModel(model);
  };

  const paginationModel: GridPaginationModel = { page, pageSize: rowsPerPage };

  const handleChangePaginationModel = (newModel: GridPaginationModel) => {
    setPage(newModel.page);
    setRowsPerPage(newModel.pageSize);
  };

  const pageSizeOptions = [5, 10, 15, 20];
  const hasRows = rows?.length > 0;

  return (
    <DataTableSkeleton skeleton={skeleton} rowsPerPage={rowsPerPage}>
      <MainBox sx={{ height: Math.max(rowsPerPage * 35 + 190, 350) }}>
        <StyledDataGrid
          rows={rows}
          columns={columns}
          rowCount={rowCount}
          rowHeight={40}
          pageSizeOptions={pageSizeOptions}
          pagination
          paginationMode={paginationMode}
          paginationModel={paginationModel}
          onPaginationModelChange={handleChangePaginationModel}
          disableColumnMenu
          isCellEditable={isCellEditable}
          isRowSelectable={isRowSelectable}
          rowSelection={checkboxSelection || !!onSelectionModelChange}
          getRowId={getRowId}
          disableColumnFilter
          disableRowSelectionOnClick
          disableColumnSelector
          checkboxSelection={checkboxSelection}
          onRowSelectionModelChange={onSelectionModelChange}
          rowSelectionModel={rowSelectionModel}
          keepNonExistentRowsSelected={keepNonExistentRowsSelected}
          hideFooterPagination={!hasRows}
          hideFooterSelectedRowCount={hideFooterSelectedRowCount || !hasRows}
          filterModel={filterModel}
          onFilterModelChange={handleFilterModelChange}
          loading={loading}
          initialState={{
            pagination: {
              paginationModel: { page: page, pageSize: rowsPerPage }
            }
          }}
          localeText={labelRowsPerPage ? { paginationRowsPerPage: labelRowsPerPage } : undefined}
          slotProps={{
            basePagination: {
              material: {
                showFirstButton: enableJumpToPage,
                showLastButton: enableJumpToPage
              }
            }
          }}
          slots={{
            noRowsOverlay: () => OverlayMessage(NoRowsOverlayNew),
            noResultsOverlay: () => OverlayMessage(NoResultsOverlayNew)
          }}
          {...props}
        />
      </MainBox>
    </DataTableSkeleton>
  );
};

export default DataTable;
