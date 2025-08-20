import React, { useState } from 'react'
import "./ItemDetail.css";
import { Link } from 'react-router-dom';

export const ItemDetail = ({id, nombre, precio, imagen}) => {

  return (
    <div className="item-detail">
        <img src={imagen} alt={nombre} />
        <div className="item-detail-info">
            <h2>Nombre: {nombre}</h2>
            <h3 className="price">Precio: {precio}</h3>
            <h3>Id: {id}</h3>
            <p>Descripcion: dESCRIPCION</p>
        </div>
        
        
    </div>
  )
}
