import React from 'react'

export default function CartItems() {
      
//   const Price = cartProduct.price * cartProduct.quantity
 
  const deleteItems = (e)=>{
   
    // setCartItems(cartItems.filter((element)=> element.id !== cartProduct.id))
  }

  return (
    <div className='cartitems-container'>
        {/* <img src={cartProduct.image} alt="" className='cart-products-image'/> */}
        <h2 className='cart-products-title'>cartProduct.title</h2>
        <h3 className='cart-products-amount'>cartProduct.quantity</h3>
        <h3 className='cart-products-price'>Price.toFixed(2)$</h3>
        <button onClick={deleteItems} className='cart-products-removebtn'><span className="material-symbols-outlined remove">remove</span></button>
    </div>
  )
}
