import React from 'react'
import { useEffect, useState } from 'react'
//import { getUnProducto } from '../../asyncmock'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import {useParams} from "react-router-dom"
import { db } from '../../Services/config'
import { getDoc, doc } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()
    const {idItem} = useParams()

    useEffect(()=>{
      const nuevoDoc = doc(db, "productos", idItem)
      getDoc(nuevoDoc)
      .then (respuesta=>{
        const data = respuesta.data()
        console.log(data)
        const nuevoProducto = {id: respuesta.id, ...data}
        console.log(nuevoProducto)
        setProducto(nuevoProducto)
      })
      .catch(error=>console.log(error))
    },[idItem])
    
    
    
    // useEffect(()=>{
    //     getUnProducto(idItem)
    //     .then (respuesta=>setProducto(respuesta))
    // },[idItem])


  return (
    <div>
        <ItemDetail {...producto}/>

    </div>
  )
}
