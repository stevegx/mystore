import React, {useContext} from 'react'
import '../../styles/cartlist.css'
import CartItems from './CartItems'
import StoreContext from '../../StoreContext'


export default function CartList() {
  const item = useContext(StoreContext)

  
  return (
    <div className='cartlist'>
      {item.cartItems.map(element =>{
        return(
            <CartItems
            key = {element.id}
            cartItems = {element}
            />
        )
      })
      }
       
    </div>
  )
}
