import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
const StoreContext = createContext()

export function StoreProvider({children}){

    const [products,setProducts] = useState([])
    const [getProducts,setGetProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])

    useEffect(() => {
      const fetchProducts = async () =>{
        const res = await
        axios.get("https://fakestoreapi.com/products")
        setProducts(res.data)
        setGetProducts(res.data)
      }
      fetchProducts()
    },[])




    return(
        <StoreContext.Provider value={{products,setProducts,cartItems,setCartItems,favoriteItems, setFavoriteItems}}>
            {children} 
        </StoreContext.Provider>
    )
}

export default StoreContext