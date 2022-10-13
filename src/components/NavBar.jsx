import React, {useState,useContext} from 'react'
import '../styles/navbar.css'
import Cart from './cart/Cart.jsx'
import Favorites from './favorites/Favorites.jsx'
import StoreContext from '../StoreContext.jsx'
export default function NavBar() {
    const item = useContext(StoreContext)
    const [searchRequest,setSearchRequest] = useState('')

    const toggleUserMenu = (e)=>{
    e.nativeEvent.path[2].children[1].classList.toggle('hide')
    }

    const FilterSearch = (e)=> {
        e.preventDefault()
        setSearchRequest(e.target.value)
        console.log(searchRequest.length);
       if(searchRequest.length > 0){
        let newArray = item.getProducts.filter(item => item.title.toLowerCase().includes(searchRequest))
        item.setProducts(newArray)
       }else{
        item.setProducts(item.products)
       }
//  need fix there is a bug with the search
     
        }

  return (
    <nav className='navbar'>
       
        <h2 className='navbar-Logo'><span className='tone'>My</span>Store</h2>
        
        <div className="navbar-Search">
            <span className="material-symbols-outlined">search</span>
            <input type="text" value={searchRequest} onChange={FilterSearch}/>
        </div>

        <div className="navbar-menu">
            
            <button onClick={toggleUserMenu} className='navbar-menu-buttons'><span className="material-symbols-outlined">person</span></button>
            
            <div className='navbar-user-menu hide'>
                <h3><span className="material-symbols-outlined">settings</span>Settings</h3>
                <h3><span className="material-symbols-outlined">logout</span>Logout</h3>
            </div>

            <div className='navbar-menu-favorite-badge'><h4>{item.favoriteItems.length}</h4></div> 
            <Favorites/>
            <div className='navbar-menu-cart-badge'><h4>{item.cartItems.length}</h4></div>
            <Cart/>

        </div> 
    </nav>
  )
}
