import React from 'react';  //, { Fragment } opcional se fosse usar o Fragment no wrapper
import './App.css';

import Label from './objects/Label';
import Input from './objects/Input';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
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
        <Input />
        <Label content="Mostrar eventos" />
    </main>
);

export default App;
