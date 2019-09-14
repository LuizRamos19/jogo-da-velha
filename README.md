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