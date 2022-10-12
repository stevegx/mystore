import React, {useContext}  from 'react'
import { useEffect } from 'react'
import StoreContext from '../../StoreContext'
import '../../styles/favoriteitems.css'
export default function FavoritesItems(favoriteItems) {
 
    const item = useContext(StoreContext)

 

  const deleteItems = (e)=>{
    item.setFavoriteItems(item.favoriteItems.filter((element)=> element.id !== favoriteItems.favoriteItems.id))
  }

  return (
    <>
     <div className='favorite-products-container'>
        <img src={favoriteItems.favoriteItems.image} alt={favoriteItems.favoriteItems.description} className='favorite-products-image'/>
        <h2 className='favorite-products-title'>{favoriteItems.favoriteItems.title}</h2>
        <input className='favorite-products-remove' type="submit" onClick={deleteItems} value={'-'} />
    </div>
    
    </>
  )
}
