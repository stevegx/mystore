import React from 'react'
import CartList from '../cart/CartList'
import '../../styles/cart.css'
export default function () {
    const toggleMenu = (e)=>{
        e.nativeEvent.path[2].children[7].classList.toggle('hide')
        // console.log(e.nativeEvent.path[2].children);
    }

    const toggleCart = (e)=>{
        e.nativeEvent.path[2].classList.toggle('hide')
    }
  return (
    <>
    <button onClick={toggleMenu} className='navbar-menu-buttons'><span className="material-symbols-outlined">shopping_cart</span></button>
    <div className='navbar-cart-menu hide'>
      <h1>Your Cart</h1>
        <button onClick={toggleCart} ><span className="material-symbols-outlined">close</span></button>
        <CartList/>
    </div>
    </>
    
  )
}
