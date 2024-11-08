
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
   - Exemplo de retorno na listagem:
     `{
        "id": 1,
        "enderecocompleto": "Rua da Independência, Centro, São Paulo, SP, Brasil, CEP: 01045-000"
      }`.


 
 -  GET /buscar

   A rota de busca padrão permite encontrar endereços a partir do endereço completo, então, pode ser digitada na busca de query qualquer parte do endereço desejada, como o nome de uma cidade, ou uma rua, até um CEP, que será feita uma busca geral (OBS. a coluna enderecoCompleto é uma concatenação das outras colunas gerando uma coluna automática de todas as outras colunas do endereço, exceto o ID). a busca é realizada com query parameters, onde após a busca, DEVE-SE, utilizar o parametro de query ?busca=****
    - Exexmplo de busca: `https://api-enderecos-no7f.onrender.com/api/enderecos/buscar?busca=Salvador`
    - Ex. de retorno da busca:
     `[
       {
        "id": 16,
        "enderecocompleto": "Avenida São Sebastião, Centro, Salvador, BA, Brasil, CEP: 40060-001"
       },
       {
        "id": 17,
        "enderecocompleto": "Rua da Glória, Glória, Salvador, BA, Brasil, CEP: 40050-000"
       },
       {
        "id": 18,
        "enderecocompleto": "Rua da Praça, Praça da Sé, Salvador, BA, Brasil, CEP: 40080-000"
       },
       {
        "id": 19,
        "enderecocompleto": "Avenida Dom João VI, Cajazeiras, Salvador, BA, Brasil, CEP: 41710-000"
       },
       {
        "id": 20,
        "enderecocompleto": "Rua dos Sinos, Pernambués, Salvador, BA, Brasil, CEP: 40130-000"
       }
      ]`


     
 - GET /buscarPorFiltro/:filtro

  Está rota, não fugindo do propósito da anterior, serve para realizar uma busca com um filtro, para caso quiser realizar uma busca de endereços de uma mesma rua, cidade, bairro, estado, etc.
    - Ex. de uso: `https://api-enderecos-no7f.onrender.com/api/enderecos/buscarPorFiltro/cidade?busca=Salvador`
    - Ex. de retorno:
     `[
       {
        "id": 16,
        "enderecocompleto": "Avenida São Sebastião, Centro, Salvador, BA, Brasil, CEP: 40060-001"
       },
       {
        "id": 17,
        "enderecocompleto": "Rua da Glória, Glória, Salvador, BA, Brasil, CEP: 40050-000"
       },
       {
        "id": 18,
        "enderecocompleto": "Rua da Praça, Praça da Sé, Salvador, BA, Brasil, CEP: 40080-000"
       },
       {
        "id": 19,
        "enderecocompleto": "Avenida Dom João VI, Cajazeiras, Salvador, BA, Brasil, CEP: 41710-000"
       },
       {
        "id": 20,
        "enderecocompleto": "Rua dos Sinos, Pernambués, Salvador, BA, Brasil, CEP: 40130-000"
       }
      ]`
