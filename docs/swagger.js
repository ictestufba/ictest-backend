const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  swaggerDefinition: {
    info: {
      title: 'ictest-backend',
      version: '1.0.0',
      description:
        'API criada para aplicação web de controle de casos de testes em projetos',
    },
    basePath: '/',
  },
  apis: ['../src/http/controllers/projects/routes.ts'], // Especifique o caminho para os arquivos que contêm as definições das rotas da sua API
}

const specs = swaggerJsdoc(options)

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}
