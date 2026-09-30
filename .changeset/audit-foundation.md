---
'@synthra.io/ui-kit': minor
---

refactor: fundação do tema, empacotamento, acessibilidade e API dos componentes (roadmap da auditoria)

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
