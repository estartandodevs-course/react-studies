# Utilizando a CDN do ReactJS.

<h3> Nessa aula vimos como utilizar a CDN do React e renderizamos nosso primeiro componente.</h3>

Abaixo vimos como exportar a CDN na nossa tag `<script>` de dentro do HTML5.

```js

<script
crossorigin
src="https://unpkg.com/react@17/umd/react.development.js" // CDN do React
></script>

<script
crossorigin
src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" // CDN do React DOM
></script>


```

E então criamos o nosso primeiro exemplo da criação e renderização de um componente utilizando JavaScript Vanilla.

- Exemplo 1:

```js
// Criamos nosso componente contendo a tag h1.
const myComponent = document.createElement("h1");

// Passamos o texto 'Helllo World!' para essa tag.
myComponent.textContent = "Hello World!";

/* Colocamos ela dentro da div root que está presente no nosso HTML5
 e assim exibimos em tela. */
document.querySelector("#root").appendChild(myComponent);
```

E pro nosso exemplo 2, utilizaremos o React e o ReactDOM.

```js
// Criando nosso primeiro componente com React.
const myComponent = React.createElement("h1", {}, "Hello World!");
// Renderização do nosso componente utilizando o método render do ReactDOM.
ReactDOM.render(myComponent, document.querySelector("#root"));
```

### Links:

[O que é uma CDN?](https://www.treinaweb.com.br/blog/o-que-e-cdn-content-delivery-network#:~:text=A%20sigla%20CDN%20vem%20de,uma%20menor%20lat%C3%AAncia%20de%20rede.)
[CDN - ReactJS](https://unpkg.com/react@17/umd/react.development.js)
[CDN - ReactDOM](https://unpkg.com/react-dom@17/umd/react-dom.development.js)

<br>

E esse foi nossos primeiros passos utilizando o ReactJS e finalizamos a nossa primeira aula de React do [Estartando Devs](https://github.com/estartando-devs).

[<- Voltar para a página inicial](https://github.com/estartando-devs/react-studies)
