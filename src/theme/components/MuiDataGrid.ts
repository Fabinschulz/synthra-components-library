import type { Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import type { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';

export const MuiDataGrid: DataGridComponents<Theme>['MuiDataGrid'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 0,
      border: 'none',
      '& .MuiDataGrid-columnHeaders': {
        color: theme.palette.neutral.darkest,
        ...theme.typography.body2,
        lineHeight: '19px',
        minHeight: 'auto!important'
      },
      '& .MuiDataGrid-virtualScrollerRenderZone': {
        marginTop: '24px',
        '& .MuiDataGrid-row': {
          '&:nth-child(2n)': { backgroundColor: alpha(theme.palette.neutral.light, 0.07) }
        }
      },
      '& .MuiDataGrid-iconButtonContainer': {
        visibility: 'visible!important',
        width: 'auto!important',
        marginRight: '5px'
      },
      '& .MuiDataGrid-sortIcon': {
        opacity: '1!important',
        fontSize: '25px!important',
        color: theme.palette.neutral.darkest
      },
      '& .MuiDataGrid-columnHeaderTitleContainer': {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        marginLeft: '-10px'
      }
    }),
    row: ({ theme }) => ({
      '&.Mui-disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
        cursor: 'not-allowed'
      },

      '&.Mui-pointer': {
        cursor: 'pointer'
      }
    }),
    columnSeparator: {
      display: 'none'
    },
    columnHeaders: ({ theme }) => ({
      borderColor: alpha(theme.palette.neutral.light, 0.4),
      marginBottom: '24px'
    }),
    columnHeader: {
      padding: '0px 24px'
    },
    columnHeaderCheckbox: {
      padding: 0
    },
    cell: ({ theme }) => ({
      ...theme.typography.caption,
      lineHeight: '14px',
      padding: '0px 24px',
      border: 'none'
    }),
    footerContainer: ({ theme }) => ({
      border: 'none',
      ...theme.typography.caption
    })
  }
};
