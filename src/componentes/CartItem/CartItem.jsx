import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/context'




export const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)
    console.log(item)

  return (
    <div>
        <h4>{item.nombre}</h4>
        <p>cantidad: {cantidad}</p>
        <p>precio: {item.precio}</p>
        <button onClick={()=>eliminarProducto(item.id)}>Eliminar</button>

    </div>
  )
}
