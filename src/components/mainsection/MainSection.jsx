import React, {lazy, Suspense} from 'react'
import ProductList from './ProductList'
import '../../styles/mainsection.css'
import SideBar from './SideBar.jsx'

export default function MainSection() {


  return (
    <>
    <div className='main-section-wrapper'>
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
