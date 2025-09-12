import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/context'
import { Link } from 'react-router-dom'



export const CartWidget = () => {

const imagenCarrito = "https://media.istockphoto.com/id/1055020934/vector/black-shopping-cart-icon-on-transparent-background.jpg?s=612x612&w=0&k=20&c=k45gj837q-KjbYjk1wd6USIu3gwip0zoAgKD0VTDIRA="

const {cantidadTotal} = useContext(CarritoContext)


  return (



    <div>

      <Link to="/cart">
        <img className='imagenCarrito' src={imagenCarrito} alt="Imagen de carrito" />
        {
          cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }
      
      
      
      </Link>


    </div>
  )
}
