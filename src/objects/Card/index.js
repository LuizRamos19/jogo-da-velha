import React from 'react';
import './styles.css';

const Card = ({ children }) => (
    <article className="card">
        {children}  {/* A forma como acessamos os components filhos para exibí-los na tela */}
    </article>
);

export default Card;