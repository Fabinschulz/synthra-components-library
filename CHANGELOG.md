# @synthra.io/ui-kit

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
