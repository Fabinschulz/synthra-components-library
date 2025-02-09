import {
  DataGridProps,
  GridCallbackDetails,
  GridColDef,
  GridRowIdGetter,
  GridRowParams,
  GridRowSelectionModel
} from '@mui/x-data-grid';

/**
 * Data Table Props
 * @interface DataTableProps
 * @extends {DataGridProps}
 */

export interface DataTableProps extends DataGridProps {
  /**
   * @type {any[]}
   * @memberof DataTableProps
   * @description Dados da tabela
   * @required
   * @example rowsMock
   */
  rows: any[];
  /**
   * @type {number}
   * @memberof DataTableProps
   * @description Página atual da tabela
   * @required
   * @example 0
   */
  page: number;

  /**
   * @type {number}
   * @memberof DataTableProps
   * @description Total de linhas da tabela
   * @required
   * @example 0
   */
  rowCount: number;

  /**
   * @type {number}
   * @memberof DataTableProps
   * @description Linhas por página
   * @required
   * @example 0
   */
  rowsPerPage: number;

  /**
   * @type {(page: number) => void}
   * @memberof DataTableProps
   * @description Função para alterar a página
   * @required
   * @example () => {}
   */
  setPage: (page: number) => void;

  /**
   * @type {(page: number) => void}
   * @memberof DataTableProps
   * @description Função para alterar as linhas por página
   * @required
   * @example () => {}
   */
  setRowsPerPage: (page: number) => void;

  /**
   * @type {GridColDef[]}
   * @memberof DataTableProps
   * @description Colunas da tabela
   * @required
   * @example columnsMock
   */
  columns: GridColDef[];

  /**
   * @type {boolean}
   * @memberof DataTableProps
   * @description  Tipo de paginação da tabela
   * @default false
   */
  paginationMode?: 'server' | 'client';

  /**
   * @type {boolean}
   * @memberof DataTableProps
   * @description  Função para obter o ID da linha
   * @default false
   */
  getRowId?: GridRowIdGetter<any> | undefined;

  /**
   * @type {(selectionModel: GridRowSelectionModel, details: GridCallbackDetails) => void}
   * @memberof DataTableProps
   * @description  Função para alterar a seleção da linha
   * @default false
   */
  onSelectionModelChange?: (
    selectionModel: GridRowSelectionModel,
    details: GridCallbackDetails
  ) => void;

  /**
   * @type {GridRowSelectionModel}
   * @memberof DataTableProps
   * @description  Modelo de seleção da linha
   * @default false
   */
  rowSelectionModel?: GridRowSelectionModel;

  /**
   * @type {boolean}
   * @memberof DataTableProps
   * @description  Mantém as linhas selecionadas mesmo que não existam
   * @default false
   */
  keepNonExistentRowsSelected?: boolean;

  /**
   * @type {(params: GridRowParams<any>) => boolean}
   * @memberof DataTableProps
   * @description  Função para verificar se a linha é selecionável
   * @default false
   */
  isRowSelectable?: (params: GridRowParams<any>) => boolean;

  /**
   * @type {boolean}
   * @memberof DataTableProps
   * @description  Exibe a seleção de checkbox
   * @default false
   */
  checkboxSelection?: boolean;

  /**
   * @type {boolean}
   * @memberof DataTableProps
   * @description  Oculta a contagem de linhas selecionadas no rodapé
   * @default false
   */
  hideFooterSelectedRowCount?: boolean;

  NoRowsOverlayNew?: string;

  /**
   * @type {boolean}
   * @memberof DataTableProps
   * @description  Exibe uma mensagem de erro quando não há resultados na tabela
   * @default
   * @example 'Nenhum resultado encontrado'
   */
  NoResultsOverlayNew?: string;

  /**
   * @type {boolean}
   * @memberof DataTableProps
   * @description  Exibe um loader na tabela
   * @default false
   */
  isLoading?: boolean;

  /**
   * @type {boolean}
   * @memberof DataTableProps
   * @description  Ativa a funcionalidade de pular para o início ou fim da tabela
   * @default false
   */
  enableJumpToPage?: boolean;
}
