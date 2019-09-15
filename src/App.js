import React from 'react';  //, { Fragment } opcional se fosse usar o Fragment no wrapper
import Sobre from './objects/Sobre';
import Logo from './objects/Logo';

function App() {
    return (
        // Em versões atuais do JSX, não é mais necessário
        // importar o Fragment do react, basta envolver o 
        // <Fragment>
        //     <Logo />
        //     <Sobre />
        // </Fragment>
        // wrapper com <></>
        <>
            <Logo />
            <Sobre />
        </>
    );
}

export default App;
