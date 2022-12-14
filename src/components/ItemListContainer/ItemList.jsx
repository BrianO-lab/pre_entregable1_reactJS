import React from 'react'
import ItemCard from '../ItemCard/ItemCard';

import './ItemListContainer.css'


function ItemList(prop) {
  return (
    <div className='list-item'>
      {prop.dataBook.map((book) => {
        return (
          <ItemCard
            class='card'
            key={book.id}
            id={book.id}
            titulo={book.titulo}
            img={book.img}
            autor={book.autor}
            precio={book.precio}
            stock={book.stock}
            classBtnAddCart="btn-cart"
            textBtnAddCart="AGREGAR AL CARRITO"
          />
        );
      })}

    </div>
  )
}

export default ItemList