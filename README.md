# Back-end do ICTEST

## Configuração para rodar o projeto na sua máquina

- Inicialmente, você precisa ter o Docker instalado na sua máquina.

- Clone o repositório

- Na raiz do projeto, crie um arquivo `.env` para declarar as variáveis de ambiente `NODE_ENV`, `JWT_SECRET` e `DATABASE_URL` (veja o exemplo no arquivo `.env.example`). Dica do formato da URL do PostgreSQL: `postgresql://usuario:senha@ip:porta/banco-de-dados?schema=nome-do-schema`. Para o caso do ambiente de desenvolvimento, conforme o docker-compose: `postgresql://docker:docker@localhost:5432/ictest?schema=public`

- Para subir o banco de dados, rode o seguinte comando:

```bash
docker compose up -d
```

- Instale as dependências do projeto com o comando a seguir:

```bash
npm i
```

- Rode as migrations do banco de dados com o seguinte comando:

```bash
npx prisma migrate dev
```

- Com as dependências instaladas, você poderá rodar o projeto utilizando o seguinte comando:

```bash
npm run start:dev
```

## Comandos para testes

### Testes unitários

```bash
npm run test
```

### Testes unitários em modo watch

```bash
npm run test:watch
```

### Relatório de cobertura de testes

```bash
npm run test:coverage
```

### Rodar os testes com a interface do Vitest UI

```bash
npm run test:ui
```

### Informações importantes

- Ao escrever uma nova funcionalidade para a aplicação, agregue testes unitários para o caso de uso e um teste E2E para o controller correspondente.

- Antes de fazer um novo commit, rode os testes unitários e E2E, garantindo que a nova funcionalidade não compromete o código existente.
