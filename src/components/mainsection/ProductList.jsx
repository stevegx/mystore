import React, {useContext} from 'react'
import ProductCard from './ProductCard'
import StoreContext from '../../StoreContext'

export default function ProductList() {

    const item = useContext(StoreContext)
    const product = item.products
    console.log(product);
  return (
         product.map(element =>{
        return (
                 <ProductCard
                 key = {element.id}
                 product = {element}/>
        )
    })
  )

}
