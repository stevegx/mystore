import React from 'react'
import '../../styles/productcard.css'
export default function ProductCard({product}) {
  return (
    <div className='product-card-container'>
        <img src={product.image} alt="its a shoe" className='product-card-image'/>
        <h1 className='product-card-title'>{product.title}</h1>
        <h4 className='product-card-rating'>{product.rating.rate} <span className="material-symbols-outlined star">grade</span></h4>
        <h3 className='product-card-price'>{product.price}$</h3>
        <div className="product-card-amount">
            <button  className='product-card-addbtn'><span className="material-symbols-outlined add">add</span></button>
            <input type="number" value={1532} className='product-card-amount-input' readOnly/>
            <button className='product-card-removebtn'><span className="material-symbols-outlined remove">remove</span></button>
        </div>
        <button  className='product-card-addbtn-cart'>ADD TO CART</button>
    </div>
  )
}
