import React, {useState , useContext} from 'react'
import '../../styles/productcard.css'
import StoreContext from '../../StoreContext'
import { useNavigate } from "react-router-dom"
export default function ProductCard({product}) {
  const navigate = useNavigate()
  const item = useContext(StoreContext)
  const [amount,setAmount] = useState(1) 

  const addAmount = (e)=>{
    setAmount(previousAmount => (previousAmount + 1))
  }

  const removeAmount = (e)=>{
    if(amount> 1){
      setAmount(previousAmount => (previousAmount - 1))
    }
  }
 
const addToFavorite = (e)=>{
  const saveClickItem = {...product}
  const exist = item.favoriteItems.find((element) => element.id === saveClickItem.id)
  if(exist){
    item.setFavoriteItems(item.favoriteItems.filter((element)=> element.id !== saveClickItem.id))
  }else{
    item.setFavoriteItems([...item.favoriteItems,product])
  }
}

  const addToCart = (e)=>{
    const saveClickItem = {...product,amount}
 
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

  const handleClick=(e)=>{
    navigate(`/${product.title}`)
}
  return (
    <div className='product-card-container'>
        <button onClick={addToFavorite} className='product-card-favorite '><span className="material-symbols-outlined">favorite</span></button>
        <img onClick={handleClick} src={product.image} alt="its a shoe" className='product-card-image'/>
        <h1 onClick={handleClick} className='product-card-title'>{product.title.split(" ").splice(0,5).join(" ")}</h1>         
          <h4 onClick={handleClick} className='product-card-rating'>{product.rating.rate} <span className="material-symbols-outlined star">grade</span><span className='count'>({product.rating.count})</span></h4>
        <h3 onClick={handleClick} className='product-card-price'>{product.price}$</h3>
        <div className="product-card-amount">
            <button onClick={addAmount} className='product-card-addbtn'><span className="material-symbols-outlined add">add</span></button>
            <input type="number" value={amount} className='product-card-amount-input' readOnly/>
            <button onClick={removeAmount} className='product-card-removebtn'><span className="material-symbols-outlined remove">remove</span></button>
        </div>
          <button onClick={addToCart}  className='product-card-addbtn-cart'>ADD TO CART</button>
    </div>
  )
}
