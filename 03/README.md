# Aula 03 - Hooks -> useState & useEffect - consumindo a API reqres + paginação


<h2> Nessa aula vimos o que são Hooks, em especial dois muito utilizados: useState e useEffect</></h2>
&nbsp;
&nbsp;
<h2>useState<a name="useState"></a></h2>
&nbsp;
&nbsp;



<p>Pelas minhas pesquisas e por uma leve quantidade de dedução,o <b>useState</b>, é o primeiro hook que geralmente é mostrado quando React é ensinado ou falado,  na documentação oficial do React o exemplo que nós é apresentado é em forma de contador, escrito em código ficaria mais ou menos assim:</p>

```

import React, { useState } from 'react;

function Example() {
    const [count, setCount] = useState(0)

    return (
        <div> 
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

```

<p>Antes de eu dar minha explicação sobre como consegui entender melhor o que o useState faz, vou postar a forma feito em Javascript puro pra mostrar exatamente o que o count é e o que o setCount são:</p>

```

let count = 0;

const setCount = (value) => {
    count = value
}

```

<p>O useState tem dois valores, o primeiro é uma <b>variável</b> e o segundo é uma <b>função</b>,e o trabalho dessa função é basicamente atualizar a variável!


Exemplificando a variável agora que esse exemplo está claro:

<b>const [count, setCount] = useState(0)</b>

<b>const</b> - declaração de que a variável é uma const.
<b>[count, setCount ]</b> - desestruturação do array, onde <b>count</b> é a variável e <b>setCount</b> - é a função que atualiza o estado dessa variável.
<b> useState(0)</b> - passando o parâmetro inicial para a função e consequentemente para a variável, ou seja, <b>count</b> ira começar em <b>(0)</b></p>


<h4>Reforçando que:</h4>

- <p>useState é um <b>array</b>, mas seu retorno não está limitado a tal, no exemplo acima foi passado um nú mero, porem poderia ter sido passado uma string <b>" "</b> (vazia ou não), ou um objeto <b>{ }</b> (vazio ou não)</p>

- <p>Ainda sobre a ideia de ser um array, a desestruturação do mesmo é opcional e facilita muito a leitura, mas poderia ser usado dessa forma:</p>


```
 const arrayState = useState(0);
 const count = arrayState[0]; 
 const setCount = arrayState[1];
```

<p>Um ultimo exemplo usando dois useStates para exemplificar:</p>

```
function App () {
    const [count, setCount] = useState (0)
    const [theme, setTheme] = useState ("")

    function decrementCount () {
        setCount(prevCount => prevCount -1)
        setTheme('green')
    }

    function incrementCount() {
        setCount(prevCount => prevCount +1)
        setTheme('blue')
    }

    return (
        <>
        <button onClick={decrementCount}> - </button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}> + </button> 
        </>
    )
}

```

<p>No código acima, temos dois useState, um para gerenciar a variável <b>count</b> inicialmente declarado como <b>0</b>, e um para gerenciar a variável <b>theme</b>, inicialmente declarado como " " (uma string vazia), e temos dois botões no fim do código onde, cada um deles tem uma função diferente atribuída, ao se clicar no botão de <b>-</b> a variável <b>count</b> sera subtraída em 1 e a variável <b>theme</b> vai renderizar <b>green</b> na tela, ao clicar no botão de <b>+</b> a variável <b>count</b> sera somada em 1 e a variável <b>theme</b> ira renderizar <b>blue</b>!</p>

&nbsp;
&nbsp;
<h2>useEffect<a name="useEffect"></a></h2>
&nbsp;
&nbsp;

<p>Confesso que esse eu demorei um pouco mais para entender, o conceito e o que fazia, mas com o exemplo que eu vi, e irei escrever aqui, ficou claro e bem mais compreensível.</p>

<p>Dada a minha própria limitação, não sera tão extenso quanto o <b>useState</b> foi, mas acredito que ficará claro!</p>

<p>Um jeito simples de se entender o useEffect de inicio é, pensar em um bloco de código que você deseja executar toda vez que algum componente for renderizado, isso ficou bem confuso de inicio mas o exemplo abaixo me fez entender melhor:</p>

```
function App () {
    const [resourceType, setResourceType] = useState ('')

    console.log('render')

    useEffect (() => {
        console.log("resourceType changed")
        
    }, [resourceType] )

    return (
        <>
            <div>
                <button onClick={() => setResourceType('post')}>Post</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
        </>
    )
}
```
<p>De inicio, temos a utilização do useState novamente, como dito na parte de cima, ele é uma hook que ira controlar estados, <b>resourceType</b> é a variável e <b>setResourceType</b> a função que atualiza o valor dessa variável, e de inicio está sendo passado uma string vazia para ela <b>( ' ' )</b>.</p>

<p>Logo abaixo dessa declaração, temos um <b>console.log</b> que ira renderizar a palavra <i>render</i>, e em seguida temos o uso do <b>useEffect</b>, o mesmo recebe uma função como parâmetro (que pelo o que eu vi, quase sempre será uma arrow function) e essa função irá rodar outro <b>console.log</b> com a frase <i>resourceType changed</i>, e no fim do <b>useEffect</b>, temos um array com um parâmetro, nesse caso o <b>resourceType</b>, a nossa variável lá do inicio.</p>

<p>Na ultima parte, temos a renderização, três botoes, cada botão executando a função <b>setResourceType</b> e em cada um deles um parâmetro diferente é passado, no primeiro botão, o parâmetro é o <b>post</b>, no segundo botão, o parâmetro é <b>users</b>, e no terceiro o parâmetro é <b>comments</b>.</p>

<p>A funcionalidade do useEffect no exemplo acima será a seguinte:</p>

<p>Quando esse componente for renderizado, ele ira exibir no console a palavra <i>render</i> devido aquele primeiro console.log, ao se clicar em qualquer um dos botões, o <b>h1</b> da página irá renderizar de acordo com o botão (<b>post </b>ou <b>users</b> ou <b>comments</b>) e ira exibir <i>resourceType changed</i> que estava no segundo console.log dentro do useEffect.</p>

<p>Isso acontece pois, como parâmetro, no useEffect, nos passamos o <b>resourceType</b> dentro daquele array, com isso, o bloco de código dentro do useEffect só sera rodado se o <b>resourceType</b> for modificado!</p>

<p>Se não houvesse parametro no array, e o mesmo estivesse vazio <b>[ ]</b>, o bloco do useEffect seria usado apenas uma vez, durante a primeira renderização!</p>

<p>Se clicar no botão do <b>Post</b> uma vez, quando qualquer um dos dois outros parâmetros (<b>users</b> ou <b>comments</b>) estiver renderizado na tela, as duas mensagens serão exibidas, pois ao clicar no botão você chamou a função <b>setResourceType</b> e assim modificou o <b>resourceType</b> fazendo com que o código do bloco <b>useEffect</b> seja executado, mas se após isso, você clicar novamente no mesmo botão, você tera apenas um dos consoles.log, o de <i>render</i>, fora do useEffect, pois o <b>resourceType</b> segue sem ser modificado, era um <b>Post</b> e você clicando no mesmo botão ele continua sendo um <b>Post</b>, segue inalterado.</p>



### Links:
[Documentação oficial do React falando sobre Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)

[Um texto do Dan Abramov falando sobre Hooks (inglês)](https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib)


<br>

E assim finalizamos outra aula  de React do [Estartando Devs](https://github.com/estartando-devs). 



[<- Voltar para a página inicial](https://github.com/estartando-devs/react-studies)