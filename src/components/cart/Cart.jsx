import React, {useState, useRef} from 'react'
import CartList from '../cart/CartList'
import '../../styles/cart.css'
import { useEffect } from 'react'
export default function () {

  const [isOpen,setIsOpen] = useState(false)
  const cartRef = useRef()
  const menuRef = useRef()
  useEffect(()=>{
    const closeDropdown = e =>{
      if(e.path[1] !== cartRef.current && e.path[0] !== menuRef.current)
      setIsOpen(false)
    }
    document.body.addEventListener('click', closeDropdown)
    return ()=> document.body.removeEventListener('click', closeDropdown)
  },[])
 
  return (
    <>
    <button ref={cartRef} onClick={()=>{setIsOpen(!isOpen)}} className='navbar-menu-buttons'><span className="material-symbols-outlined">shopping_cart</span></button>
    <div ref={menuRef}  className={'navbar-cart-menu hide'+ (isOpen?'hide':'')}>
      <h1>Your Cart</h1>
        <button onClick={()=>{setIsOpen(!isOpen)}} ><span className="material-symbols-outlined" >close</span></button>
        <CartList/>
    </div>
    </>
    
  )
}
