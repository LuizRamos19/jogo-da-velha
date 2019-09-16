import React from 'react';  //, { Fragment } opcional se fosse usar o Fragment no wrapper
import Card from './objects/Card';
import Player from './objects/Player';
import Header from './components/Header';
// Em versões atuais do JSX, não é mais necessário
// importar o Fragment do react, basta envolver o 
// <Fragment>
//     <Logo />
//     <Sobre />
// </Fragment>
// wrapper com <></>

function App() {
    return (
        <>
            <Header />
            <Card />
            <Player player="x" />
        </>
    );
}

export default App;
