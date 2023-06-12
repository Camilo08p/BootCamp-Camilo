import React, { useState } from 'react';
import Televisores from './Televisores';

const CartasCelulares = ({ agregarDatos }) => {
  const [filtro, setFiltro] = useState('');

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  return (
    <div>
      <div>
        <div className='divBuscador'>
        <input className='buscador'
          type="text"
          placeholder="Buscar por Marca"
          value={filtro}
          onChange={handleFiltroChange}
        />
        </div>
        
      </div>
      <Televisores agregarDatos={agregarDatos} filtro={filtro} />
    </div>
  );
};

export default CartasCelulares;
