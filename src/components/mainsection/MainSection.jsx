import React, {lazy, Suspense} from 'react'
import ProductList from './ProductList'
import '../../styles/mainsection.css'

export default function MainSection() {
  return (
    <Suspense>
    <div className='main-section-list'>
        <ProductList/>
    </div>
    </Suspense>
  )
}
