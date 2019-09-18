import React from 'react';  //, { Fragment } opcional se fosse usar o Fragment no wrapper
import './App.css';

import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Checkbox from './objects/Checkbox';
// Em versões atuais do JSX, não é mais necessário
// importar o Fragment do react, basta envolver o 
// <Fragment>
//     <Logo />
//     <Sobre />
// </Fragment>
// wrapper com <></>

const App = () => (
    <main className="app">
        <Header />
        <Hashtag />
        <Checkbox id="show" value="show" content="Mostrar eventos" />
    </main>
);

export default App;
