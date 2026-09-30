import type {
  DataGridProps,
  GridCallbackDetails,
  GridColDef,
  GridRowIdGetter,
  GridRowParams,
  GridRowSelectionModel,
  GridValidRowModel
} from '@mui/x-data-grid';

/**
 * Propriedades do DataTable: as do `DataGrid` do MUI X, com paginação controlada simplificada.
 * `R` é o tipo de cada linha e é inferido a partir de `rows`.
 */
export interface DataTableProps<R extends GridValidRowModel = any> extends Omit<
  DataGridProps<R>,
  'rows' | 'columns' | 'rowCount'
> {
  /** Dados da tabela. */
  rows: R[];

  /** Colunas da tabela. */
  columns: GridColDef<R>[];

  /** Página atual (começa em 0). */
  page: number;

  /** Total de linhas (necessário com `paginationMode="server"`). */
  rowCount: number;

  /** Linhas por página. */
  rowsPerPage: number;

  /** Chamado quando a página muda. */
  setPage: (page: number) => void;

  /** Chamado quando a quantidade de linhas por página muda. */
  setRowsPerPage: (rowsPerPage: number) => void;

  /**
   * Tipo de paginação da tabela
   * @default 'client'
   */
  paginationMode?: 'server' | 'client';

  /**
   * Obtém o ID de cada linha. Por padrão usa `row.id`; linhas sem `id` recebem um ID estável
   * gerado a partir do próprio objeto.
   */
  getRowId?: GridRowIdGetter<R>;

  /** Chamado quando a seleção muda. Ativa a seleção de linhas. */
  onSelectionModelChange?: (
    selectionModel: GridRowSelectionModel,
    details: GridCallbackDetails
  ) => void;

  /** Modelo de seleção (controlado). */
  rowSelectionModel?: GridRowSelectionModel;

  /**
   * Mantém as linhas selecionadas mesmo que não existam na página atual
   * @default false
   */
  keepNonExistentRowsSelected?: boolean;

  /** Define quais linhas podem ser selecionadas. Por padrão, todas. */
  isRowSelectable?: (params: GridRowParams<R>) => boolean;

  /**
   * Exibe a coluna de checkbox e ativa a seleção
   * @default false
   */
  checkboxSelection?: boolean;

  /**
   * Oculta a contagem de linhas selecionadas no rodapé
   * @default false
   */
  hideFooterSelectedRowCount?: boolean;

  /**
   * Mensagem exibida quando não há linhas
   * @default 'Nenhum resultado encontrado'
   */
  NoRowsOverlayNew?: string;

  /**
   * Mensagem exibida quando o filtro não retorna resultados
   * @default 'Nenhum resultado encontrado'
   */
  NoResultsOverlayNew?: string;

  /**
   * Texto do seletor de linhas por página. Por padrão vem do locale do tema
   * (pt-BR: 'Linhas por página:').
   */
  labelRowsPerPage?: string;

  /**
   * Exibe um skeleton no lugar da tabela (carregamento inicial).
   * Para recarregamentos com a tabela visível, use `loading`.
   * @default false
   */
  skeleton?: boolean;

  /**
   * Exibe os botões de ir para a primeira e a última página
   * @default false
   */
  enableJumpToPage?: boolean;
}
