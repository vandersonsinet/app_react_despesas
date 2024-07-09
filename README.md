# Esta é uma aplicaçao para registro de depesas em React

O objetivo desse sistema é oferecer um registro das suas despesas e ajudá-lo neste controle.

Seu desenvolvimento é baseado em React utilizando o conceito de componentizacao. Foi utilizado o conceito de reutilizaçao de componentes nas páginas, o que torna o codigo mais limpo e dinamico. 

Como optamos por nos concentrar no desenvolviemnto puramente de front end, nessa versao nao foi utilizada uma API. Dessa forma, um arquivo em Json foi utilizado para a leitura das informacoes iniciais simulando uma tabela do banco de dados. 

Na tela de despesas, voce poderá incluir a lista de despesas por tipo e, posteriormente, verificar na tela de resumo, um conjunto de cards com gasto total para cada tipo de despesa registrada.

## Como executar

Será necessário ter o [Nodejs, ou o npm,](https://nodejs.org/en/download/) instalado. 

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo.

```
$ npm install
```

Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.

Para executar a interface basta executar o comando: 

```
$ npm start
```

Abra o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador.

Link para o prototipo: https://www.figma.com/design/ts5hLRFdLv0bcYni33gdJy/Despesas?node-id=0-1&t=FSzseRCpUyrWGLx1-1

