import React from 'react'
import './CartWidget.css'

export const CartWidget = () => {

const imagenCarrito = "https://media.istockphoto.com/id/1055020934/vector/black-shopping-cart-icon-on-transparent-background.jpg?s=612x612&w=0&k=20&c=k45gj837q-KjbYjk1wd6USIu3gwip0zoAgKD0VTDIRA="


  return (



    <div>
        <img className='imagenCarrito' src={imagenCarrito} alt="Imagen de carrito" />
    </div>
  )
}
