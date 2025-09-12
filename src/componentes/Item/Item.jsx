import React from 'react'
import "./Item.css";
import { Link } from 'react-router-dom';

export const Item = ({id, nombre, precio, imagen, stock}) => {
  return (
    <div className='item-card'>
        <img src={imagen} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>Precio: {precio}</p>
        <p>Stock: {stock}</p>
        <p>ID: {id}</p>
        <Link to={`/item/${id}`}><button>Ver  Detalles</button></Link>
        
    </div>
  )
}
