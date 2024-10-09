import React from 'react';
import './Score.css'

export default function Score() {
    return (
      <div class="Score">
        
        <h2>Valores dos Materiais Recicláveis</h2>
    <ul>
        <li>
              <span class="item">Papelão(Kg)</span>
              <span class="pontos"> 5 pontos</span>
          </li>
          <li>
              <span class="item">Garrafa PET(Un)</span>
              <span class="pontos"> 10 pontos</span>
          </li>
          <li>
              <span class="item">Vidro(Kg)</span>
              <span class="pontos"> 15 pontos</span>
          </li>
          <li>
              <span class="item">Plástico(Kg)</span>
              <span class="pontos"> 15 pontos</span>
          </li>
          <li>
              <span class="item">Lata de alumínio(Kg)</span>
              <span class="pontos"> 20 pontos</span>
          </li>
          <li>
              <span class="item">Tecido(Kg)</span>
              <span class="pontos"> 20 pontos</span>
          </li>
          <li>
              <span class="item">Lixo eletrônico(Kg)</span>
              <span class="pontos"> 50 pontos</span>
          </li>
    </ul>
</div>

  );
}