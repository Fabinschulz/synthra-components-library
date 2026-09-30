'use client';
import { Box } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';

export const MainBox = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.background.paper,
  borderRadius: '8px',
  position: 'relative'
}));

export const StyledDataGrid = styled(DataGrid)(({ theme }) => {
  const color = theme.palette?.primary?.dark;
  const { fontSize } = theme.typography.caption!;

  return {
    '& .MuiDataGrid-row': {
      backgroundColor: theme.palette.background.paper
    },
    '& .MuiDataGrid-row .Mui-selected, & .MuiDataGrid-row:nth-child(2n).Mui-selected': {
      backgroundColor: theme.palette.action.selected
    },
    '& .MuiDataGrid-cell': {
      fontSize,
      fontWeight: 400
    },
    '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
      borderRight: `1px solid ${alpha(theme.palette.neutral.light, 0.35)}`
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontSize,
      fontWeight: 700
    },
    '& .MuiDataGrid-columnHeaderTitleContainer .MuiDataGrid-sortIcon': {
      color
    },
    '& .MuiDataGrid-columnHeaderCheckbox .MuiSvgIcon-root, & .MuiDataGrid-cellCheckbox, & .MuiSvgIcon-root':
      {
        fontSize: '22px'
      },
    '& .MuiTablePagination-selectLabel,&  .MuiTablePagination-displayedRows': {
      fontSize,
      color: theme.palette?.neutral?.medium
    },
    '& .MuiTablePagination-displayedRows': {
      marginRight: 23
    },
    '& .MuiTablePagination-select': {
      fontSize,
      marginTop: '5px'
    },
    '& .MuiSelect-icon': {
      color: theme.palette?.neutral?.medium,
      height: '24px',
      width: '24px',
      paddingBottom: '2px'
    },
    '& .MuiTablePagination-toolbar': {
      paddingRight: '2.5rem'
    },
    '& .Mui-disabled': {
      color: theme.palette.text.disabled,
      backgroundColor: 'transparent'
    }
  };
}) as unknown as typeof DataGrid;
