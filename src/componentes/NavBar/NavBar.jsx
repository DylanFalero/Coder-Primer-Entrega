import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'

export const NavBar = () => {


    
    return (

        <header>
            <h1>Tienda Dylan</h1>
            <nav>
                <ul>
                    <li>Lacteos</li>
                    <li>Bebidas</li>
                    <li>Almacen</li>
                </ul>
            </nav>
            <CartWidget />
        </header>

    )
}
