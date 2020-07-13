# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Considerações gerais](#2-considerações-gerais)
* [3. Instalação](#3-instalação)
* [4. Como utilizar](#4-como-utilizar)
* [5. Valor de retorno](#5-valor-de-retorno)

***

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação muito popular entre os programadores. 
É usada em muitas plataformas que manipulam texto (GitHub, fórum, blogs e etc), e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional `README.md`).

Os arquivos `Markdown` normalmente contém _links_ que muitas vezes estão quebrados, ou que já não são válidos e isso prejudica muito o valor da informação que está ali.

Durante o bootcamp da Laboratória, foi proposto criar uma ferramenta, usando [Node.js](https://nodejs.org/), que leia e analise arquivos no formato `Markdown`, para verificar os arquivos que contenham links e mostrar algumas estatísticas.

## 2. Considerações gerais

* A biblioteca e o script executável (ferramenta de linha de comando - CLI) foram implementados em JavaScript para serem executadas com Node.js. 



## 3. Instalação

* Para usar esta biblioteca, você deve ter instalado o Node.js no seu computador.

* O módulo é instalável executando o seguinte comando no terminal:

  `npm install -g daianevieira07/SAP004-md-links`. 
  

## 4. Como utilizar

Ao instalar a biblioteca, é possível utilizá-la pelo arquivo _executável_ que pode ser chamado por linha de comando:
  
  `md-links <path-to-file>`

  ```
  $ md-links ./some/example.md
  ```


  ## 5. Valor de retorno

A função retorna uma promessa (Promise) com uma array de objetos, em que cada objeto representa um link no arquivo, e contém as seguintes propriedades:

```
File: Nome do arquivo indicado.

URL: URL do link encontrado.

Text: Texto indicativo do link dentro do markdown.

