import React, {useContext} from 'react'
import FavoritesItems from './FavoritesItems.jsx'
import StoreContext from '../../StoreContext'

export default function FavoritesList() {
    const item = useContext(StoreContext)
  return (
    <div>
       {item.favoriteItems.map(element =>{
        return(
            <FavoritesItems
            key = {element.id}
            favoriteItems = {element}
            />
        )
      })
    }
    </div>
  )
}
