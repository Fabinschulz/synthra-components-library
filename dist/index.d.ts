import { AutocompleteProps as AutocompleteProps$1, TextFieldVariants, SxProps, Theme, ButtonProps, CheckboxProps as CheckboxProps$1, DividerProps as DividerProps$1, LinearProgressProps, MenuItemProps as MenuItemProps$1, SelectProps, SwitchProps as SwitchProps$1, TabProps, TextFieldProps, TypographyProps as TypographyProps$1, AlertProps, BreadcrumbsProps, SvgIconProps, Components } from '@mui/material';
import React$1, { FunctionComponent, ReactNode } from 'react';
import * as _mui_material_styles from '@mui/material/styles';
import { SxProps as SxProps$1, Theme as Theme$1, ThemeOptions } from '@mui/material/styles';
import { DataGridProps, GridColDef, GridRowIdGetter, GridRowSelectionModel, GridCallbackDetails, GridRowParams } from '@mui/x-data-grid';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';
import { Theme as Theme$2 } from '@emotion/react';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';
import { FieldErrors, useForm, FormState, FieldErrorsImpl, UseFormSetValue, UseFormWatch, FieldValues } from 'react-hook-form';

type AutocompleteBaseProps = {
    /**
     * Determina a Label do campo
     * @default ''
     * @type {string}
     */
    label?: string;
    /**
     * Indica se há um erro no campo.
     * @default false
     * @type boolean
     */
    error?: boolean;
    /**
     * Ativa o indicador de carregamento no campo.
     * @default false
     * @type boolean
     */
    loading?: boolean;
    /**
     * Define o tipo do ícone exibido no final do campo.
     * @type 'link' | 'submit' | undefined
     */
    endIconType?: 'link' | 'submit' | undefined;
    /**
     * Link associado ao ícone no final do campo (apenas se `endIconType` for 'link').
     * @type string | undefined
     */
    link?: string | undefined;
    /**
     * Função chamada quando o valor do campo é alterado (aplica-se a componentes "TextField").
     * @param event - Objeto de evento do React para a alteração no campo.
     * @type (event: React.ChangeEvent<HTMLInputElement>) => void
     */
    onChangeTextField?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Nome identificador único do campo.
     * @type string
     */
    name: string;
    /**
     * Indica se o campo é obrigatório.
     * @default false
     * @type boolean
     */
    required?: boolean;
} & AutocompleteProps$1<unknown, boolean | undefined, boolean | undefined, boolean | undefined, React.ElementType<any, keyof React.JSX.IntrinsicElements>>;

interface AutocompleteProps extends Omit<AutocompleteBaseProps, 'renderInput'> {
    variant?: TextFieldVariants;
    sxTextField?: SxProps<Theme>;
}
declare const Autocomplete: FunctionComponent<AutocompleteProps>;

interface AvatarProps {
    /**
     * Imagem do avatar
     * @default ''
     * @type {string}
     */
    imageSrc?: string;
    /**
     * Título do avatar
     * @default ''
     * @type {string}
     * @example 'John Doe'
     */
    title: string;
    /**
     * Subtítulo do avatar
     * @default ''
     * @type {string}
     * @example 'Software Engineer'
     */
    subtitle?: string;
    /**
     * Texto alternativo para a imagem do avatar
     * @default ''
     * @type {string}
     * @example 'John Doe'
     */
    altText?: string;
    /**
     * Mostrar um texto alternativo ao lado do avatar
     * @default false
     * @type {boolean}
     */
    showText?: boolean;
    /**
     * Estilos customizados
     * @type {SxProps<Theme
     * @default {}
     * @example { mt: 2 }
     * @see https://mui.com/system/the-sx-prop/
     */
    sx?: SxProps$1<Theme$1>;
}

declare const Avatar: React$1.FC<AvatarProps>;

interface IButtonProps extends ButtonProps {
}

declare const Button: FunctionComponent<IButtonProps>;

interface CheckboxProps extends CheckboxProps$1 {
    /**
     * Determina a Label do campo
     * @default ''
     * @type {string}
     */
    label?: string;
    /**
     * Edita o style do FormControlLabel
     * @default {}
     * @type {SxProps<Theme> | undefined}
     */
    formControlSX?: SxProps<Theme> | undefined;
}

declare const Checkbox: FunctionComponent<CheckboxProps>;

interface DividerProps extends DividerProps$1 {
}

declare const Divider: FunctionComponent<DividerProps>;

interface LoadingBarProps extends LinearProgressProps {
}

declare const LoadingBar: FunctionComponent<LoadingBarProps>;

interface MenuItemProps extends MenuItemProps$1 {
    /**
     * Determina o tamanho do menuItem
     * @default 'medium'
     * @type {'small' | 'medium'}
     * @example <MenuItem size="small" />
     */
    size?: 'small' | 'medium';
}

declare const MenuItem: React$1.ForwardRefExoticComponent<MenuItemProps & React$1.RefAttributes<HTMLLIElement>>;

type SelectFieldProps = SelectProps & {
    /**
     * Determina a Label do campo
     * @default ''
     * @type {string}
     * @example <Select label="Nome" />
     */
    label?: string;
    /**
     * Determina se o campo é obrigatorio
     * @default false
     * @type {boolean}
     * @example <Select required />
     */
    required?: boolean;
    /**
     * Define os itens disponíveis para o componente Select.
     * @default []
     * @type {Array<string>}
     * @example
     * // Exemplo de utilização:
     * <Select items={['Opção 1', 'Opção 2', 'Opção 3']} />
     *
     * @param {Array<string>} items - Uma matriz de strings representando os itens do select.
     */
    items?: string[];
};

declare const SelectField: FunctionComponent<SelectFieldProps>;

interface SwitchProps extends SwitchProps$1 {
}

declare const Switch: FunctionComponent<SwitchProps>;

interface TabItemProps extends TabProps {
    /**
     * Determina o Label da tab
     * @default ''
     * @type {string}
     * @example <TabItem label="Tab 1" />
     */
    label?: string;
    /**
     * Determina o componente a ser renderizado na tab
     */
    component?: React.ElementType;
    /**
     * Determina o link da tab
     * @default ''
     * @type {string}
     * @example <TabItem to="/tab1" />
     */
    to?: string;
}

declare const TabItem: FunctionComponent<TabItemProps>;

/**
 * Interface que estende as propriedades de `TextFieldProps`,
 *
 * @interface TextFieldProps
 * @extends {TextFieldProps}
 * @property {string} dataTestId - Atributo de teste automatizado.
 */
type ITextFieldProps = TextFieldProps & {
    /**
     * Atributo de teste automatizado.
     * @default ''
     * @type {string}
     * @example <TextField dataTestId="input" />
     */
    dataTestId?: string;
};

declare const TextField: FunctionComponent<ITextFieldProps>;

interface TypographyProps extends TypographyProps$1 {
}

declare const Typography: FunctionComponent<TypographyProps>;

interface IAlertProps extends Omit<AlertProps, 'severity'> {
    /**
     * Define o tipo de alerta
     * @default 'info'
     * @type {'info' | 'success' | 'warning' | 'error'}
     * @example <Alert type="info" />
     */
    type: AlertProps['severity'];
    /**
     * Define o título do alerta
     * @default ''
     * @type {string}
     * @example <Alert title="Alerta" />
     */
    title?: string;
    /**
     * Define a descrição do alerta
     * @default ''
     * @type {ReactNode | string}
     * @example <Alert description="Alerta de exemplo" />
     */
    description?: ReactNode | string;
    /**
     * Define o atributo de teste automatizado
     * @default ''
     * @type {string}
     * @example <Alert dataTestId="alert" />
     * @see IAlertProps
     */
    dataTestId?: string;
}

interface BreadcrumbProps extends BreadcrumbsProps {
    /**
     * Define o separador entre os links
     * @default '/'
     * @type {string}
     * @example <Breadcrumb separator=">" />
     * @see BreadcrumbProps
     */
    separator?: string;
    /**
     * Define os links do breadcrumb
     * @default []
     * @type {{ url: string, title: string }[]}
     * @example <Breadcrumb links={[{ url: '/home', title: 'Home' }]} />
     * @see BreadcrumbProps
     */
    links?: {
        url: string;
        title: string;
    }[];
}

declare const Breadcrumb: FunctionComponent<BreadcrumbProps>;

interface CardDataProps {
    /**
     * Determina a lista de items
     * @default []
     * @example [{id: '1', title: 'Total de vendas', value: 'R$ 1.000,00', uppercase: 'uppercase', color: 'success'}]
     * @type {Item[]}
     * @required
     * @see Item
     */
    listItem?: Item[];
}
interface Item {
    /**
     * Determina o id do item
     * @type {string}
     * @required
     */
    id: string;
    /**
     * Determina o titulo
     * @type {string | React.ReactNode}
     * @default ''
     * @example 'Total de vendas'
     */
    title?: string | React.ReactNode;
    /**
     * Determina o valor referente ao titulo
     * @type {string | React.ReactNode}
     * @default ''
     */
    value?: string | React.ReactNode;
    /**
     * Determina se o valor será maiusculo ou minusculo
     * @type {'initial' | 'uppercase'}
     * @default 'initial'
     * @example 'uppercase'
     */
    uppercase?: 'initial' | 'uppercase';
    /**
     * Determina a cor do TooltipIcon
     * @type {'success' | 'warning' | 'info' | 'error' | 'medium'}
     * @default 'medium'
     * @example 'success'
     */
    color?: 'success' | 'warning' | 'info' | 'error' | 'medium';
}

declare const CardData: FunctionComponent<CardDataProps>;

/**
 * Interface para o componente TabBar
 * @param tabs - tabs do componente
 * @param variant - variant do componente
 * @param scrollButtons - scrollButtons do componente
 * @param orientation - orientation do componente
 * @param children - children do componente
 * @example <TabBar tabs={[{ label: 'Tab 1', href: '/tab1' }, { label: 'Tab 2', href: '/tab2' }]} variant='standard' scrollButtons='auto' orientation='horizontal'>Children</TabBar>
 * @returns JSX.Element
 */
interface TabBarProps {
    /**
     * Determina os items de tabs
     * @default []
     * @example [{ label: 'Tab 1', href: '/tab1' }, { label: 'Tab 2', href: '/tab2' }]
     * @type TabsProps[]
     *  @required true
     */
    tabs: TabsProps[];
    /**
     * Determina as variações da barra
     * @default 'standard'
     * @example 'fullWidth'
     * @type 'fullWidth' | 'scrollable' | 'standard'
     * @see https://mui.com/pt/api/tabs/
     */
    variant?: 'fullWidth' | 'scrollable' | 'standard';
    /**
     * Determina se conterá scroll
     * @default 'auto'
     * @example 'auto'
     * @type 'auto' | false | true
     * @see https://mui.com/pt/api/tabs/
     */
    scrollButtons?: 'auto' | false | true;
    /**
     * Determina a orientação da barra
     * @default 'horizontal'
     * @example 'vertical'
     * @type 'horizontal' | 'vertical'
     * @see https://mui.com/pt/api/tabs/
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Determina os childrens da tab
     * @type ReactNode
     * @required true
     */
    children: ReactNode;
}
/**
 * Interface para o componente Tabs
 * @param label - label do componente
 * @param href - href do componente
 * @example <Tabs label='Tab 1' href='/tab1' />
 * @returns JSX.Element
 */
interface TabsProps {
    /**
     * Determina o label do item
     * @example 'Tab 1'
     * @type string
     * @required false
     * @default ''
     */
    label?: string;
    /**
     * Determina o href do item
     * @example '/tab1'
     * @type string
     * @required false
     * @default ''
     */
    href?: string;
}
/**
 * Interface para o componente TabPanel
 * @param children - children do componente
 * @param index - index do componente
 * @param value - value do componente
 * @example <TabPanel index={0} value={0}>Children</TabPanel>
 * @returns JSX.Element
 */
interface TabPanelProps {
    children?: ReactNode;
    index?: number;
    value?: number;
}

declare const TabBar: FunctionComponent<TabBarProps>;

interface ModalProps {
    /**
     * Determina o titulo do modal
     * @default ''
     * @example 'Modal title'
     * @type {string}
     */
    title?: string;
    /**
     * Determina a descrição
     * @default ''
     * @example 'Modal description'
     * @type {string}
     */
    description?: string;
    /**
     * Determina o icone
     * @default null
     * @example <Icon />
     * @type {ReactNode}
     * @see Icon
     */
    icon?: ReactNode;
    /**
     * Determina o tamanho do icone
     * @default 'medium'
     * @example 'small'
     * @type {'small' | 'large'}
     */
    size?: 'small' | 'large';
    /**
     * Determina o tamanho do modal
     * @default 'medium'
     * @example 'small'
     * @type {'small' | 'medium' | 'large'}
     * @see Modal
     */
    sizeModal?: 'small' | 'medium' | 'large';
    /**
     * Determina a direção do conteudo interno do modal
     * @default 'row'
     * @example 'column'
     * @type {'row' | 'column'}
     */
    direction?: 'row' | 'column';
    /**
     * Determina se o texto estará centralizado ou alinhado a esquerda
     * @default 'center'
     * @example 'left'
     * @type {'center' | 'left'}
     */
    align?: 'center' | 'left';
    /**
     * Determina o conteudo interno do modal
     * @default null
     * @example <div>Conteudo do modal</div>
     * @type {ReactNode}
     * @see Modal
     */
    children?: ReactNode;
    /**
     * Determina se o modal está aberto
     * @default false
     * @example true
     * @type {boolean}
     * @see Modal
     */
    open: boolean;
    /**
     * Determina a ação de feixar o modal
     * @default () => {}
     * @example () => console.log('Modal closed')
     * @type {() => void}
     * @see Modal
     */
    onClose?: () => void;
}

declare const Modal: FunctionComponent<ModalProps>;

/**
 * Data Table Props
 * @interface DataTableProps
 * @extends {DataGridProps}
 */
interface DataTableProps extends DataGridProps {
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
    onSelectionModelChange?: (selectionModel: GridRowSelectionModel, details: GridCallbackDetails) => void;
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
     * @example true
     */
    isLoading?: boolean;
}

declare const DataTable: FunctionComponent<DataTableProps>;

interface DrawerProps {
    /**
     * Determina o titulo do drawer
     */
    title?: string;
    /**
     * Determina a descrição do drawer
     */
    description?: string;
    /**
     * Determina os componentes que irão compor o drawer
     */
    children?: ReactNode;
    /**
     * Determina se o drawer esta aberto
     */
    open: boolean;
    /**
     * Onde o menu estará ancorado
     */
    onClose?: () => void;
    /**
     * Determina por qual lado o drawer será aberto
     */
    anchor: 'left' | 'right' | 'top' | 'bottom';
    /**
     * Controla a largura do segundo drawer.
     * Quando definido como true, o segundo drawer terá uma largura menor.
     * Quando definido como false, o segundo drawer terá a largura padrão.
     */
    toggleDrawer?: boolean;
}

declare const Drawer: FunctionComponent<DrawerProps>;

interface MenuProps {
    /**
     * Determina o titulo do avatar
     */
    avatarTitle?: string;
    /**
     * Determina o subtitulo do avatar
     */
    avatarSubtitle?: string;
    open?: boolean;
    /**
     * Items do menu
     */
    items?: MenuItems[];
    /**
     * Determina a logo do menu
     */
    logoIcon?: ReactNode;
    /**
     * Determina a largura do drawer
     */
    drawerWidthMain?: (width: number) => void;
    /**
     * Determina evento de logout
     */
    onClickLogout?: () => void;
    /**
     * Determina quanto tempo após um click fora da área do menu para que ele seja retraído automaticamente
     */
    closeDelay?: number;
    /**
     * Determina se as informações estão carregando
     */
    isLoading?: boolean;
    /**
     * Determina se o menu irá fechar de forma automática ao clicar fora
     */
    activateAutoOutsideMenu: boolean;
}
interface MenuItems {
    /**
     * Determina o titulo do item de menu
     */
    title?: string;
    /**
     * Link que será redirecionado
     */
    href: string;
    /**
     * Determina o icone que será exibido no menu
     */
    icon?: ReactNode;
    /**
     * Determina se o item esta ativo
     */
    active?: boolean;
    /**
     * Determina os items de submenu
     */
    submenu?: MenuAccordionItems[];
}
interface MenuAccordionItems {
    /**
     * Determina o titulo
     */
    title?: string;
    /**
     * Determina o redirect
     */
    href: string;
    /**
     * Determina se o item esta ativo
     */
    active?: boolean;
    /**
     * Determina os submenu dos menus
     */
    subSubmenu?: ISubmenuOptions[];
}
interface ISubmenuOptions {
    /**
     * Determina o titulo
     */
    title?: string;
    /**
     * Determina o redirect
     */
    href: string;
    active?: boolean;
}

declare const Menu: FunctionComponent<MenuProps>;

type RootLayoutProps = Readonly<{
    children: React$1.ReactNode;
}>;
declare const GlobalLayoutContainer: ({ children }: RootLayoutProps) => react_jsx_runtime.JSX.Element;

type TableComponentProps<T> = {
    rows: T[];
    columns: GridColDef[];
};
declare function TableComponent<T>({ rows, columns }: TableComponentProps<T>): react_jsx_runtime.JSX.Element;

declare const AddIcon: FunctionComponent<SvgIconProps>;

declare const UserAdd2Icon: FunctionComponent<SvgIconProps>;

declare const AddCircleIcon: FunctionComponent<SvgIconProps>;

declare const AppsIcon: FunctionComponent<SvgIconProps>;

declare const AppsRemoveIcon: FunctionComponent<SvgIconProps>;

declare const AppsAddIcon: FunctionComponent<SvgIconProps>;

declare const AddressIcon: FunctionComponent<SvgIconProps>;

declare const ArrowExchangeIcon: FunctionComponent<SvgIconProps>;

declare const ArrowBackIcon: FunctionComponent<SvgIconProps>;

declare const ArrowBackRectangleIcon: FunctionComponent<SvgIconProps>;

declare const ArrowDownCircleIcon: FunctionComponent<SvgIconProps>;

declare const ArrowDownIcon: FunctionComponent<SvgIconProps>;

declare const ArrowDownBoxIcon: FunctionComponent<SvgIconProps>;

declare const ArrowLeftCircleIcon: FunctionComponent<SvgIconProps>;

declare const ArrowLeftIcon: FunctionComponent<SvgIconProps>;

declare const ArrowLeftRectangleIcon: FunctionComponent<SvgIconProps>;

declare const ArrowMaximizeIcon: FunctionComponent<SvgIconProps>;

declare const ArrowMoveRectangleIcon: FunctionComponent<SvgIconProps>;

declare const ArrowReturnIcon: FunctionComponent<SvgIconProps>;

declare const ArrowReturnRectangleIcon: FunctionComponent<SvgIconProps>;

declare const ArrowRightCircleIcon: FunctionComponent<SvgIconProps>;

declare const ArrowRightIcon: FunctionComponent<SvgIconProps>;

declare const ArrowRightBoxIcon: FunctionComponent<SvgIconProps>;

declare const ArrowSortIcon: FunctionComponent<SvgIconProps>;

declare const ArrowSortRectangleIcon: FunctionComponent<SvgIconProps>;

declare const ArrowTransferIcon: FunctionComponent<SvgIconProps>;

declare const ArrowTransferRectangleIcon: FunctionComponent<SvgIconProps>;

declare const ArrowUpCircleIcon: FunctionComponent<SvgIconProps>;

declare const ArrowSortCircleIcon: FunctionComponent<SvgIconProps>;

declare const ArrowUpIcon: FunctionComponent<SvgIconProps>;

declare const AnnouncementIcon: FunctionComponent<SvgIconProps>;

declare const AlertIcon: FunctionComponent<SvgIconProps>;

declare const AlarmIcon: FunctionComponent<SvgIconProps>;

declare const AlarmAddIcon: FunctionComponent<SvgIconProps>;

declare const AlarmCheckIcon: FunctionComponent<SvgIconProps>;

declare const AlarmDeleteIcon: FunctionComponent<SvgIconProps>;

declare const AlarmMinusIcon: FunctionComponent<SvgIconProps>;

declare const ApprovalIcon: FunctionComponent<SvgIconProps>;

declare const ApproveIcon: FunctionComponent<SvgIconProps>;

declare const AscendingOrderIcon: FunctionComponent<SvgIconProps>;

declare const AvailableCashIcon: FunctionComponent<SvgIconProps>;

declare const ArchiveIcon: FunctionComponent<SvgIconProps>;

declare const AppCircleIcon: FunctionComponent<SvgIconProps>;

declare const BluetoothIcon: FunctionComponent<SvgIconProps>;

declare const BluetoothOffIcon: FunctionComponent<SvgIconProps>;

declare const BankIcon: FunctionComponent<SvgIconProps>;

declare const BankSlipIcon: FunctionComponent<SvgIconProps>;

declare const BankingIcon: FunctionComponent<SvgIconProps>;

declare const BookmarkIcon: FunctionComponent<SvgIconProps>;

declare const BoardIcon: FunctionComponent<SvgIconProps>;

declare const BarChartIcon: FunctionComponent<SvgIconProps>;

declare const BriefcaseIcon: FunctionComponent<SvgIconProps>;

declare const BriefcaseLineIcon: FunctionComponent<SvgIconProps>;

declare const BriefcaseWithDraftsIcon: FunctionComponent<SvgIconProps>;

declare const BellSchoolIcon: FunctionComponent<SvgIconProps>;

declare const BookAddIcon: FunctionComponent<SvgIconProps>;

declare const BookCheckIcon: FunctionComponent<SvgIconProps>;

declare const BookDownloadIcon: FunctionComponent<SvgIconProps>;

declare const BookFavouriteIcon: FunctionComponent<SvgIconProps>;

declare const BookHelpIcon: FunctionComponent<SvgIconProps>;

declare const BookIcon: FunctionComponent<SvgIconProps>;

declare const BookInfoIcon: FunctionComponent<SvgIconProps>;

declare const BookOpenIcon: FunctionComponent<SvgIconProps>;

declare const BookRejectIcon: FunctionComponent<SvgIconProps>;

declare const BookRemoveIcon: FunctionComponent<SvgIconProps>;

declare const BookSearchIcon: FunctionComponent<SvgIconProps>;

declare const BookUploadIcon: FunctionComponent<SvgIconProps>;

declare const BookWithTicketIcon: FunctionComponent<SvgIconProps>;

declare const BackPackIcon: FunctionComponent<SvgIconProps>;

declare const BroadCastIcon: FunctionComponent<SvgIconProps>;

declare const CalculatorDraftIcon: FunctionComponent<SvgIconProps>;

declare const CarteslanIcon: FunctionComponent<SvgIconProps>;

declare const ChattingIcon: FunctionComponent<SvgIconProps>;

declare const CompasIcon: FunctionComponent<SvgIconProps>;

declare const CalendarIcon: FunctionComponent<SvgIconProps>;

declare const CancelIcon: FunctionComponent<SvgIconProps>;

declare const CheckCardIcon: FunctionComponent<SvgIconProps>;

declare const DownIcon: FunctionComponent<SvgIconProps>;

declare const CloseIcon: FunctionComponent<SvgIconProps>;

declare const ChangePlanIcon: FunctionComponent<SvgIconProps>;

declare const ComplianceIcon: FunctionComponent<SvgIconProps>;

declare const CompleteIcon: FunctionComponent<SvgIconProps>;

declare const CopyIcon: FunctionComponent<SvgIconProps>;

declare const CheckRectangleIcon: FunctionComponent<SvgIconProps>;

declare const CheckCircleIcon: FunctionComponent<SvgIconProps>;

declare const ClearRectangleIcon: FunctionComponent<SvgIconProps>;

declare const ClearCircleIcon: FunctionComponent<SvgIconProps>;

declare const CameraOffIcon: FunctionComponent<SvgIconProps>;

declare const CameraIcon: FunctionComponent<SvgIconProps>;

declare const ChartArrowDownWithBarIcon: FunctionComponent<SvgIconProps>;

declare const ChartArrowUpBoxIcon: FunctionComponent<SvgIconProps>;

declare const ChartArrowUpWithBarIcon: FunctionComponent<SvgIconProps>;

declare const ChartBarIcon: FunctionComponent<SvgIconProps>;

declare const ChartNotificationIcon: FunctionComponent<SvgIconProps>;

declare const ChartPieIcon: FunctionComponent<SvgIconProps>;

declare const ChartPizzaIcon: FunctionComponent<SvgIconProps>;

declare const ChartWaveIcon: FunctionComponent<SvgIconProps>;

declare const CalendarAddIcon: FunctionComponent<SvgIconProps>;

declare const CalendarCheckIcon: FunctionComponent<SvgIconProps>;

declare const CalendarDeleteIcon: FunctionComponent<SvgIconProps>;

declare const CalendarMinusIcon: FunctionComponent<SvgIconProps>;

declare const ChartWaveRectangleIcon: FunctionComponent<SvgIconProps>;

declare const CallArrowDownIcon: FunctionComponent<SvgIconProps>;

declare const CallArrowUpIcon: FunctionComponent<SvgIconProps>;

declare const CallBlockIcon: FunctionComponent<SvgIconProps>;

declare const CallIcon: FunctionComponent<SvgIconProps>;

declare const CallInIcon: FunctionComponent<SvgIconProps>;

declare const CallLoveIcon: FunctionComponent<SvgIconProps>;

declare const CallOutIcon: FunctionComponent<SvgIconProps>;

declare const CallUserIcon: FunctionComponent<SvgIconProps>;

declare const CallVoiceMailIcon: FunctionComponent<SvgIconProps>;

declare const CallingIcon: FunctionComponent<SvgIconProps>;

declare const CharMenuIcon: FunctionComponent<SvgIconProps>;

declare const ChatAcceptIcon: FunctionComponent<SvgIconProps>;

declare const ChatArrowDownIcon: FunctionComponent<SvgIconProps>;

declare const ChatArrowUpIcon: FunctionComponent<SvgIconProps>;

declare const ChatBlockIcon: FunctionComponent<SvgIconProps>;

declare const ChatClockIcon: FunctionComponent<SvgIconProps>;

declare const ChatCloseIcon: FunctionComponent<SvgIconProps>;

declare const ChatFavouriteIcon: FunctionComponent<SvgIconProps>;

declare const ChatIcon: FunctionComponent<SvgIconProps>;

declare const ChatInformationIcon: FunctionComponent<SvgIconProps>;

declare const ChatLineIcon: FunctionComponent<SvgIconProps>;

declare const ChatLoveIcon: FunctionComponent<SvgIconProps>;

declare const ChatNegativeIcon: FunctionComponent<SvgIconProps>;

declare const ChatPlusIcon: FunctionComponent<SvgIconProps>;

declare const ChatSadIcon: FunctionComponent<SvgIconProps>;

declare const ChatSearchIcon: FunctionComponent<SvgIconProps>;

declare const ChatSilientIcon: FunctionComponent<SvgIconProps>;

declare const ChatUserIcon: FunctionComponent<SvgIconProps>;

declare const DisplayCenterIcon: FunctionComponent<SvgIconProps>;

declare const DisplayLeftIcon: FunctionComponent<SvgIconProps>;

declare const DisplayRightIcon: FunctionComponent<SvgIconProps>;

declare const DisplaycenterHorizontalIcon: FunctionComponent<SvgIconProps>;

declare const DashboardIcon: FunctionComponent<SvgIconProps>;

declare const DarkIcon: FunctionComponent<SvgIconProps>;

declare const DeleteIcon: FunctionComponent<SvgIconProps>;

declare const DigitalAccountIcon: FunctionComponent<SvgIconProps>;

declare const DiscountIcon: FunctionComponent<SvgIconProps>;

declare const DocExcelIcon: FunctionComponent<SvgIconProps>;

declare const DocPdfIcon: FunctionComponent<SvgIconProps>;

declare const DoneIcon: FunctionComponent<SvgIconProps>;

declare const DownloadIcon: FunctionComponent<SvgIconProps>;

declare const DraftIcon: FunctionComponent<SvgIconProps>;

declare const DirectionDownCircleIcon: FunctionComponent<SvgIconProps>;

declare const DirectionDownIcon: FunctionComponent<SvgIconProps>;

declare const DirectionLeftIcon: FunctionComponent<SvgIconProps>;

declare const DirectionRightIcon: FunctionComponent<SvgIconProps>;

declare const DirectionUpIcon: FunctionComponent<SvgIconProps>;

declare const DirectionDownRectangleIcon: FunctionComponent<SvgIconProps>;

declare const DirectionLeftCircleIcon: FunctionComponent<SvgIconProps>;

declare const DirectionRightCircleIcon: FunctionComponent<SvgIconProps>;

declare const DirectionRightRectangleIcon: FunctionComponent<SvgIconProps>;

declare const DirectionUpCircleIcon: FunctionComponent<SvgIconProps>;

declare const DirectionUpRectangleIcon: FunctionComponent<SvgIconProps>;

declare const DealIcon: FunctionComponent<SvgIconProps>;

declare const DiamondIcon: FunctionComponent<SvgIconProps>;

declare const DiplomaIcon: FunctionComponent<SvgIconProps>;

declare const DonateIcon: FunctionComponent<SvgIconProps>;

declare const DownArrowIcon: FunctionComponent<SvgIconProps>;

declare const DownBoldIcon: FunctionComponent<SvgIconProps>;

declare const ELearningIcon: FunctionComponent<SvgIconProps>;

declare const ExchangeRectangleIcon: FunctionComponent<SvgIconProps>;

declare const EditIcon: FunctionComponent<SvgIconProps>;

declare const EmailIcon: FunctionComponent<SvgIconProps>;

declare const EnergyIcon: FunctionComponent<SvgIconProps>;

declare const EyeShowIcon: FunctionComponent<SvgIconProps>;

declare const EyeIcon: FunctionComponent<SvgIconProps>;

declare const EyeDisableIcon: FunctionComponent<SvgIconProps>;

declare const ExpandIcon: FunctionComponent<SvgIconProps>;

declare const FilledTime: FunctionComponent<SvgIconProps>;

declare const FilterIcon: FunctionComponent<SvgIconProps>;

declare const FocusIcon: FunctionComponent<SvgIconProps>;

declare const FlagIcon: FunctionComponent<SvgIconProps>;

declare const FeatherIcon: FunctionComponent<SvgIconProps>;

declare const GlassesIcon: FunctionComponent<SvgIconProps>;

declare const GlobeIcon: FunctionComponent<SvgIconProps>;

declare const GraduationCapIcon: FunctionComponent<SvgIconProps>;

declare const GraphicWithBarIcon: FunctionComponent<SvgIconProps>;

declare const GraphicWithLineIcon: FunctionComponent<SvgIconProps>;

declare const GiftIcon: FunctionComponent<SvgIconProps>;

declare const GridDinamicIcon: FunctionComponent<SvgIconProps>;

declare const GridIcon: FunctionComponent<SvgIconProps>;

declare const HideIcon: FunctionComponent<SvgIconProps>;

declare const Home01Icon: FunctionComponent<SvgIconProps>;

declare const Home02Icon: FunctionComponent<SvgIconProps>;

declare const Home03Icon: FunctionComponent<SvgIconProps>;

declare const Home04Icon: FunctionComponent<SvgIconProps>;

declare const HourglassEndIcon: FunctionComponent<SvgIconProps>;

declare const HourglassIcon: FunctionComponent<SvgIconProps>;

declare const HourglassStartIcon: FunctionComponent<SvgIconProps>;

declare const HelpCircleIcon: FunctionComponent<SvgIconProps>;

declare const HelpIcon: FunctionComponent<SvgIconProps>;

declare const HelpRectangleIcon: FunctionComponent<SvgIconProps>;

declare const HomeWithGraphic: FunctionComponent<SvgIconProps>;

declare const IdCardIcon: FunctionComponent<SvgIconProps>;

declare const ImageCircleIcon: FunctionComponent<SvgIconProps>;

declare const InCircleIcon: FunctionComponent<SvgIconProps>;

declare const InteractiveIcon: FunctionComponent<SvgIconProps>;

declare const InfoIcon: FunctionComponent<SvgIconProps>;

declare const InvoiceReceivableIcon: FunctionComponent<SvgIconProps>;

declare const InformationRectangleIcon: FunctionComponent<SvgIconProps>;

declare const IntersectingArrowsIcon: FunctionComponent<SvgIconProps>;

declare const KeyIcon: FunctionComponent<SvgIconProps>;

declare const LeftIcon: FunctionComponent<SvgIconProps>;

declare const LegalPersonIcon: FunctionComponent<SvgIconProps>;

declare const LiquidateIcon: FunctionComponent<SvgIconProps>;

declare const LoadingIcon: FunctionComponent<SvgIconProps>;

declare const LogoutIcon: FunctionComponent<SvgIconProps>;

declare const LowGraphIcon: FunctionComponent<SvgIconProps>;

declare const Location01Icon: FunctionComponent<SvgIconProps>;

declare const Location02Icon: FunctionComponent<SvgIconProps>;

declare const Location03Icon: FunctionComponent<SvgIconProps>;

declare const LandscapeHorizontalIcon: FunctionComponent<SvgIconProps>;

declare const LandscapeIcon: FunctionComponent<SvgIconProps>;

declare const LandscapeVerticalIcon: FunctionComponent<SvgIconProps>;

declare const LayoutBottomLineIcon: FunctionComponent<SvgIconProps>;

declare const LayoutCenterIcon: FunctionComponent<SvgIconProps>;

declare const LayoutCenterLineIcon: FunctionComponent<SvgIconProps>;

declare const LayoutCenterVerticalLineIcon: FunctionComponent<SvgIconProps>;

declare const LayoutDividerIcon: FunctionComponent<SvgIconProps>;

declare const LayoutIcon: FunctionComponent<SvgIconProps>;

declare const LayoutLeftIcon: FunctionComponent<SvgIconProps>;

declare const LayoutLeftLineIcon: FunctionComponent<SvgIconProps>;

declare const LayoutRightLineIcon: FunctionComponent<SvgIconProps>;

declare const LayoutTopIcon: FunctionComponent<SvgIconProps>;

declare const LayoutTopLineIcon: FunctionComponent<SvgIconProps>;

declare const LoveIcon: FunctionComponent<SvgIconProps>;

declare const LifebuoyIcon: FunctionComponent<SvgIconProps>;

declare const LeftArrowIcon: FunctionComponent<SvgIconProps>;

declare const LeftBoldIcon: FunctionComponent<SvgIconProps>;

declare const LibraryIcon: FunctionComponent<SvgIconProps>;

declare const LikeInverse: FunctionComponent<SvgIconProps>;

declare const ListViewRectangleIcon: FunctionComponent<SvgIconProps>;

declare const LightIcon: FunctionComponent<SvgIconProps>;

declare const MaximizeArrowIcon: FunctionComponent<SvgIconProps>;

declare const MaximizeIcon: FunctionComponent<SvgIconProps>;

declare const MaximizeLeftIcon: FunctionComponent<SvgIconProps>;

declare const MinimizeIcon: FunctionComponent<SvgIconProps>;

declare const MinimizeLeftIcon: FunctionComponent<SvgIconProps>;

declare const MinusIcon: FunctionComponent<SvgIconProps>;

declare const MoneyIcomeIcon: FunctionComponent<SvgIconProps>;

declare const MoneyProfit: FunctionComponent<SvgIconProps>;

declare const MoreOptionsIcon: FunctionComponent<SvgIconProps>;

declare const MicIcon: FunctionComponent<SvgIconProps>;

declare const MicMuteIcon: FunctionComponent<SvgIconProps>;

declare const MenuLineHorizontalIcon: FunctionComponent<SvgIconProps>;

declare const MenuLineChangedIcon: FunctionComponent<SvgIconProps>;

declare const MenuLineCenterChangedIcon: FunctionComponent<SvgIconProps>;

declare const MenuUserIcon: FunctionComponent<SvgIconProps>;

declare const MenuHomeIcon: FunctionComponent<SvgIconProps>;

declare const MailArrowDownIcon: FunctionComponent<SvgIconProps>;

declare const MailArrowUpIcon: FunctionComponent<SvgIconProps>;

declare const MailBlockIcon: FunctionComponent<SvgIconProps>;

declare const MailBoxIcon: FunctionComponent<SvgIconProps>;

declare const MailCancelIcon: FunctionComponent<SvgIconProps>;

declare const MailDelayIcon: FunctionComponent<SvgIconProps>;

declare const MailFastIcon: FunctionComponent<SvgIconProps>;

declare const MailFavoriteIcon: FunctionComponent<SvgIconProps>;

declare const MailIcon: FunctionComponent<SvgIconProps>;

declare const MailLeftIcon: FunctionComponent<SvgIconProps>;

declare const MailNegativeIcon: FunctionComponent<SvgIconProps>;

declare const MailPlusIcon: FunctionComponent<SvgIconProps>;

declare const MailRightIcon: FunctionComponent<SvgIconProps>;

declare const MailSlientIcon: FunctionComponent<SvgIconProps>;

declare const MonitorIcon: FunctionComponent<SvgIconProps>;

declare const NotificationRectangleIcon: FunctionComponent<SvgIconProps>;

declare const NoNetworkIcon: FunctionComponent<SvgIconProps>;

declare const NaturalPersonIcon: FunctionComponent<SvgIconProps>;

declare const NewRuleIcon: FunctionComponent<SvgIconProps>;

declare const NotificationIcon: FunctionComponent<SvgIconProps>;

declare const NotificationSilentIcon: FunctionComponent<SvgIconProps>;

declare const NotificationRingingIcon: FunctionComponent<SvgIconProps>;

declare const Notification01Icon: FunctionComponent<SvgIconProps>;

declare const NibIcon: FunctionComponent<SvgIconProps>;

declare const NotebookSmartFoneIcon: FunctionComponent<SvgIconProps>;

declare const NextArrowIcon: FunctionComponent<SvgIconProps>;

declare const OutCircleIcon: FunctionComponent<SvgIconProps>;

declare const OverflowIcon: FunctionComponent<SvgIconProps>;

declare const PasswordIcon: FunctionComponent<SvgIconProps>;

declare const PaymentLinkIcon: FunctionComponent<SvgIconProps>;

declare const PercentageIcon: FunctionComponent<SvgIconProps>;

declare const PhoneIcon: FunctionComponent<SvgIconProps>;

declare const PixIcon: FunctionComponent<SvgIconProps>;

declare const PlayIcon: FunctionComponent<SvgIconProps>;

declare const PinIcon: FunctionComponent<SvgIconProps>;

declare const PixelGridCircleIcon: FunctionComponent<SvgIconProps>;

declare const PixelGridRectangleIcon: FunctionComponent<SvgIconProps>;

declare const PaintBucketIcon: FunctionComponent<SvgIconProps>;

declare const PenIcon: FunctionComponent<SvgIconProps>;

declare const PhysicsIcon: FunctionComponent<SvgIconProps>;

declare const PlusIcon: FunctionComponent<SvgIconProps>;

declare const PortraitIcon: FunctionComponent<SvgIconProps>;

declare const PresentationIcon: FunctionComponent<SvgIconProps>;

declare const PreviwsIcon: FunctionComponent<SvgIconProps>;

declare const ProtractorIcon: FunctionComponent<SvgIconProps>;

declare const QuizIcon: FunctionComponent<SvgIconProps>;

declare const RegistrationIcon: FunctionComponent<SvgIconProps>;

declare const ReceiveIcon: FunctionComponent<SvgIconProps>;

declare const ReceivablesIcon: FunctionComponent<SvgIconProps>;

declare const RejectIcon: FunctionComponent<SvgIconProps>;

declare const ReportIcon: FunctionComponent<SvgIconProps>;

declare const RightIcon: FunctionComponent<SvgIconProps>;

declare const RulerIcon: FunctionComponent<SvgIconProps>;

declare const RedoCircleIcon: FunctionComponent<SvgIconProps>;

declare const RedoRectangleIcon: FunctionComponent<SvgIconProps>;

declare const ReloadArrowIcon: FunctionComponent<SvgIconProps>;

declare const ReloadCircleIcon: FunctionComponent<SvgIconProps>;

declare const ReloadRectangleIcon: FunctionComponent<SvgIconProps>;

declare const Remove02Icon: FunctionComponent<SvgIconProps>;

declare const ReportBoxIcon: FunctionComponent<SvgIconProps>;

declare const RightBoldIcon: FunctionComponent<SvgIconProps>;

declare const ShieldAlertIcon: FunctionComponent<SvgIconProps>;

declare const ShieldErrorIcon: FunctionComponent<SvgIconProps>;

declare const ShieldBrokenIcon: FunctionComponent<SvgIconProps>;

declare const SignInIcon: FunctionComponent<SvgIconProps>;

declare const SignalIcon: FunctionComponent<SvgIconProps>;

declare const SmartphoneLearningIcon: FunctionComponent<SvgIconProps>;

declare const SquareRootIcon: FunctionComponent<SvgIconProps>;

declare const StickerIcon: FunctionComponent<SvgIconProps>;

declare const StudentIcon: FunctionComponent<SvgIconProps>;

declare const StudentsIcon: FunctionComponent<SvgIconProps>;

declare const SaveIcon: FunctionComponent<SvgIconProps>;

declare const SearchIcon: FunctionComponent<SvgIconProps>;

declare const ShareIcon: FunctionComponent<SvgIconProps>;

declare const ShowIcon: FunctionComponent<SvgIconProps>;

declare const SecureLockIcon: FunctionComponent<SvgIconProps>;

declare const CellphoneIcon: FunctionComponent<SvgIconProps>;

declare const SystemCalculationIcon: FunctionComponent<SvgIconProps>;

declare const SeverityErrorIcon: FunctionComponent<SvgIconProps>;

declare const SeverityWarningIcon: FunctionComponent<SvgIconProps>;

declare const SeverityInfoIcon: FunctionComponent<SvgIconProps>;

declare const SpeedTestIcon: FunctionComponent<SvgIconProps>;

declare const SignatureIcon: FunctionComponent<SvgIconProps>;

declare const SimulationIcon: FunctionComponent<SvgIconProps>;

declare const SettingIcon: FunctionComponent<SvgIconProps>;

declare const SmileRectangleIcon: FunctionComponent<SvgIconProps>;

declare const SadRectangleIcon: FunctionComponent<SvgIconProps>;

declare const SmileEllipseIcon: FunctionComponent<SvgIconProps>;

declare const StarBadgeIcon: FunctionComponent<SvgIconProps>;

declare const StarBadgeOffIcon: FunctionComponent<SvgIconProps>;

declare const ShieldIcon: FunctionComponent<SvgIconProps>;

declare const ShieldCheckIcon: FunctionComponent<SvgIconProps>;

declare const ShieldWarningIcon: FunctionComponent<SvgIconProps>;

declare const SadCircleIcon: FunctionComponent<SvgIconProps>;

declare const StarIcon: FunctionComponent<SvgIconProps>;

declare const SortArrowUpIcon: FunctionComponent<SvgIconProps>;

declare const SortRectangleIcon: FunctionComponent<SvgIconProps>;

declare const SortShowDownIcon: FunctionComponent<SvgIconProps>;

declare const SortShowUpIcon: FunctionComponent<SvgIconProps>;

declare const SearchPlusIcon: FunctionComponent<SvgIconProps>;

declare const SearchMinusIcon: FunctionComponent<SvgIconProps>;

declare const Search02Icon: FunctionComponent<SvgIconProps>;

declare const StopWathAddIcon: FunctionComponent<SvgIconProps>;

declare const StopWathCheckIcon: FunctionComponent<SvgIconProps>;

declare const StopWathDeleteIcon: FunctionComponent<SvgIconProps>;

declare const StopWathMinusIcon: FunctionComponent<SvgIconProps>;

declare const StopWathIcon: FunctionComponent<SvgIconProps>;

declare const TotalValueIcon: FunctionComponent<SvgIconProps>;

declare const TransferIcon: FunctionComponent<SvgIconProps>;

declare const TicketIcon: FunctionComponent<SvgIconProps>;

declare const TicketPercentIcon: FunctionComponent<SvgIconProps>;

declare const Time10Icon: FunctionComponent<SvgIconProps>;

declare const Time24Icon: FunctionComponent<SvgIconProps>;

declare const Time60Icon: FunctionComponent<SvgIconProps>;

declare const TimeAddIcon: FunctionComponent<SvgIconProps>;

declare const TimeCheckIcon: FunctionComponent<SvgIconProps>;

declare const TimeDeleteIcon: FunctionComponent<SvgIconProps>;

declare const TimeFastIcon: FunctionComponent<SvgIconProps>;

declare const TimeForwardIcon: FunctionComponent<SvgIconProps>;

declare const TimeHalfPastIcon: FunctionComponent<SvgIconProps>;

declare const TimeMinusIcon: FunctionComponent<SvgIconProps>;

declare const TimeOClockIcon: FunctionComponent<SvgIconProps>;

declare const TimeQuarterIcon: FunctionComponent<SvgIconProps>;

declare const TimeQuarterPasterIcon: FunctionComponent<SvgIconProps>;

declare const TargetIcon: FunctionComponent<SvgIconProps>;

declare const TaskDownloadIcon: FunctionComponent<SvgIconProps>;

declare const TeacherIcon: FunctionComponent<SvgIconProps>;

declare const TestTubeIcon: FunctionComponent<SvgIconProps>;

declare const UpDownBoldIcon: FunctionComponent<SvgIconProps>;

declare const UpDownIcon: FunctionComponent<SvgIconProps>;

declare const UpIcon: FunctionComponent<SvgIconProps>;

declare const UpdateIcon: FunctionComponent<SvgIconProps>;

declare const UploadIcon: FunctionComponent<SvgIconProps>;

declare const UpdateLimitsIcon: FunctionComponent<SvgIconProps>;

declare const UserRejectIcon: FunctionComponent<SvgIconProps>;

declare const UserRemoveIcon: FunctionComponent<SvgIconProps>;

declare const UserAddIcon: FunctionComponent<SvgIconProps>;

declare const UserGroupIcon: FunctionComponent<SvgIconProps>;

declare const UserConnectionsIcon: FunctionComponent<SvgIconProps>;

declare const UserBloackIcon: FunctionComponent<SvgIconProps>;

declare const ShieldProtectionIcon: FunctionComponent<SvgIconProps>;

declare const ProfileBadgeIcon: FunctionComponent<SvgIconProps>;

declare const UserNetworkIcon: FunctionComponent<SvgIconProps>;

declare const UserStatusEditIcon: FunctionComponent<SvgIconProps>;

declare const UserCircleMinusIcon: FunctionComponent<SvgIconProps>;

declare const UserDeleteIcon: FunctionComponent<SvgIconProps>;

declare const UserBlockIcon: FunctionComponent<SvgIconProps>;

declare const UsersCommunityIcon: FunctionComponent<SvgIconProps>;

declare const USBIcon: FunctionComponent<SvgIconProps>;

declare const VoiceMailIcon: FunctionComponent<SvgIconProps>;

declare const WifiIcon: FunctionComponent<SvgIconProps>;

declare const WaitingTimeIcon: FunctionComponent<SvgIconProps>;

declare const WalletIcon: FunctionComponent<SvgIconProps>;

declare const WiFiSignalIcon: FunctionComponent<SvgIconProps>;

declare const RegisterIcon: FunctionComponent<SvgIconProps>;

declare const RemoveRectangleIcon: FunctionComponent<SvgIconProps>;

declare const PowerRectangleIcon: FunctionComponent<SvgIconProps>;

declare const PowerCircleIcon: FunctionComponent<SvgIconProps>;

declare const ZoomInIcon: FunctionComponent<SvgIconProps>;

declare const ZoomOutIcon: FunctionComponent<SvgIconProps>;

declare const ZoomIcon: FunctionComponent<SvgIconProps>;

declare const ZoomTextIcon: FunctionComponent<SvgIconProps>;

declare const ZoomArrowRectangleIcon: FunctionComponent<SvgIconProps>;

type TextFormFieldProps = ITextFieldProps & {
    name: string;
};
declare const TextFormField: (props: TextFormFieldProps) => react_jsx_runtime.JSX.Element;

interface SelectOption {
    label: string;
    value: string | number | undefined | boolean | null;
}
type SelectFormFieldProps = SelectFieldProps & {
    name: string;
    /**
     * Determina os items do select
     */
    options?: SelectOption[];
    /**
     * Determina o Label do campo
     */
    label?: string;
    /**
     * Determina se o campo é obrigatorio
     */
    required?: boolean;
    /**
     * Habilita um botão de pesquisa no final do campo
     */
    showEndAdornment?: boolean;
    /**
     * Habilita um botão para limpar o valor do campo
     */
    showButtonClearValue?: boolean;
};
declare const SelectFormField: FunctionComponent<SelectFormFieldProps>;

interface CheckboxFormFieldProps extends CheckboxProps$1 {
    name: string;
    label: string;
}
declare const CheckboxFormField: FunctionComponent<CheckboxFormFieldProps>;

type AutocompleteFieldProps = {
    name: string;
} & AutocompleteBaseProps;
declare function AutocompleteField(props: AutocompleteFieldProps): react_jsx_runtime.JSX.Element;

declare const light: _mui_material_styles.Theme;

declare const dark: _mui_material_styles.Theme;

declare const MuiButton: Components['MuiButton'];

declare const MuiDivider: Components['MuiDivider'];

declare const MuiSwitch: Components['MuiSwitch'];

declare const MuiAlert: Components['MuiAlert'];

declare const MuiBreadcrumbs: Components['MuiBreadcrumbs'];

declare const MuiCssBaseline: {
    styleOverrides: () => {
        '@font-face': {
            fontFamily: string;
        };
        ':root': {
            fontSize: string;
            height: string;
        };
    };
};

declare const MuiDataGrid: DataGridComponents['MuiDataGrid'];

declare const componentsConfig_MuiAlert: typeof MuiAlert;
declare const componentsConfig_MuiBreadcrumbs: typeof MuiBreadcrumbs;
declare const componentsConfig_MuiButton: typeof MuiButton;
declare const componentsConfig_MuiCssBaseline: typeof MuiCssBaseline;
declare const componentsConfig_MuiDataGrid: typeof MuiDataGrid;
declare const componentsConfig_MuiDivider: typeof MuiDivider;
declare const componentsConfig_MuiSwitch: typeof MuiSwitch;
declare namespace componentsConfig {
  export { componentsConfig_MuiAlert as MuiAlert, componentsConfig_MuiBreadcrumbs as MuiBreadcrumbs, componentsConfig_MuiButton as MuiButton, componentsConfig_MuiCssBaseline as MuiCssBaseline, componentsConfig_MuiDataGrid as MuiDataGrid, componentsConfig_MuiDivider as MuiDivider, componentsConfig_MuiSwitch as MuiSwitch };
}

declare const components: typeof componentsConfig;

interface ThemeContextProps {
    theme?: Partial<Theme$2> | ((outerTheme: Theme$2) => Theme$2);
    children?: React.ReactNode;
}
declare const ThemeContext: ({ theme, children }: ThemeContextProps) => react_jsx_runtime.JSX.Element;

declare const fonts: {
    readonly default: "Roboto, sans-serif";
    readonly lato: "Lato, sans-serif";
    readonly code: "monospace";
};

declare const fontWeights: {
    readonly regular: "400";
    readonly medium: "500";
    readonly semibold: "600";
    readonly bold: "700";
    readonly extrabold: "800";
    readonly black: "900";
};

declare const fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
    '8xl': string;
    '9xl': string;
    letterSpacing: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        subtitle1: string;
        subtitle2: string;
        body1: string;
        body2: string;
        caption: string;
    };
};

declare const lineHeights: {
    readonly 'leading-none': "1";
    readonly 'leading-tight': "1.25";
    readonly 'leading-snug': "1.375";
    readonly 'leading-normal': "1.5";
    readonly 'leading-relaxed': "1.625";
    readonly 'leading-loose': "2";
    readonly 'leading-3': "0.75rem";
    readonly 'leading-4': "1rem";
    readonly 'leading-5': "1.25rem";
    readonly 'leading-6': "1.5rem";
    readonly 'leading-7': "1.75rem";
    readonly 'leading-8': "2rem";
    readonly 'leading-9': "2.25rem";
    readonly 'leading-10': "2.5rem";
};

declare const opacity: {
    readonly 'opacity-0': "0";
    readonly 'opacity-5': "0.05";
    readonly 'opacity-10': "0.1";
    readonly 'opacity-15': "0.15";
    readonly 'opacity-20': "0.2";
    readonly 'opacity-25': "0.25";
    readonly 'opacity-30': "0.3";
    readonly 'opacity-35': "0.35";
    readonly 'opacity-40': "0.4";
    readonly 'opacity-45': "0.45";
    readonly 'opacity-50': "0.5";
    readonly 'opacity-55': "0.55";
    readonly 'opacity-60': "0.6";
    readonly 'opacity-65': "0.65";
    readonly 'opacity-70': "0.7";
    readonly 'opacity-75': "0.75";
    readonly 'opacity-80': "0.8";
    readonly 'opacity-85': "0.85";
    readonly 'opacity-90': "0.9";
    readonly 'opacity-95': "0.95";
    readonly 'opacity-100': "1";
};

declare const borderRadius: {
    readonly px: "1px";
    readonly xs: "4px";
    readonly sm: "6px";
    readonly md: "8px";
    readonly lg: "12px";
    readonly xl: "16px";
    readonly xxl: "24px";
    readonly xxxl: "32px";
    readonly '4xl': "48px";
    readonly '5xl': "64px";
    readonly '6xl': "96px";
    readonly full: "9999px";
};

declare const spacing: {
    readonly 1: "0.25rem";
    readonly 2: "0.5rem";
    readonly 3: "0.75rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 7: "1.75rem";
    readonly 8: "2rem";
    readonly 10: "2.5rem";
    readonly 12: "3rem";
    readonly 16: "4rem";
    readonly 20: "5rem";
    readonly 24: "6rem";
    readonly 32: "8rem";
    readonly 40: "10rem";
    readonly 48: "12rem";
    readonly 56: "14rem";
    readonly 64: "16rem";
    readonly 72: "18rem";
    readonly 80: "20rem";
    readonly 96: "24rem";
};

declare const letterSpacing: {
    readonly tighter: "-0.05px";
    readonly tight: "-0.025px";
    readonly base: "0";
    readonly wide: "0.025px";
    readonly wider: "0.05px";
    readonly widest: "0.1px";
};

declare module '@mui/material/styles' {
    interface TypographyVariants {
        xg?: TypographyStyleOptions;
        xxxl?: TypographyStyleOptions;
        xxl?: TypographyStyleOptions;
    }
    interface TypographyVariantsOptions {
        xg?: TypographyStyleOptions;
        xxxl?: TypographyStyleOptions;
        xxl?: TypographyStyleOptions;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        xg?: true;
        xxxl?: true;
        xxl?: true;
    }
}
declare const typography: ThemeOptions['typography'];

type FormMode = 'create' | 'update';
type FormContextProps = {
    onSubmit: (values: any) => void;
    onError: (values: FieldErrors) => void;
    setValue: ReturnType<typeof useForm>['setValue'];
    reset: ReturnType<typeof useForm>['reset'];
    getValues: ReturnType<typeof useForm>['getValues'];
    formState?: FormState<any>;
    validationErrors: Partial<FieldErrorsImpl<any>> | undefined;
    control?: ReturnType<typeof useForm>['control'];
    watch: ReturnType<typeof useForm>['watch'];
    submitting: boolean;
    isDirty: boolean;
    isValid: boolean;
    dirtyFields: any;
    readOnly?: boolean;
    trigger: ReturnType<typeof useForm>['trigger'];
    register: ReturnType<typeof useForm>['register'];
};
interface FormProviderProps {
    children: JSX.Element;
    validationSchema: any;
    defaultValues: any;
    onSubmit: (values: any) => void;
    onError?: any;
    onChangeField?: ChangeFieldDelegate[];
    readOnly?: boolean;
}
interface ChangeFieldDelegate {
    fieldName: string;
    delegate: (fieldValue: any, setValue: UseFormSetValue<any>, watch?: UseFormWatch<FieldValues>) => void;
}
declare const FormProvider: ({ children, validationSchema, defaultValues, onSubmit, onError, readOnly, onChangeField }: FormProviderProps) => react_jsx_runtime.JSX.Element;
declare function useFormContext(): FormContextProps;

export { AddCircleIcon, AddIcon, AddressIcon, AlarmAddIcon, AlarmCheckIcon, AlarmDeleteIcon, AlarmIcon, AlarmMinusIcon, AlertIcon, AnnouncementIcon, AppCircleIcon, ApprovalIcon, ApproveIcon, AppsAddIcon, AppsIcon, AppsRemoveIcon, ArchiveIcon, ArrowBackIcon, ArrowBackRectangleIcon, ArrowDownBoxIcon, ArrowDownCircleIcon, ArrowDownIcon, ArrowExchangeIcon, ArrowLeftCircleIcon, ArrowLeftIcon, ArrowLeftRectangleIcon, ArrowMaximizeIcon, ArrowMoveRectangleIcon, ArrowReturnIcon, ArrowReturnRectangleIcon, ArrowRightBoxIcon, ArrowRightCircleIcon, ArrowRightIcon, ArrowSortCircleIcon, ArrowSortIcon, ArrowSortRectangleIcon, ArrowTransferIcon, ArrowTransferRectangleIcon, ArrowUpCircleIcon, ArrowUpIcon, AscendingOrderIcon, Autocomplete, type AutocompleteBaseProps, AutocompleteField, AvailableCashIcon, Avatar, type AvatarProps, BackPackIcon, BankIcon, BankSlipIcon, BankingIcon, BarChartIcon, BellSchoolIcon, BluetoothIcon, BluetoothOffIcon, BoardIcon, BookAddIcon, BookCheckIcon, BookDownloadIcon, BookFavouriteIcon, BookHelpIcon, BookIcon, BookInfoIcon, BookOpenIcon, BookRejectIcon, BookRemoveIcon, BookSearchIcon, BookUploadIcon, BookWithTicketIcon, BookmarkIcon, Breadcrumb, type BreadcrumbProps, BriefcaseIcon, BriefcaseLineIcon, BriefcaseWithDraftsIcon, BroadCastIcon, Button, CalculatorDraftIcon, CalendarAddIcon, CalendarCheckIcon, CalendarDeleteIcon, CalendarIcon, CalendarMinusIcon, CallArrowDownIcon, CallArrowUpIcon, CallBlockIcon, CallIcon, CallInIcon, CallLoveIcon, CallOutIcon, CallUserIcon, CallVoiceMailIcon, CallingIcon, CameraIcon, CameraOffIcon, CancelIcon, CardData, type CardDataProps, CarteslanIcon, CellphoneIcon, ChangePlanIcon, CharMenuIcon, ChartArrowDownWithBarIcon, ChartArrowUpBoxIcon, ChartArrowUpWithBarIcon, ChartBarIcon, ChartNotificationIcon, ChartPieIcon, ChartPizzaIcon, ChartWaveIcon, ChartWaveRectangleIcon, ChatAcceptIcon, ChatArrowDownIcon, ChatArrowUpIcon, ChatBlockIcon, ChatClockIcon, ChatCloseIcon, ChatFavouriteIcon, ChatIcon, ChatInformationIcon, ChatLineIcon, ChatLoveIcon, ChatNegativeIcon, ChatPlusIcon, ChatSadIcon, ChatSearchIcon, ChatSilientIcon, ChatUserIcon, ChattingIcon, CheckCardIcon, CheckCircleIcon, CheckRectangleIcon, Checkbox, CheckboxFormField, type CheckboxProps, ClearCircleIcon, ClearRectangleIcon, CloseIcon, CompasIcon, CompleteIcon, ComplianceIcon, CopyIcon, DarkIcon, DashboardIcon, DataTable, type DataTableProps, DealIcon, DeleteIcon, DiamondIcon, DigitalAccountIcon, DiplomaIcon, DirectionDownCircleIcon, DirectionDownIcon, DirectionDownRectangleIcon, DirectionLeftCircleIcon, DirectionLeftIcon, DirectionRightCircleIcon, DirectionRightIcon, DirectionRightRectangleIcon, DirectionUpCircleIcon, DirectionUpIcon, DirectionUpRectangleIcon, DiscountIcon, DisplayCenterIcon, DisplayLeftIcon, DisplayRightIcon, DisplaycenterHorizontalIcon, Divider, type DividerProps, DocExcelIcon, DocPdfIcon, DonateIcon, DoneIcon, DownArrowIcon, DownBoldIcon, DownIcon, DownloadIcon, DraftIcon, Drawer, type DrawerProps, ELearningIcon, EditIcon, EmailIcon, EnergyIcon, ExchangeRectangleIcon, ExpandIcon, EyeDisableIcon, EyeIcon, EyeShowIcon, FeatherIcon, FilledTime, FilterIcon, FlagIcon, FocusIcon, type FormMode, FormProvider, GiftIcon, GlassesIcon, GlobalLayoutContainer, GlobeIcon, GraduationCapIcon, GraphicWithBarIcon, GraphicWithLineIcon, GridDinamicIcon, GridIcon, HelpCircleIcon, HelpIcon, HelpRectangleIcon, HideIcon, Home01Icon, Home02Icon, Home03Icon, Home04Icon, HomeWithGraphic, HourglassEndIcon, HourglassIcon, HourglassStartIcon, type IAlertProps, type IButtonProps, type ISubmenuOptions, type ITextFieldProps, IdCardIcon, ImageCircleIcon, InCircleIcon, InfoIcon, InformationRectangleIcon, InteractiveIcon, IntersectingArrowsIcon, InvoiceReceivableIcon, type Item, KeyIcon, LandscapeHorizontalIcon, LandscapeIcon, LandscapeVerticalIcon, LayoutBottomLineIcon, LayoutCenterIcon, LayoutCenterLineIcon, LayoutCenterVerticalLineIcon, LayoutDividerIcon, LayoutIcon, LayoutLeftIcon, LayoutLeftLineIcon, LayoutRightLineIcon, LayoutTopIcon, LayoutTopLineIcon, LeftArrowIcon, LeftBoldIcon, LeftIcon, LegalPersonIcon, LibraryIcon, LifebuoyIcon, LightIcon, LikeInverse, LiquidateIcon, ListViewRectangleIcon, LoadingBar, type LoadingBarProps, LoadingIcon, Location01Icon, Location02Icon, Location03Icon, LogoutIcon, LoveIcon, LowGraphIcon, MailArrowDownIcon, MailArrowUpIcon, MailBlockIcon, MailBoxIcon, MailCancelIcon, MailDelayIcon, MailFastIcon, MailFavoriteIcon, MailIcon, MailLeftIcon, MailNegativeIcon, MailPlusIcon, MailRightIcon, MailSlientIcon, MaximizeArrowIcon, MaximizeIcon, MaximizeLeftIcon, Menu, type MenuAccordionItems, MenuHomeIcon, MenuItem, type MenuItemProps, type MenuItems, MenuLineCenterChangedIcon, MenuLineChangedIcon, MenuLineHorizontalIcon, type MenuProps, MenuUserIcon, MicIcon, MicMuteIcon, MinimizeIcon, MinimizeLeftIcon, MinusIcon, Modal, type ModalProps, MoneyIcomeIcon, MoneyProfit, MonitorIcon, MoreOptionsIcon, NaturalPersonIcon, NewRuleIcon, NextArrowIcon, NibIcon, NoNetworkIcon, NotebookSmartFoneIcon, Notification01Icon, NotificationIcon, NotificationRectangleIcon, NotificationRingingIcon, NotificationSilentIcon, OutCircleIcon, OverflowIcon, PaintBucketIcon, PasswordIcon, PaymentLinkIcon, PenIcon, PercentageIcon, PhoneIcon, PhysicsIcon, PinIcon, PixIcon, PixelGridCircleIcon, PixelGridRectangleIcon, PlayIcon, PlusIcon, PortraitIcon, PowerCircleIcon, PowerRectangleIcon, PresentationIcon, PreviwsIcon, ProfileBadgeIcon, ProtractorIcon, QuizIcon, ReceivablesIcon, ReceiveIcon, RedoCircleIcon, RedoRectangleIcon, RegisterIcon, RegistrationIcon, RejectIcon, ReloadArrowIcon, ReloadCircleIcon, ReloadRectangleIcon, Remove02Icon, RemoveRectangleIcon, ReportBoxIcon, ReportIcon, RightBoldIcon, RightIcon, RulerIcon, SadCircleIcon, SadRectangleIcon, SaveIcon, Search02Icon, SearchIcon, SearchMinusIcon, SearchPlusIcon, SecureLockIcon, SelectField, type SelectFieldProps, SelectFormField, SettingIcon, SeverityErrorIcon, SeverityInfoIcon, SeverityWarningIcon, ShareIcon, ShieldAlertIcon, ShieldBrokenIcon, ShieldCheckIcon, ShieldErrorIcon, ShieldIcon, ShieldProtectionIcon, ShieldWarningIcon, ShowIcon, SignInIcon, SignalIcon, SignatureIcon, SimulationIcon, SmartphoneLearningIcon, SmileEllipseIcon, SmileRectangleIcon, SortArrowUpIcon, SortRectangleIcon, SortShowDownIcon, SortShowUpIcon, SpeedTestIcon, SquareRootIcon, StarBadgeIcon, StarBadgeOffIcon, StarIcon, StickerIcon, StopWathAddIcon, StopWathCheckIcon, StopWathDeleteIcon, StopWathIcon, StopWathMinusIcon, StudentIcon, StudentsIcon, Switch, type SwitchProps, SystemCalculationIcon, TabBar, type TabBarProps, TabItem, type TabItemProps, type TabPanelProps, TableComponent, type TabsProps, TargetIcon, TaskDownloadIcon, TeacherIcon, TestTubeIcon, TextField, TextFormField, ThemeContext, type ThemeContextProps, TicketIcon, TicketPercentIcon, Time10Icon, Time24Icon, Time60Icon, TimeAddIcon, TimeCheckIcon, TimeDeleteIcon, TimeFastIcon, TimeForwardIcon, TimeHalfPastIcon, TimeMinusIcon, TimeOClockIcon, TimeQuarterIcon, TimeQuarterPasterIcon, TotalValueIcon, TransferIcon, Typography, type TypographyProps, USBIcon, UpDownBoldIcon, UpDownIcon, UpIcon, UpdateIcon, UpdateLimitsIcon, UploadIcon, UserAdd2Icon, UserAddIcon, UserBloackIcon, UserBlockIcon, UserCircleMinusIcon, UserConnectionsIcon, UserDeleteIcon, UserGroupIcon, UserNetworkIcon, UserRejectIcon, UserRemoveIcon, UserStatusEditIcon, UsersCommunityIcon, VoiceMailIcon, WaitingTimeIcon, WalletIcon, WiFiSignalIcon, WifiIcon, ZoomArrowRectangleIcon, ZoomIcon, ZoomInIcon, ZoomOutIcon, ZoomTextIcon, borderRadius, components, dark, fontSizes, fontWeights, fonts, letterSpacing, light, lineHeights, opacity, spacing, typography, useFormContext };
