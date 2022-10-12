import React, {useContext} from 'react'
import '../../styles/cartitems.css'
import StoreContext from '../../StoreContext'

export default function CartItems(cartItems) {
     
  const item = useContext(StoreContext)
  const price = cartItems.cartItems.price * cartItems.cartItems.amount

  const deleteItems = (e)=>{
    item.setCartItems(item.cartItems.filter((element)=> element.id !== cartItems.cartItems.id))
  }

  return (
    <>
     <div className='cart-products-container'>
        <img src={cartItems.cartItems.image} alt={cartItems.cartItems.description} className='cart-products-image'/>
        <h2 className='cart-products-title'>{cartItems.cartItems.title}</h2>
        <h3 className='cart-products-amount'>x{cartItems.cartItems.amount}</h3>
        <h3 className='cart-products-price'>{price.toFixed(2)}$</h3>
        <input className='cart-products-remove' type="submit" onClick={deleteItems} value={'-'} />
    </div>
    
    </>
   
  )
}
