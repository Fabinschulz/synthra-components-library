import {
  DataGridProps,
  GridCallbackDetails,
  GridColDef,
  GridRowIdGetter,
  GridRowParams,
  GridRowSelectionModel
} from '@mui/x-data-grid';

export interface DataTableProps extends DataGridProps {
  rows: any[];
  page: number;
  rowCount: number;
  rowsPerPage: number;
  setPage: (page: number) => void;
  setRowsPerPage: (page: number) => void;
  columns: GridColDef[];
  paginationMode?: 'server' | 'client';
  getRowId?: GridRowIdGetter<any> | undefined;
  onSelectionModelChange?: (
    selectionModel: GridRowSelectionModel,
    details: GridCallbackDetails
  ) => void;
  rowSelectionModel?: GridRowSelectionModel;
  keepNonExistentRowsSelected?: boolean;
  isRowSelectable?: (params: GridRowParams<any>) => boolean;
  checkboxSelection?: boolean;
  hideFooterSelectedRowCount?: boolean;
  NoRowsOverlayNew?: string;
  NoResultsOverlayNew?: string;
  isLoading?: boolean;
}
