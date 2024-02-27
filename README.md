# Ecommerce

Este documento contém os exercícios feitos em aula + minhas notas pessoais sobre a Mentoria Angular Pro de Paolo Almeida e Andrew Rosário.

## Aula 1

Explicação do escopo do projeto: trata-se de um e-commerce com as funcionalidades de cadastro/login, uma home e um catálogo de produtos. O projeto contempla o front-end desenvolvido em Angular com Nx e o uso de uma API fake disponível no [https://mockapi.io](https://mockapi.io).

## Aula 2

Criação do projeto utilizando o comando:

```bash
npx create-nx-workspace@latest ecommerce --preset=angular-standalone
```

Execução do projeto com o comando:

```bash
nx serve
```

## Aula 3

Criação da biblioteca de layout com o comando:

```bash
nx g @nx/angular:library --name=layout --directory=modules/feature/layout --projectNameAndRootFormat=as-provided --standalone=false --style=css
```

Visualização do gráfico de dependências do projeto com o comando:

```bash
nx graph
```

Criado componente header usando Nx Console a partir da pasta `modules/feature/layout/src/lib` passando as opções `export=true` e `standalone=false`. O comando gerado a partir do Nx Console foi:

```bash
npx nx generate @nx/angular:component --name=header --directory=header --export=true --standalone=false --nameAndDirectoryFormat=as-provided --no-interactive
```

Consumo da biblioteca de layout no projeto principal:

1. Importado o módulo `LayoutModule` em `app.component.ts`;
2. Adicionado o componente `ecommerce-header` em `app.component.html`;
3. Além disso, foi excluído o teste que não passava (fazendo referência a um título que não existe).

Feito isso, `nx lint` e `nx test` foram executados para garantir que o projeto está funcionando corretamente.
