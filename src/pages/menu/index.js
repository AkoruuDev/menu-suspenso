import React, { useState } from 'react';
import MenuButton from './MenuButton';
import './styles'

const Menu = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [pages, setPages] = useState(4)

  const handleClick = (buttonId) => {
    setSelectedButton(buttonId);
    // Aqui você pode adicionar a lógica para mover o scroll da página
  };

  useEffect(() => {
    // Código para o movimento aleatório das divs
    const interval = setInterval(() => {
      // Atualize as posições horizontais das divs de acordo com a lógica desejada
    }, 1000); // Ajuste o intervalo conforme necessário

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="menu">
      {pages.map( e => {
        <MenuButton
            key={buttonId}
            className={`button ${selectedButton === buttonId ? 'selected' : ''}`}
            onClick={() => handleClick(buttonId)}
        />
      } )}
    </div>
  );
}

export default Menu;