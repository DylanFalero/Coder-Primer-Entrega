import React from 'react'
import { useEffect, useState } from 'react'
//import { getProductos, getProductoPorCategoria } from '../../asyncmock'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../Services/config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { Loader } from '../Loader/Loader'

export const ItemListContainer = ({}) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)

  const {idCategoria} = useParams()



  useEffect(()=>{
    setLoading(true)
    const misProductos = idCategoria ? query(collection(db, "productos"), where ("idCat","==", idCategoria)) : collection (db, "productos")
    getDocs(misProductos)
    .then(res => {
      const nuevosProductos = res.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setProductos(nuevosProductos)
    })
    .catch(error=>console.log(error))
    .finally(()=>{
      console.log("Proceso Terminado")
        setLoading(false)   
    })
  
  },[idCategoria])


  console.log(productos)
  return (
    <div>
      <h2>Mis Productos</h2>
      {loading? <Loader/> : <ItemList productos={productos} />}
      
    </div>
  )
}
