import { Box, IconButton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';

export const MainBox = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '10px',
  background: theme.palette.common.white,
  borderRadius: '8px'
}));

export const StyledSearchField = styled(GridToolbarQuickFilter)(({ theme }) => ({
  width: '50%',
  '& .MuiInputBase-input': {
    ...theme.typography.caption,
    padding: '14px',
    height: '56px',
    boxSizing: 'border-box',
    color: theme.palette.primary.dark,
    '&::placeholder': {
      ...theme.typography.caption,
      color: theme.palette.primary.contrastText,
      opacity: 1
    }
  },
  '& .MuiSvgIcon-root': {
    fontSize: '20px',
    color: theme.palette.primary.contrastText
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '20px'
  }
}));

export const StyledDataGrid = styled(DataGrid)(({ theme }) => {
  const color = theme.palette.primary.dark;
  const { fontSize } = theme.typography.h5!;

  return {
    '& .MuiDataGrid-row': {
      backgroundColor: theme.palette.common.white
    },
    '& .MuiDataGrid-row .Mui-selected, & .MuiDataGrid-row:nth-child(2n).Mui-selected': {
      backgroundColor: 'rgba(208, 77, 39, 0.08)'
    },
    '& .MuiDataGrid-cell': {
      fontSize,
      fontWeight: 400
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
      borderRight: '1px solid',
      ...theme.applyStyles('light', {
        borderRightColor: '#f0f0f0'
      })
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontSize,
      fontWeight: 700,
      whiteSpace: 'normal',
      lineHeight: 'normal',
      wordWrap: 'break-word'
    },
    '& .MuiDataGrid-columnHeaderTitleContainer .MuiDataGrid-sortIcon': {
      color
    },
    '& .MuiDataGrid-columnHeaderCheckbox .MuiSvgIcon-root, & .MuiDataGrid-cellCheckbox, & .MuiSvgIcon-root':
      {
        fontSize: '22px'
      },
    '& .MuiTablePagination-selectLabel,&  .css-aglid1-MuiTablePagination-displayedRows': {
      fontSize,
      color: theme.palette.neutral.medium
    },
    '& .css-aglid1-MuiTablePagination-displayedRows': {
      marginRight: 23
    },
    '& .MuiTablePagination-select': {
      fontSize,
      marginTop: '5px'
    },
    '& .MuiSelect-icon': {
      color: theme.palette.neutral.medium,
      height: '24px',
      width: '24px',
      paddingBottom: '2px'
    },
    '& .MuiDataGrid-virtualScrollerRenderZone': {
      marginTop: '0'
    }
  };
});

export const ArrowButtonLeft = styled(IconButton)(() => ({
  position: 'absolute',
  bottom: 5.8,
  right: 4 * 27
}));

export const ArrowButtonRight = styled(IconButton)(() => ({
  position: 'absolute',
  bottom: 5.8,
  left: 'calc(100% - 70px)'
}));
