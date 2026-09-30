# @synthra.io/ui-kit

## 0.5.1

### Patch Changes

- 3b5dbd7: fix(DataTable): cabeçalho proporcional e conteúdo centralizado

  - Texto das células centralizado verticalmente (o tema sobrescrevia o `line-height` do DataGrid e deixava o texto no topo da linha).
  - Cabeçalho com 48px, padding de 16px e ícone de ordenação visível apenas ao passar o mouse ou quando a coluna está ordenada; títulos não quebram mais (ex.: "Idade").
  - Cabeçalhos e células centralizados por padrão; cada coluna pode definir `align`/`headerAlign`.
  - Altura da tabela ajustada ao conteúdo (`autoHeight`), sem espaço vazio abaixo das linhas.
  - Divisórias entre colunas com a cor da paleta também no tema escuro.

## 0.5.0

### Minor Changes

- 69c2ed5: refactor: fundação do tema, empacotamento, acessibilidade e API dos componentes (roadmap da auditoria)

  **Breaking changes**

  - **Peer dependencies**: `react`, `react-dom`, `@mui/material`, `@mui/x-data-grid`, `@emotion/react`, `@emotion/styled` e `react-hook-form` agora são peers e precisam estar instalados no projeto. `next` deixou de ser dependência (é um peer opcional, usado apenas por `@synthra.io/ui-kit/next`).
  - **Next.js em entry separado**: `GlobalLayoutContainer` saiu do entry principal e está em `@synthra.io/ui-kit/next`, junto com `ThemeRegistry`, `nextLinkComponents` e um `TabBar` que lê a rota atual. O `GlobalLayoutContainer` não usa mais `ssr: false` (os estilos voltam a ser renderizados no servidor).
  - **Overrides do tema passam a valer**: antes, os locales `ptBR` descartavam todos os overrides de componentes. Agora `Button` (sem caixa alta, novos paddings), `Switch`, `Alert`, `Divider`, `Breadcrumbs` e `DataGrid` usam o visual definido no tema. Revise telas que dependiam do visual padrão do MUI.
  - **Links**: `Breadcrumb`, `Menu`, `TabBar` e o `Autocomplete` (`endIconType="link"`) usam o componente de link do tema em vez de importar `next/link`. Fora do Next, configure o seu roteador pelo tema (veja o README).
  - **TabBar**: a aba ativa pela rota agora depende da prop `pathname` (ou do `TabBar` de `@synthra.io/ui-kit/next`). Sem ela, o TabBar controla o próprio estado.
  - **DataTable**: `enableJumpToPage` agora é respeitado (padrão `false`) e usa os botões nativos de primeira/última página. A seleção de linhas funciona com `checkboxSelection` ou `onSelectionModelChange`. `hideFooterSelectedRowCount` não oculta mais o rodapé inteiro. Linhas sem `id` recebem um ID estável em vez de `Math.random()`.
  - **Autocomplete**: o `name` do input deixou de receber o prefixo `autocomplete-`.
  - **Ícones**: usam `currentColor`, herdando a cor do texto (antes, `#373737` fixo). Use `color` ou `htmlColor` para definir a cor.
  - **TextField**: `required` é repassado ao input (o asterisco é o do MUI) e `data-testid` só é gerado quando `dataTestId` é informado.
  - **Menu**: a prop `open` agora controla o menu (antes era ignorada); use `defaultOpen` para o estado inicial não controlado.

  **Novidades**

  - `initializeTheme({ mode, locales, overrides })` para dark mode, white-label e troca de locale.
  - `Provider` (com `cssBaseline` opcional) substitui o `ThemeContext`.
  - Tema `dark` completo (fundo, superfícies e escala `neutral` invertida).
  - `SelectField` aceita `options` com `label` e `value` separados e exibe `noOptionsText` quando vazio.
  - `FormProvider` aceita `resolver` (zod, valibot, yup…).
  - `Menu` aceita `onOpenChange`, `defaultOpen` e `labels`; `Drawer` e `Modal` aceitam `closeLabel`.
  - Tipos da paleta customizada (`neutral`, `brand`, `custom`) incluídos no pacote.
  - Build com um arquivo por módulo (tree-shaking), `exports`, `sideEffects: false` e `'use client'` preservado para o App Router.

  **APIs renomeadas ou removidas** (sem alias de compatibilidade)

  - `isLoading` → `skeleton` (Button, TextField, Checkbox, Autocomplete, Avatar, Breadcrumb, DataTable, Menu).
  - `Alert` `type` → `severity`.
  - `ThemeContext`/`ThemeContextProps` → `Provider`/`ProviderProps`.
  - `IButtonProps`/`ITextFieldProps`/`IAlertProps` → `ButtonProps`/`TextFieldProps`/`AlertProps`.
  - `TabItem` `to` → `href`.
  - `FormProvider` `validationSchema` → `resolver` (ex.: `resolver={yupResolver(schema)}`); `@hookform/resolvers` deixou de ser dependência da biblioteca.
  - `dataTestId` removido do `TextField` e do `Alert`; use `data-testid`.

  **Correções**

  - `Alert` passa a ser exportado pela biblioteca (o `export *` descartava o componente).
  - `Drawer` exibe o botão fechar (o import renderizava um `Drawer` no lugar do `IconButton`).
  - Acessibilidade: nome acessível correto no `Modal` e no `Drawer`; toggle do `Menu` com `aria-label`/`aria-expanded`; itens do `Menu` sem `<a>` envolvendo `<li>`; `aria-current` no `Breadcrumb` e no `Menu`; foco visível no `DataGrid` e no `CodeField`; erros dos campos associados via `aria-describedby`; contraste AA no `Alert` preenchido `info`.
  - `FormProvider` sem `console.log`; `TextFormField` registra o campo uma única vez; `SelectFormField` identifica opções pelo índice (labels repetidos funcionam) e não exibe mais "Nenhuma opção encontrada" como opção selecionável nem asterisco duplicado.
  - `Alert` preserva `sx` e `className` do consumidor.
  - Cores fixas de outra marca substituídas por tokens do tema; o CSS do `CodeField` deixou de afetar todos os `input[type=number]` da aplicação.
  - 14 ícones que existiam mas não eram exportados agora são (`WathIcon` foi renomeado para `WatchIcon`).

## 0.4.0

### Minor Changes

- chore: atualiza dependências para as versões mais recentes (React 19, MUI 9, MUI X Data Grid 9, Next 16, Storybook 10, TypeScript 6, ESLint 9)

  **Breaking changes**

  - Requer `@mui/material` 9 e `@mui/x-data-grid` 9 no projeto consumidor.
  - System props do MUI (`mt`, `mb`, `fontWeight`, `lineHeight`, `textAlign`, `display`, etc.) não são mais suportadas nos componentes repassados ao MUI; use `sx`. O `Typography` do kit continua aceitando `fontFamily` e `fontWeight`.
  - `TextField`: use `slotProps` no lugar de `InputProps`/`InputLabelProps`.
  - `DataTable`: `rowSelectionModel` agora segue o formato do MUI X 9 (`{ type: 'include', ids: Set }`).
  - `TabItem` deve ser usado dentro de `Tabs`/`TabBar` e `MenuItem` dentro de `Menu`/`MenuList`.

  **Correções**

  - Ícones voltam a aplicar `viewBox`, `width`, `height` e `fill` padrão no React 19 (`defaultProps` foi removido para componentes função).

## 0.3.7

### Patch Changes

- add loading state components

## 0.3.6

### Patch Changes

- feat: add skeleton in components UI

## 0.3.5

### Patch Changes

- create skeleton to data table

## 0.3.4

### Patch Changes

- feat: add new icon

## 0.3.3

### Patch Changes

- add husky

## 0.3.2

### Patch Changes

- updated icon

## 0.3.1

### Patch Changes

- feat: change from tsup to rollup

## 0.3.0

### Minor Changes

- add news components

## 0.2.1

### Patch Changes

- components documentation completed

## 0.2.0

### Minor Changes

- feat detailed documentation for each component, including usage examples

## 0.1.1

### Patch Changes

- Initial release, incluindo biblioteca de componentes UI
