import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';

export const MainBox = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette?.common?.white,
  borderRadius: '8px',
  position: 'relative'
}));

export const StyledDataGrid = styled(DataGrid)(({ theme }) => {
  const color = theme.palette?.primary?.dark;
  const { fontSize } = theme.typography.caption!;

  return {
    '& .MuiDataGrid-row': {
      backgroundColor: theme.palette?.common?.white
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
      color: theme.palette?.neutral?.medium
    },
    '& .css-aglid1-MuiTablePagination-displayedRows': {
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
    '& .MuiDataGrid-virtualScrollerRenderZone': {
      marginTop: '0'
    },
    '& .MuiTablePagination-toolbar': {
      paddingRight: '2.5rem'
    },
    '& .Mui-disabled': {
      color: '#BDBDBD',
      backgroundColor: 'transparent'
    }
  };
});

export const ArrowButtonLeftSx = {
  position: 'absolute',
  bottom: 2.6,
  right: 4 * 25
};

export const ArrowButtonRightSx = {
  position: 'absolute',
  bottom: -3.5,
  left: 'calc(100% - 55px)'
};
