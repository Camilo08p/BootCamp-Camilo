import React from 'react';
import { celulares } from './data/productos';
import { CardCarrito } from './CardCarrito';

const Celulares = ({ agregarDatos, filtro }) => {
  const itemsCelulares = celulares
    .filter((cell) => cell.name.toLowerCase().includes(filtro.toLowerCase()))
    .map((cell, index) => {
      return (
        <CardCarrito
          key={index}
          cell={cell}
          mostrarBoton={true}
          agregarDatos={agregarDatos}
          action={'celular'}
        />
      );
    });

  return <div className="product-list">{itemsCelulares}</div>;
};

export default Celulares;
