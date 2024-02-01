import React, { useState, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './style.css'

const Pricing = () => {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.card'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  }, []);

  const updateCoins = (amount) => {
    setCoins(amount);
  };

  return (
    <div>
      <div className="coin-display">
        <h1>MOEDAS INSERT: {coins}</h1>
      </div>
      <div className="container">
        <div className="card" onMouseOver={() => updateCoins(100)}>
          <div className="content">
            <h2>01</h2>
            <h3>Pacote Inicial</h3>
            <p>
              Desbloqueie o básico com o Pacote Inicial! Receba <strong>100</strong> Moedas InCert para iniciar sua aventura.
            </p>
            <a href="link_de_pagamento_para_pacote_inicial">Comprar Agora</a>
          </div>
        </div>
        <div className="card" onMouseOver={() => updateCoins(250)}>
          <div className="content">
            <h2>02</h2>
            <h3>Pacote Avançado</h3>
            <p>
              Eleve seu jogo com o Pacote Avançado! Ganhe <strong>250</strong> Moedas InCert e vantagens exclusivas dentro do jogo.
            </p>
            <a href="link_de_pagamento_para_pacote_avancado">Comprar Agora</a>
          </div>
        </div>
        <div className="card" onMouseOver={() => updateCoins(500)}>
          <div className="content">
            <h2>03</h2>
            <h3>Coleção Master</h3>
            <p>
              Mergulhe na experiência de jogo definitiva com a Coleção Master! Aproveite incríveis <strong>500</strong> Moedas InCert e itens raros no jogo.
            </p>
            <a href="link_de_pagamento_para_colecao_master">Comprar Agora</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
