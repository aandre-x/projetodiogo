import React from 'react';
import './Score.css';
import ScoreItem from '../../components/scoreItem/ScoreItem';

export default function Score() {
    const materiais = [
        { item: "Papelão(Kg)", pontos: 5 },
        { item: "Garrafa PET(Un)", pontos: 10 },
        { item: "Vidro(Kg)", pontos: 15 },
        { item: "Plástico(Kg)", pontos: 15 },
        { item: "Lata de alumínio(Kg)", pontos: 20 },
        { item: "Tecido(Kg)", pontos: 20 },
        { item: "Lixo eletrônico(Kg)", pontos: 50 }
    ];

    return (
        <div className="Score">
            <h2>Valores dos Materiais Recicláveis</h2>
            <ul>
                {materiais.map((material, index) => (
                    <ScoreItem key={index} item={material.item} pontos={material.pontos} />
                ))}
            </ul>
        </div>
    );
}
