# Back-end do ICTEST

## Configuração para rodar local
- Inicialmente, clone o repositório. Depois entre no repositório pelo terminal e, com o NPM instalado, execute o seguinte comando:

```bash
npm i
```

- É necessário criar um arquivo .env na raiz do projeto e configurar a variável `MONGODB_URL`. Para criar um banco de dados no Mongo e ter acesso a uma URL de conexão, uma das alternativas é criar uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register). Outra alternativa é configurar uma instância do Mongo local, usando o Docker, por exemplo. Outra opção é utilizar o [run-rs](https://github.com/vkarpov15/run-rs).

- Após configurar o Mongo, rodar o projeto através do comando:

```bash
npm start
```
