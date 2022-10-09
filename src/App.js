import './App.css';
import MainPage from './pages/MainPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {

  const [products,setProducts] = useState([])
  const [getProducts,setGetProducts] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const fetchProducts = async () =>{
      const res = await
      axios.get("https://fakestoreapi.com/products")
      setProducts(res.data)
      setGetProducts(res.data)
    }
    fetchProducts()
  },[])

  return (
    <>
    <MainPage
     products = {products} 
     setProducts = {setProducts}
     />

    </>
  );
}

export default App;
