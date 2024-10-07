import React from 'react';
import './Body.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Body() {
    return (
      <div className='Body'>
        <h1>Quem somos nós?</h1>
  
        <p>A Reciclube é uma aplicação que promove parcerias com mercados e lojas para que possam coletar materiais recicláveis 
          levados pelos clientes cadastrados no app do Reciclube em pontos de coleta facilmente encontrados. O objetivo é que 
          os clientes dos mercados, lojas e afins se cadastrem no App gerando assim para os mesmos uma pontuação para uma certa 
          quantidade de Itens recicláveis trazidos até os pontos de coletas das lojas parceiras.</p>
          
        <p>Os pontos acumulados serão trocados por premiações como cupons de descontos em lojas parceiras, gift cards, 
          vouchers, etc. A quantidade de pontos gerados será definida pelo tipo do lixo, como uma garrafa pet, uma vasilha 
          ou latinhas, ajudando assim a dar um novo destino ao lixo do ambiente urbano e incentivando boas práticas de sustentabilidade.</p>
        
        <img
          src="https://recicleiros.org.br/wp-content/uploads/2023/05/recicla_campo-largo1.png-2048x1366.jpg"
          className="Reciclube"
          alt="Imagem Reciclube"
        />
        
      </div>
    );
  }
  