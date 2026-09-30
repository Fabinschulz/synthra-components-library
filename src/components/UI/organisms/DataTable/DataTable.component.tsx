'use client';

import type { FunctionComponent } from 'react';
import type { DataTableProps } from './DataTable.interface';
import { GridFilterModel, GridPaginationModel, GridRowSelectionModel } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import { useState } from 'react';
import { ArrowButtonLeftSx, ArrowButtonRightSx, MainBox, StyledDataGrid } from './DataTable.styled';
import { Typography } from '../../atoms';
import { DataTableSkeleton } from './DataTable.skeleton';
import { JumpToEndIcon, JumpToStartIcon } from '../../icons';
import JumpButton from './JumpButton';

const NoOverlayMsg = (message: string) => {
  return (
    <Stack sx={{ height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="body2" color="black" sx={{ lineHeight: '29px' }}>
        {message}
      </Typography>
    </Stack>
  );
};

const emptyRowSelectionModel: GridRowSelectionModel = { type: 'include', ids: new Set() };

const iconSx = {
  width: 33,
  height: 33
};

const DataTable: FunctionComponent<DataTableProps> = ({
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
  isRowSelectable = () => false,
  isCellEditable = () => false,
  paginationMode = 'client',
  getRowId = (row) => row?.id ?? Math.random(),
  isLoading = false,
  enableJumpToPage = false,
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

  const handleJumpToStart = () => {
    setPage(0);
  };

  const handleJumpToEnd = () => {
    const lastPage = Math.ceil(rowCount / rowsPerPage) - 1;
    setPage(lastPage);
  };

  return (
    <DataTableSkeleton isLoading={isLoading} rowsPerPage={rowsPerPage}>
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
        {rows?.length > 0 && (
          <>
            <JumpButton
              sx={ArrowButtonLeftSx}
              icon={<JumpToStartIcon sx={iconSx} htmlColor={page === 0 ? '#BDBDBD' : 'black'} />}
              onClick={handleJumpToStart}
              disabled={page === 0}
              tooltip="Primeira página"
            />
            <JumpButton
              sx={ArrowButtonRightSx}
              icon={
                <JumpToEndIcon
                  sx={iconSx}
                  htmlColor={page === Math.ceil(rowCount / rowsPerPage) - 1 ? '#BDBDBD' : 'black'}
                />
              }
              onClick={handleJumpToEnd}
              disabled={page === Math.ceil(rowCount / rowsPerPage) - 1}
              tooltip="Última página"
            />
          </>
        )}
      </MainBox>
    </DataTableSkeleton>
  );
};

export default DataTable;
