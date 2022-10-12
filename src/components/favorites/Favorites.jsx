import React from 'react'
import '../../styles/favorites.css'
import FavoritesList from './FavoritesList.jsx'

export default function Favorites() {
    const toggleMenu = (e)=>{
        e.nativeEvent.path[2].children[3].classList.toggle('hide')
    }

    const toggleFavorites = (e)=>{
        e.nativeEvent.path[2].classList.toggle('hide')
    }
  return (
    <>
        <button onClick={toggleMenu}><span className="material-symbols-outlined">favorite</span></button>
        <div className='navbar-favorites-menu hide'>
            <h1>Favorites</h1>
            <button onClick={toggleFavorites}><span className="material-symbols-outlined">close</span></button>
            <FavoritesList/>
        </div>
    </>
  )
}
