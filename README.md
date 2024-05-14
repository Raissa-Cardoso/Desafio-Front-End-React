# Desafio Front-End da Quero
<p>
    <img src="http://img.shields.io/static/v1?label=LICENSE&message=MIT&color=green"/>
    <img src="http://img.shields.io/static/v1?label=VERSION&message=2.0&color=blue"/>
    <img src="http://img.shields.io/static/v1?label=STATUS&message=DEPLOY&color=orange"/>
</p>

Este projeto foi criado a partir dessa proposta:
<https://github.com/quero-edu/desafios/blob/master/frontend-1-filter-favorites/README.md>

## :computer: Para executar o projeto

 1) Instalar as dependências necessárias: **`npm i`**
 2) Para executar o projeto: **`npm run dev`**

## :hammer: Funcionalidades do projeto

### Ao clicar no ícone de "Adicionar Bolsa" abre-se um modal com as ofertas de cursos
 * Pode-se filtar as ofertas por:
    1) Cidade
    2) Curso
    3) Modalidade: Presencial ou A distância
    4) Preço da mensalidade (de R$0 até R$10000)
    5) Combinações entre dois ou mais filtros
 * Se não houver nenhuma oferta selecionada o botão de "Adicionar bolsa(s)" fica desabilitado
 * Botão cancelar limpa todas os filtros e ofertas selecionadas

### Quando houver alguma oferta selecionada pode-se:
 * Excluir os cards das ofertas
 * Filtrar pelos semestres ("Todos os semestres", "2º semestre de 2019" ou "1º semestre de 2020")

## :star: Tecnologias utilizadas

- **`React.js`**
- **`Styled-components`**
- **`Javascript`**
- **`HTML5`**
- **`CSS3`**