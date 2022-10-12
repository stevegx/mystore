import React from 'react'
import '../styles/navbar.css'
import Cart from './cart/Cart.jsx'
import Favorites from './favorites/Favorites.jsx'
export default function NavBar() {


    const toggleUserMenu = (e)=>{
    e.nativeEvent.path[2].children[1].classList.toggle('hide')
    }

    

  return (
    <nav className='navbar'>
        <h2 className='navbar-Logo'><span className='tone'>My</span>Store</h2>
        <div className="navbar-Search">
            <span className="material-symbols-outlined">search</span>
            <input type="text" />
        </div>
        <div className="navbar-menu">
            <button onClick={toggleUserMenu} className='navbar-menu-buttons'><span className="material-symbols-outlined">person</span></button>
            <div className='navbar-user-menu hide'>
                <h3><span className="material-symbols-outlined">settings</span>Settings</h3>
                <h3><span className="material-symbols-outlined">logout</span>Logout</h3>
          </div>
            <Favorites/> 
            {/* dokimase  <div>
                          <div>red-dot</div>
                          <favorites/>
                          </div>  */}
            <Cart/>
        </div>
    </nav>
  )
}