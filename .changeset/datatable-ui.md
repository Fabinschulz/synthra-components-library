---
'@synthra.io/ui-kit': patch
---

fix(DataTable): cabeçalho proporcional e conteúdo centralizado

- Texto das células centralizado verticalmente (o tema sobrescrevia o `line-height` do DataGrid e deixava o texto no topo da linha).
- Cabeçalho com 48px, padding de 16px e ícone de ordenação visível apenas ao passar o mouse ou quando a coluna está ordenada; títulos não quebram mais (ex.: "Idade").
- Cabeçalhos e células centralizados por padrão; cada coluna pode definir `align`/`headerAlign`.
- Altura da tabela ajustada ao conteúdo (`autoHeight`), sem espaço vazio abaixo das linhas.
- Divisórias entre colunas com a cor da paleta também no tema escuro.
