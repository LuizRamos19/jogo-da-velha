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
            <Card>
                {/* A forma como o object Card acessa os seus filhos estão descrito no arquivo Card/index.js */}
                <Player player="x" />
                <Player player="x" />
                <Player player="x" />

                <Player player="o" />
                <Player player="o" />
                <Player player="o" />

                <Player player="x" />
                <Player player="x" />
                <Player player="x" />
            </Card>
        </>
    );
}

export default App;
