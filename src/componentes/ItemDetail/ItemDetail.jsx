import React, { useState } from 'react'
import "./ItemDetail.css";
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';

import { CarritoContext } from '../../context/context';
import { useContext } from 'react';

export const ItemDetail = ({id, nombre, precio, imagen, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarCarrito} = useContext(CarritoContext)
  const {eliminarCarrito} = useContext(CarritoContext)
  const {vaciarCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad)

    //Ahora aca yo puedo crear un objeto con el item y la cantidad
    const item = {id, nombre, precio}
    agregarCarrito(item, cantidad)
  }
  return (
    <div className="item-detail">
        <img src={imagen} alt={nombre} />
        <div className="item-detail-info">
            <h2>Nombre: {nombre}</h2>
            <h3 className="price">Precio: {precio}</h3>
            <h3>Id: {id}</h3>
            <p>Descripcion: dESCRIPCION</p>
            {
              agregarCantidad >0 ?(<Link to="/cart">Temrinar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }
        </div>
        
        
    </div>
  )
}
