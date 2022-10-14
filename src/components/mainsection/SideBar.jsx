import React from 'react'
import '../../styles/sidebar.css'
export default function SideBar() {
  return (
    <div className='sidebar-container'>
        <h3 className='sidebar-title'>Filters</h3>

        <h3 className='sidebar-name'>Name:</h3>
        <input type="button" />

        <form className="sidebar-category">
            <h3>Category</h3>
            <div className='sidebar-category-option'>
                <label htmlFor="mensclothing">Men's clothing</label>
                <input type="checkbox" className='mensclothing checkbox'/>
            </div>
            <div className='sidebar-category-option'>
                <label htmlFor="Jewelery">Jewelery</label>
                <input type="checkbox" className='Jewelery checkbox'/>
            </div>
            <div className='sidebar-category-option'>
                <label htmlFor="Electronics">Electronics</label>
                <input type="checkbox" className='Electronics checkbox'/>
            </div>
           <div className='sidebar-category-option'>
                <label htmlFor="womensclothing">Women's clothing</label>
                <input type="checkbox" className='womensclothing checkbox'/>
           </div>
        </form>
       
        <h3 className='sidebar-price'>Price:</h3>
        <input type="range" className='sidebar-price' min="0" max="1100"/>
      
      <form className='sidebar-rating'>
        <h3>Rating:</h3>
        <div className='sidebar-category-option'> 
            <label htmlFor="sidebar-rating1">1<span className="material-symbols-outlined">star</span></label>
            <input type="checkbox" className='sidebar-rating1 checkbox'/>
        </div>
        <div className='sidebar-category-option'> 
            <label htmlFor="sidebar-rating2">2<span className="material-symbols-outlined">star</span></label>
            <input type="checkbox" className='sidebar-rating2 checkbox'/>
        </div>
        <div className='sidebar-category-option'>
            <label htmlFor="sidebar-rating3">3<span className="material-symbols-outlined">star</span></label>
            <input type="checkbox" className='sidebar-rating3 checkbox'/>
        </div>
        <div className='sidebar-category-option'>
            <label htmlFor="sidebar-rating4">4<span className="material-symbols-outlined">star</span></label>
            <input type="checkbox" className='sidebar-rating4 checkbox'/>
        </div>
        <div className='sidebar-category-option'>
            <label htmlFor="sidebar-rating5">5<span className="material-symbols-outlined">star</span></label>
            <input type="checkbox" className='sidebar-rating5 checkbox'/>
        </div>
       
    


      </form>
    
    </div>
  )
}
