import React, {lazy, Suspense} from 'react'
import ProductList from './ProductList'
import '../../styles/mainsection.css'
import SideBar from './SideBar.jsx'
import ImageCarousel from './ImageCarousel.jsx'
export default function MainSection() {


  return (
    <>
   <ImageCarousel/>
      <div className="main-section-head">
        <SideBar/>
        <Suspense>
    <div className='main-section-list'>
    <ProductList/>
    </div>
    </Suspense>
      </div>
    
   
  
    </>
  )
}
