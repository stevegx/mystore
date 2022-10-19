import React, { useState , useContext, useEffect,useRef} from 'react'
import '../../styles/sidebar.css'
import StoreContext from '../../StoreContext'
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext'
export default function SideBar() {
    
    const item = useContext(StoreContext)
    const [min,setMin] = useState(0)
    const [max,setMax] = useState(1100)
    const [priceValue,setPriceValue] = useState(0)
    const [category,setCategory] = useState([
    {index:0,id:"men's clothing" , isChecked:false},
    {index:1,id:"jewelery" , isChecked:false},
    {index:2,id:"electronics" , isChecked:false},
    {index:3,id:"women's clothing" , isChecked:false},
  ])


useEffect(()=>{
    
    let categoryFilter = []
    for (let index = 0; index < category.length; index++) {
       if(category[index].isChecked ==true){
           let value = item.filteredArray.filter(product => product.category == category[index].id)
            categoryFilter=[...categoryFilter,value]
       }
        }   

    let example = categoryFilter.flat(1)
    let newArray
   
 
    if(example.length==0)
    {
        newArray = item.products
        // item.setProducts(item.getProducts)
        newArray = item.filteredArray.filter(product => product.price > priceValue)
        item.setProducts(newArray)
    }else if(example.length!=0){
       newArray =  example.filter(product=>product.price > priceValue)
        item.setProducts(newArray)
    }
},[category,priceValue])

const handleCheck = (e)=>{
    setCategory(category.map(obj =>{

        if(obj.index == e.target.value){
            return {...obj, isChecked:!obj.isChecked}
        }else{
                return obj
            }
    }))
}
 
  
  
  return (
    <div className='sidebar-container'>
        <h3 className='sidebar-title'>Filters</h3>

        <form className="sidebar-category">
            <h3>Category <span className='product-array-length'>({item.products.length})</span></h3>
            <div className='sidebar-category-option'>
                <label htmlFor="mensclothing">Men's clothing</label>
                <input type="checkbox" className='mensclothing checkbox'  id='mensclothing' onChange={handleCheck} value={category[0].index}/>
            </div>
            <div className='sidebar-category-option'>
                <label htmlFor="Jewelery">Jewelery</label>
                <input type="checkbox" className='Jewelery checkbox' id='jewelery' onChange={handleCheck} value={category[1].index}/>
            </div>
            <div className='sidebar-category-option'>
                <label htmlFor="Electronics">Electronics</label>
                <input type="checkbox" className='Electronics checkbox' id='electronics' onChange={handleCheck} value={category[2].index}/>
            </div>
           <div className='sidebar-category-option'>
                <label htmlFor="womensclothing">Women's clothing</label>
                <input type="checkbox" className='womensclothing checkbox' id='womensclothing' onChange={handleCheck} value={category[3].index}/>
           </div>
        </form>
       
        <h3 className='sidebar-price'>Price > {priceValue}$ <span className='product-array-length'>({item.products.length})</span></h3>
        <input type="range" className='sidebar-price' min={min} max={max} step={10} value={priceValue} onChange={(e)=>setPriceValue(e.target.value)}/>
      
    
    </div>
  )
}
