import React, {useState,useContext} from 'react'
import {useParams} from 'react-router-dom'
import StoreContext from '../StoreContext'
import NavBar from '../components/NavBar'
import '../styles/productpage.css'
export default function ProductPage() {
    const item = useContext(StoreContext)
    const id = useParams()
    const product = item.getProducts.filter(item=> item.title == id.id)
    const [amount,setAmount] = useState(1)

    const addToCart = (e)=>{
      const saveClickItem = {...product[0],amount}
   
    const exist = item.cartItems.find((element) => element.id === saveClickItem.id)
    if(exist){
      item.setCartItems(item.cartItems.map((element) =>
        element.id === saveClickItem.id ? {...exist, amount: exist.amount + saveClickItem.amount}:element
        )
      )
    }else{
      item.setCartItems([...item.cartItems,saveClickItem])
    }
   
    }

    const addAmount = (e)=>{
      setAmount(previousAmount => (previousAmount + 1))
    }
  
    const removeAmount = (e)=>{
      if(amount> 1){
        setAmount(previousAmount => (previousAmount - 1))
      }
    }


    return (
      <>
      <NavBar/>
      <div className='product-page'>
          <img src={product[0].image} alt={product[0].title} />
          <div className='product-page-details'>
            <h2>{product[0].title}</h2>
            <p>{product[0].description}</p>
            <h4>{product[0].rating.rate}<span className="material-symbols-outlined star">grade</span> <span className='count'>({product[0].rating.count})</span> </h4>
            <h3>{product[0].price}$</h3>
            <div className="product-page-amount">
              <button onClick={addAmount} className='product-page-addbtn'><span className="material-symbols-outlined add">add</span></button>
              <input type="number" value={amount} className='product-page-amount-input' readOnly/>
              <button onClick={removeAmount} className='product-page-removebtn'><span className="material-symbols-outlined remove">remove</span></button>
            </div>
            <button onClick={addToCart} className='product-page-buybtn'>BUY</button>
          </div>
      </div>
    </>
  )
}

