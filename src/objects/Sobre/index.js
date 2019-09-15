import React from 'react';
import './styles.css';

const Sobre = () => {
    // como dentro do arquivo JS estamos escrevendo não HTML e sim JSX
    // existem algumas alterações como o atributo class, que no
    // JSX fica className
    return (<a href="#to-do" className="sobre">Sobre</a>)
}

export default Sobre;