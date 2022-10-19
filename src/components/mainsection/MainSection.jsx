import React, {lazy, Suspense,useState} from 'react'
import ProductList from './ProductList'
import '../../styles/mainsection.css'
import SideBar from './SideBar.jsx'
import ImageCarousel from './ImageCarousel.jsx'
import DataList from './DataList.jsx'
export default function MainSection() {


  return (
    <>
   <ImageCarousel/>
    <DataList/>
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
