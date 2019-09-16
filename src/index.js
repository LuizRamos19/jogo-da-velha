import React from 'react';
import ReactDOM from 'react-dom';
import './styles/settings/colors.css';
import './styles/settings/spacing.css';
import './styles/generics/reset.css';
import './styles/elements/base.css';
// essas linhas de import css não são características do JS, elas estão acessando um recurso do react-scripts
// que é o webpack para conseguir injetar esses arquivos no nosso projeto
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
