import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import {Link, NavLink} from "react-router-dom"
import './NavBar.css'

export const NavBar = () => {


    
    return (

        <header>
            <h1>Tienda Dylan</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Todos los productos</NavLink> </li>
                    <li><NavLink to="categoria/computadoras">Computadoras</NavLink></li>
                    <li><NavLink to="categoria/sillas">Sillas</NavLink></li>
                    <li><NavLink to="categoria/celulares">Celulares</NavLink></li>
                </ul>
            </nav>
            <CartWidget />
        </header>

    )
}
