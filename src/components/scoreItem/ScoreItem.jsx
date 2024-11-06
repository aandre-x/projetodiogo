import React from 'react';

export default function ScoreItem({ item, pontos }) {
    return (
        <li>
            <span className="item">{item}</span>
            <span className="pontos">{pontos} pontos</span>
        </li>
    );
}
