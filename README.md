## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Nextjs](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com)
- [ShadcnUI](https://ui.shadcn.com)

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Brunoocn/tokenizadora-case-front.git
$ cd tokenizadora-case-front
```

Para iniciá-lo, siga os passos abaixo:

```bash
# Instalar as dependências
$ yarn install
# Iniciar o projeto
$ yarn dev
```

O app estará disponível no seu browser pelo endereço http://localhost:3000.

Vale lembrar que você deve configurar .env como o .env.exemple

## ⚡️ Projeto

- A ideia do projeto foi ter uma estrutura o mais simples possivel de front, e tentar deixar ele com o minimo de responsabilidade 
  possivel, apenas exibindo dados e não sendo responsavel pela regra de negocio.

- Porque escolhi react com next e não vue, ou outro framework? O next está trazendo uma parte de separação de server-side com client-side e
  parte de cache muito interessante, e como estamos trabalhando com um grande numero de requests, por conta de atualizar a cada 5 minutos as
  cryptos, a parte de cache seria bem util junto com a request por lado do server-side.

- Escolhi o shadcn por conta de trazer componentes prontos, mas que seria possivel fazer qualquer customização com ele, mas qualquer outro 
  ui-framework seria bem facil de utilizar dado a simplicidade do projeto.

- Porque não desenvolvi testes no front? Dado a simplicidade do projeto e pela falta de tempo, acabei optando por não desenvolver testes no front-end, mas
  caso tivesse mais tempo, com certeza era algo que iria desenvolver.
