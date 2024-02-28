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

## Aula 4

Primeiro, foi estilizado o componente `header`. Em seguida, foram escritos testes unitários para o componente `header`:

```typescript
it(`should contain title`, () => {
  const header: HTMLHeadElement = fixture.nativeElement.querySelector('header');
  expect(header.textContent).toBe('Ecommerce');
});
```

E para o componente `app`:

```typescript
it(`should contain header`, () => {
  const header: HTMLElement = fixture.nativeElement.querySelector('header');
  expect(header).toBeTruthy();
});
```

## Aula 5

Instalado `husky` + `lint-staged` para rodar `nx lint` e `nx test` antes de cada commit. Seguem comandos:

```bash
npx husky-init && npm install
npm install lint-staged
```

Para configurar:

1. Substituir a instrução `npm test` por `npx lint-staged` no arquivo `.husky/pre-commit`;
2. Criar um arquivo `.lintstagedrc` na raiz da aplicação com o seguinte conteúdo:

```json
{
  "{src,modules}/**/*.{js,ts,jsx,tsx,json,html,css,scss}": [
    "nx affected:lint --fix --uncommitted",
    "nx affected:test",
    "nx format:write --uncommited"
  ]
}
```

3. Adicionar a regra abaixo na seção `rules` do arquivo `eslintrc.base.json` para permitir o uso de `console.warn` e `console.error` no código mas não permitir `console.log`:

```json
"no-console": [
    "error",
    {
    "allow": ["warn", "error"]
    }
],
```

4. Testar o commit.

## Aula 6

Criado o módulo `product-data-access` com o comando:

```bash
npx nx g @nx/angular:library --name=product-data-access --directory=modules/data-access/product --projectNameAndRootFormat=as-provided
```

**Nota**: o componente `product-data-access` foi excluído e removido da `index.ts`.
