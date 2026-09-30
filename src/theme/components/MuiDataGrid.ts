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
        ...theme.typography.body2
      },
      '& .MuiDataGrid-virtualScrollerRenderZone': {
        '& .MuiDataGrid-row': {
          '&:nth-child(2n)': { backgroundColor: alpha(theme.palette.neutral.light, 0.07) }
        }
      },
      '& .MuiDataGrid-sortIcon': {
        fontSize: '18px',
        color: theme.palette.neutral.darkest
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
      borderColor: alpha(theme.palette.neutral.light, 0.4)
    }),
    columnHeader: {
      padding: '0 16px'
    },
    columnHeaderCheckbox: {
      padding: 0
    },
    cell: ({ theme }) => ({
      ...theme.typography.caption,
      lineHeight: 'calc(var(--height) - 1px)',
      padding: '0 16px',
      border: 'none'
    }),
    footerContainer: ({ theme }) => ({
      border: 'none',
      ...theme.typography.caption
    })
  }
};
