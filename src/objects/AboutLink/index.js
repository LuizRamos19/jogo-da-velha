import React from 'react';
import './styles.css';

const AboutLink = ({ className = "" }) => (
    // como dentro do arquivo JS estamos escrevendo não HTML e sim JSX
    // existem algumas alterações como o atributo class, que no
    // JSX fica className
    <a href="#to-do" className={`about-link ${className}`}>Sobre</a>
)

export default AboutLink;