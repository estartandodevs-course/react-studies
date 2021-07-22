# Componentização e props

Em React umas das partes mais fundamentais são os conceitos de componentização e props, os componentes são um conjunto de código que podem ser reutilizados em qualquer parte do seu projeto. Já as props ou propriedades, pode se dizer que seria os atributos, e essas propriedades podem ser passada de componentes para componentes.

# Exemplo de um componente

## Como criar um componente?

Geralmente utilizamos a pasta components dentro da src do nosso projeto, lá guardamos todos os nossos componentes.

```js
|src
| |-components
|   | - Button
|       | index.js
|       | styles.css
```

Dentro da pasta components criamos a pasta `Button`, e dentro dela temos um `index.js` e um `styles.css`, no nosso index é onde vai ficar o nosso código do componente `Button`, e no styles como já sabemos, é a estilização desse botão.

```js
import "./styles.scss";

const Button = () => {
  return (
    <button id="button">
      Click
    </button>
  );
};

export { Button };
```

Aqui temos o código do componente botão, ele é criado atráves de uma função e retornamos dessa função um JSX `<button>Click</button>`,
nela temos apenas um id e além disso usamos o export para podermos utilizar o componente em outros locais, para estilizarmos na página que quisermos.

# Utilizando esse componente

```js
import React, { useState } from "react";
import { Button } from "../Button";

  return (
      <Button seClicarDisparaMensagem={() => console.log('O botão foi clicado')}/>
  );
}

export { Counter };
```
Aqui já temos um componente dentro de outro componente, e isso é possivel, para usar o `Button` nessa página, nós primeiros importamos o Button no `import { Button } from "../Button';`, que é onde esta localizado a pasta do nosso componente Button, e logo em seguida chamamos ele com o <Button /> e passamos uma propriedade que iremos falar logo a baixo.

# Props

As propriedades são passadas de componentes para componentes, e para utilizarmos ela fazemos da seguinte maneira:

```js
import "./styles.scss";

const Button = (props) => {
  return (
    <button id="button" onClick={props.seClicarDisparaMensagem}>
      Click
    </button>
  );
};

export { Button };
``` 

Nós passamos `props` como propriedade da função Button que é um objeto, e nesse caso queremos executar uma função de click, então chamamos o `onClick={}` e passamos a nossa `props` dentro do onClick, que no caso é a `seClicarDisparaMensagem`, e assim que clicarmos ira dispara o evento de click, que irá olhar essa propriedade e executar a função que da o `console.log()`.

E assim foi a nossa aula de componentização e props e finalizamos a nossa segunda aula de React do [Estartando Devs](https://github.com/estartando-devs).

[<- Voltar para a página inicial](https://github.com/estartando-devs/react-studies)
