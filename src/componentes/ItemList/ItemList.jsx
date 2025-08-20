import React from 'react'
import { Item } from '../Item/Item'
import "./ItemList.css";

export const ItemList = ({productos}) => {
  return (
    <div className='item-list'>
        {productos.map(item => <Item key={item.id} {...item}/>)}

    </div>
  )
}
