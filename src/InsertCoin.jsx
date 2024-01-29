import React, { useState } from 'react';

const InsertCoin = () => {
  const [coins, setCoins] = useState(0);

  const handleInsertCoin = () => {
    setCoins(coins + 1);
  };

  const handleLeverMove = () => {
    // Lógica para lidar com o movimento da alavanca
    // Aqui você pode adicionar mais lógica conforme necessário
    console.log('Alavanca movida!');
    // Adicione aqui a lógica para consumir moedas quando a alavanca é acionada
    if (coins > 0) {
      console.log('Ficha inserida!');
      setCoins(coins - 1);
    } else {
      console.log('Sem fichas. Insira uma ficha para jogar.');
    }
  };

  const handleLeverRelease = () => {
    console.log('Alavanca solta!');
    // Adicione mais lógica aqui, se necessário
  };

  const handleButtonClick = (buttonIndex) => {
    // Lógica para lidar com o clique nos botões
    console.log(`Botão ${buttonIndex + 1} clicado!`);
  };

  return (
    <div>
      <h1>Fliperama</h1>
      <div>
      <h2 style={{ fontFamily: 'Silkscreen, sans-serif' }}>INCERT COINS: {coins}</h2>

        <button onClick={handleInsertCoin}>Inserir Ficha</button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Alavanca */}
        <div
          style={{
            width: '60px',
            height: '160px',
            background: '#444',
            margin: '20px',
            cursor: 'pointer',
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '2px solid #666',
          }}
          onMouseDown={handleLeverMove}
          onMouseUp={handleLeverRelease}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              background: '#F00',
              borderRadius: '50%',
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              border: '2px solid #F90',
            }}
          ></div>
        </div>
        {/* Botões em duas fileiras */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            {[...Array(3)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#F00',
                  borderRadius: '50%',
                  margin: '10px',
                  border: '2px solid #F90',
                }}
              ></button>
            ))}
          </div>
          <div style={{ display: 'flex' }}>
            {[...Array(3)].map((_, index) => (
              <button
                key={index + 3}
                onClick={() => handleButtonClick(index + 3)}
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#F00',
                  borderRadius: '50%',
                  margin: '10px',
                  border: '2px solid #F90',
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsertCoin