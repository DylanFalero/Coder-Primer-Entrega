import React from 'react'
import { useEffect, useState } from 'react'
import { getProductos, getProductoPorCategoria } from '../../asyncmock'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({}) => {
  const [productos, setProductos] = useState([])
  const {idCategoria} = useParams()



  useEffect(()=>{

    const funcionProductos = idCategoria ? getProductoPorCategoria : getProductos
    funcionProductos(idCategoria)
    .then (respuesta => setProductos(respuesta))



    // getProductos()
    // .then (respuesta=>setProductos(respuesta))
    // .catch(error => console.log(error))
  },[idCategoria])

  console.log(productos)
  return (
    <div>
      <h2>Mis Productos</h2>
      <ItemList productos={productos} />
    </div>
  )
}
