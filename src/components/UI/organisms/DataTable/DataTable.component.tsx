'use client';

import type { FunctionComponent } from 'react';
import type { DataTableProps } from './DataTable.interface';
import { GridFilterModel, GridPaginationModel } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import { useState } from 'react';
import { MainBox, StyledDataGrid } from './DataTable.styled';
import { Typography } from '../../atoms';

const NoOverlayMsg = (message: string) => {
  return (
    <Stack height="auto" alignItems="center" justifyContent="center">
      <Typography variant='body2' color="black" lineHeight="29px">
        {message}
      </Typography>
    </Stack>
  );
};

export const DataTable: FunctionComponent<DataTableProps> = ({
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
  rowSelectionModel = [],
  isRowSelectable = () => false,
  isCellEditable = () => false,
  paginationMode = 'client',
  getRowId = (row) => row?.id ?? Math.random(),
  isLoading,
  ...props
}: DataTableProps) => {
  const [filterModel, setFilterModel] = useState<GridFilterModel | undefined>(undefined);

  const handleFilterModelChange = (model: GridFilterModel, _: any) => {
    setFilterModel(model);
  };

  const paginationModel: GridPaginationModel = { page, pageSize: rowsPerPage };

  const handleChangePaginationModel = (newModel: GridPaginationModel) => {
    setPage(newModel.page);
    setRowsPerPage(newModel.pageSize);
  };

  const pageSizeOptions = [5, 10, 15, 20];

  return (
    <>
      <MainBox>
        <StyledDataGrid
          autoHeight
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
          rowSelection={false}
          getRowId={getRowId}
          disableColumnFilter
          disableRowSelectionOnClick
          disableColumnSelector
          hideFooter={hideFooterSelectedRowCount}
          checkboxSelection={checkboxSelection}
          onRowSelectionModelChange={onSelectionModelChange}
          rowSelectionModel={rowSelectionModel}
          keepNonExistentRowsSelected={keepNonExistentRowsSelected}
          hideFooterPagination={rows?.length === 0}
          hideFooterSelectedRowCount={rows?.length === 0}
          filterModel={filterModel}
          onFilterModelChange={handleFilterModelChange}
          loading={isLoading}
          initialState={{
            pagination: {
              paginationModel: { page: page, pageSize: rowsPerPage }
            }
          }}
          slotProps={{
            pagination: {
              labelRowsPerPage: 'Linha por páginas'
            }
          }}
          slots={{
            noRowsOverlay: () => NoOverlayMsg(NoRowsOverlayNew)
          }}
          {...props}
        />
      </MainBox>
    </>
  );
};
