# NodeJS

O node é uma plataforma que permite o desenvolvimento para back-end utilizando a linguagem JS.
A tecnologia responsável por ler o JS é chamada de V8, encontrado em navegadores como o Chrome.
O Node possibilita a utilização de várias APIs para conseguirmos codificar em JS e o mesmo ser lido por recursos de máquina.

# React

Criado pelo Facebook junto com o Instagram.
O React, primeiramente, não é um Framework e sim uma lib de componentização. Trabalho com views e componentização.

O React a princípio foi criado pensando em Web, entretanto hoje já existe o RN (React Native) para mobile e o Electron, para desenvolvimento desktop.

Framework vs Lib
Geralmente o framework é mais completo e possibilita recursos para requisições AJAX, etc... O Angular é um framework.

O React utiliza uma lib para escrever HTML dentro de um arquivo JS que é o JSX.

# Yarn

Desenvolvido pelo Facebook.
A diferença entre o _npm_ e o _yarn_ a princípio era de que o npm em suas primeiras versões tinha um problema com relação a pacotes comuns de dependências diferentes. Então quando instalávamos dois pacotes com dependências diferentes, a versão que ficava no projeto da dependência comum era a da última que foi instalada. O _yarn_ desde o seu início não tinha esse problema. Entretanto, nas versões mais atuais o _npm_ resolve isso fazendo uso do arquivo _package-lock.json_ que administra essas dependências entre pacotes diferentes. 

# npm vs npx

O _npm_ instala o pacote definitivo na máquina. O _npx_ funciona apenas para executarmos um determinado comando de um pacote que não temos na máquina, usar os recursos daquele comando e logo em seguida desinstala aquele mesmo comando. Então serve para pacotes que não iremos usar sempre na nossa máquina. Ex:

```
npx create-react-app // esse pacote funciona apenas para criarmos um projeto em react, nada mais
```

# git shortcuts

Para trackear um repositório local com um remoto, basta:

```
git remote add origin [caminho do repositório]
```

# ITCSS

O ITCSS é uma arquitetura de criação de pastas do projeto para organizar o CSS. É baseado em um triângulo invertido de 7 camadas onde cada uma pode consumir recursos da base + 1 camada acima.

```
7ª camada - settings (variáveis globais. Ex: colors.js, etc)
6ª camada - tools (Funções comuns. Ex: base.js)
5ª camada - generic (Retirar comportamento padrão dos navegadores. Normalmente se usa seletores de tag nessa camada. Ex: reset.css)
4ª camada - base, elements (Garantir que os elementos tenham de fato as suas características. Normalmente se usa seletores de tag nessa camada.)
3ª camada - objects (Fazer com que um title, por exemplo, possa ser usado em lugares diferentes. Normalmente se usa seletores de classes nessa camada)
2ª camada - components (Diferente da objects, aqui o elemento é mais específico. Normalmente se usa seletores de classes nessa camada)
1ª camada - 
```

`7ª camada - Settings`

```
colors.js
size.js - tamanho de fonts, etc
spacing.js - espaçamentos, respiros, etc
etc...
```

`6ª camada - Tools`

```
functions.js

const center = (width) => { `
    display: block;
    width: ${width};
    margin: auto;
`};
```

`5ª camada - Generics`

```
reset.css
```

`4ª camada - Base ou Elements`

```
index.js - Garante que o elementos tenham o mesmo comportamento

h1 {
    font-size: 2.4 rem;
}
```

`3ª camada - Objects`

```
Essa camada precisa ser:

Simples (burro, stateless (sem estado));
Um mesmo conceito de OO, ou seja, que possibilite o reaproveitamento;

Precisa evitar ao máximo colocar:

Margin/padding/display:flex/position/float
```

`2ª camada - Components`

```
Essa camada precisa ter dentro do component:

Complexo (statefull (com estado));
Reutilizável;
margin/padding/position/display:flex

Precisa evitar ao máximo colocar no component em si:

margin/padding/position/display:flex
```

# Flexbox

Quando colocamos um pai com uma propriedade _display: flex_, esse elemento pai recebe o nome de _flex container_, e seus filhos recebendo o nome de _flex item_.

Nesta propriedade existem dois eixos, o _main axis_ (horizontal) e o _cross axis_ (vertical).

```
cross start     ------------------------
                |                      |
                |                      |
cross end       ------------------------
            main start              main end
```

# Grid

display: grid;
         inline-grid;

grid-item:
grid-line: controla o espaço entre os itens dentro do container (gap)
grid-track: representa as linhas verticais e horizontais do grid container