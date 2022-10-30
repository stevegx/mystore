import React from 'react'
import { useState , useRef , useEffect } from 'react'
import '../../styles/favorites.css'
import FavoritesList from './FavoritesList.jsx'

export default function Favorites() {
    const [isOpen,setIsOpen] = useState(false)
    const favRef = useRef()
    const menuRef = useRef()
    useEffect(()=>{
        const closeDropdown = e =>{
          if(e.path[1] !== favRef.current && e.path[0] !== menuRef.current)
          setIsOpen(false)
        }
        document.body.addEventListener('click', closeDropdown)
        return ()=> document.body.removeEventListener('click', closeDropdown)
      },[])

  return (
    <>
        <button ref={favRef} onClick={()=>{setIsOpen(!isOpen)}} ><span className="material-symbols-outlined">favorite</span></button>
        <div ref={menuRef} className={'navbar-favorites-menu hide'+ (isOpen?'hide':'')}>
            <h1>Favorites</h1>
            <button onClick={()=>{setIsOpen(!isOpen)}} ><span className="material-symbols-outlined">close</span></button>
            <FavoritesList/>
        </div>
    </>
  )
}
