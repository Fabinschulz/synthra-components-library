import type { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';
import { Palette } from '@mui/material/styles';
import { Typography } from '@mui/material/styles/createTypography';
import { palette as paletteOptions } from '../palette/light';
import { typography as typographyOptions } from '../typography';

const typography = typographyOptions! as Typography;
const palette = paletteOptions! as Palette;

export const MuiDataGrid: DataGridComponents['MuiDataGrid'] = {
  defaultProps: {
    initialState: {
      pagination: {
        paginationModel: {
          pageSize: 10
        }
      }
    },
    pageSizeOptions: [10, 50, 100, 200]
    // slotProps: {
    //   columnHeaders: {
    //     style: {
    //       borderColor: 'rgba(181, 185, 201, 0.40)',
    //       marginBottom: '24px'
    //     }
    //   },
    //   cell: {
    //     style: {
    //       ...typography.xs,
    //       lineHeight: '14px',
    //       padding: '0px 24px',
    //       border: 'none',
    //       '&:focus, &:focus-within': {
    //         outline: 'none'
    //       }
    //     }
    //   }
    // }
  },
  styleOverrides: {
    root: {
      borderRadius: 0,
      border: 'none',
      '& .MuiDataGrid-columnHeaders': {
        color: palette.neutral.darkest,
        ...typography.body2,
        lineHeight: '19px',
        minHeight: 'auto!important'
      },
      '& .MuiDataGrid-virtualScrollerRenderZone': {
        marginTop: '24px',
        '& .MuiDataGrid-row': {
          '&:nth-child(2n)': { backgroundColor: 'rgba(186, 191, 208, 0.07)' }
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
        color: palette.neutral.darkest
      },
      '& .MuiDataGrid-columnHeaderTitleContainer': {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        marginLeft: '-10px'
      }
    },
    row: {
      '&.Mui-disabled': {
        backgroundColor: '#F6F7F8',
        cursor: 'not-allowed'
      },

      '&.Mui-pointer': {
        cursor: 'pointer'
      }
    },
    columnSeparator: {
      display: 'none'
    },
    columnHeaders: {
      borderColor: 'rgba(181, 185, 201, 0.40)',
      marginBottom: '24px'
    },
    columnHeader: {
      padding: '0px 24px',

      '&:focus, &:focus-within': {
        outline: 'none'
      }
    },
    columnHeaderCheckbox: {
      padding: 0
    },
    cell: {
      ...typography.caption,
      lineHeight: '14px',
      padding: '0px 24px',
      border: 'none',

      '&:focus, &:focus-within': {
        outline: 'none'
      }
    },
    footerContainer: {
      border: 'none',
      ...typography.caption
    }
  }
};
