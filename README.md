
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

- RECOMENDAÇÃO

  abaixo disponível o código da criação da tabela que utilizei na API:
  ```sql
  CREATE TABLE enderecos (
    id SERIAL PRIMARY KEY,
    rua VARCHAR(200) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    cep CHAR(9) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    pais VARCHAR(100) NOT NULL,
    enderecoCompleto VARCHAR(600) GENERATED ALWAYS AS 
        (rua || ', ' || bairro || ', ' || cidade || ', ' || estado || ', ' || pais || ', CEP: ' || cep) STORED
   );

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
     ````json
     {
        "id": 1,
        "enderecocompleto": "Rua da Independência, Centro, São Paulo, SP, Brasil, CEP: 01045-000"
      }
 
 -  GET /buscar

    A rota de busca padrão permite encontrar endereços a partir do endereço completo, então, pode ser digitada na busca de query qualquer parte do endereço desejada, como o nome de uma cidade, ou uma rua, até um CEP, que será feita uma busca geral (OBS. a coluna enderecoCompleto é uma concatenação das outras colunas gerando uma coluna automática de todas as outras colunas do endereço, exceto o ID). a busca é realizada com query parameters, onde após a busca, DEVE-SE, utilizar o parametro de query ?busca=****
    - Exexmplo de busca: `https://api-enderecos-no7f.onrender.com/api/enderecos/buscar?busca=Salvador`
    - Ex. de retorno da busca:
      ````json
      [
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
      ]
     
 - GET /buscarPorFiltro/:filtro

   Esta rota, não fugindo do propósito da anterior, serve para realizar uma busca com um filtro, para caso quiser realizar uma busca de endereços de uma mesma rua, cidade, bairro, estado, etc.
   - Ex. de uso: `https://api-enderecos-no7f.onrender.com/api/enderecos/buscarPorFiltro/cidade?busca=Salvador`
   - Ex. de retorno:
     ````json
     [
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
      ]

 - GET /buscarPorId/:id

   O diferencial desta rota para a ultima, é a busca exata de um endereço por um ID, mais simples e precisa.
   - Ex. de uso:  `https://api-enderecos-no7f.onrender.com/api/enderecos/buscarPorId/1`
   - Ex. de retorno:
     ````json
     {
      "id": 1,
      "enderecocompleto": "Rua da Independência, Centro, São Paulo, SP, Brasil, CEP: 01045-000"
     }

 - POST /criarEndereco

   Agora, iniciando a criação de endereços, como citado anteriormente, no meu padrão de endereço, escolhi utilizar todas as informações de endereço comuns:
   **rua, bairro, cidade, estado, país, cep**.
   Portanto, para criar um endereço, no corpo da requisição desta rota deve ser enviado os valores destes campos.
   - Ex de uso de rota:  `https://api-enderecos-no7f.onrender.com/api/enderecos/criarEndereco`
   - Ex. de corpo da requisição contendo os dados necessários para criar o endereço:
     ```json
     {
     "rua": "",
     "cep": "",
     "bairro": "",
     "cidade": "",
     "estado": "",
     "pais": ""
     }

- PUT /atualizar/:id

  Rota básica de atualização que funciona da seguinte forma: O endereço a ser atualizado é definido pelo seu id na URL no ultimo parametro da rota, e ao conjunto des parametro, é requerido no corpo da requisição, o campo (coluna) que irá ser alterado, e o seu valor, da seguinte forma:
   - Ex de uso de rota:  `https://api-enderecos-no7f.onrender.com/api/enderecos/atualizar/34`
   - Ex. de corpo da requisição contendo os dados necessários para criar o endereço:
     ```json
     {
     "campo": "Bairro",
     "valor": "Itaquera"
     }
  Assim, será atualizado do endereço 34, a coluna Bairro, que terá o valor Itaquera.
  
- DELETE /deletar/:id

  Por fim, o D do CRUD, a rota de deletar consiste em apenas inserir o delete de um endereço como parâmetro, no fim da rota /deletar, e assim, o endereço será excluído.
   - Ex de uso de rota:  `https://api-enderecos-no7f.onrender.com/api/enderecos/deletar/34`
