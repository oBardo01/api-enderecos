
# API ENDEREÇOS - PEDRO ABREU

Uma simples API feita com o objetivo de testes de prática com CRUD, Deploy, e criação de Banco de Dados em Nuvem.
:D

## INSTALAÇÃO

1 - Clone o Repositório:
`git clone https://github.com/oBardo01/api-enderecos.git`

2 - Mude para o diretório do repo:
`cd api-enderecos`

3 - Instale as dependências:
`npm install`


## CONFIGURAÇÃO

Para fazer esta API rodar, configure as variáveis ambientes no arquivo .env ou no lugar onde você der o deploy, com os dados da porta e do banco de dados;

`PORT = ****
DATABASE_URL = ******`


## USO 

Para inicar API, execute o script configurado no seu package.json, como por exemplo:

`npm run start` ou `node index.js`


### ROTAS e FUNCIONALIDADES
AVISO: Para rodar todas as rotas conforme o funcionamento, certifique-se do caminho antes dos seguintes estar em:
`https://api-enderecos-no7f.onrender.com/api/enderecos`

 - GET /listar
   Rota para listar todos os endereços cadastrados. O retorno vem em uma array de objetos, sendo respectivamente cada objeto um endereço, com os campos:
   id, endereçoCompleto, rua, bairro, cidade, estado, país, cep. Ao executar listar, o retorno vai retornar por padrão o id e o endereçoCompleto de todos os endereços.

   - EX:
     `{
        "id": 1,
        "enderecocompleto": "Rua da Independência, Centro, São Paulo, SP, Brasil, CEP: 01045-000"
      }`.

  - 
