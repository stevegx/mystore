import React from 'react'
import NavBar from '../components/NavBar'
export default function MainPage({products,setProducts}) {
  return (
    <>
    <NavBar 
    products={products}
    />
    </>
    
  )
}
