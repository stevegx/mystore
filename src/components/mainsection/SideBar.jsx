import React, { useState , useContext, useEffect,useRef} from 'react'
import '../../styles/sidebar.css'
import StoreContext from '../../StoreContext'
import DataList from './DataList.jsx'
export default function SideBar() {
    
    const item = useContext(StoreContext)
    const [min,setMin] = useState(0)
    const [max,setMax] = useState(1100)
    const [priceValue,setPriceValue] = useState(0)
    const [categoryValue,setCategoryValue] = useState([
        {id:"men's clothing" , isChecked:false},
        {id:"jewelery" , isChecked:false},
        {id:"electronics" , isChecked:false},
        {id:"women's clothing" , isChecked:false},])
    const [sortValue,setSortValue] = useState("")

const applyFilters = ()=>{
    let filteredArray = item.getProducts

    const categoryChecked = categoryValue.filter((item)=>item.isChecked).map((item)=>item.id.toLowerCase())
    let categorizedArray = []
    
        for(let index=0;index<categoryChecked.length;index++){
            let value= item.getProducts.filter(product =>product.category==categoryChecked[index])
            categorizedArray=[...categorizedArray,value]
        }
    
    if(categorizedArray.length>0){
        filteredArray = categorizedArray.flat(1)
    }

    if(priceValue){
        filteredArray = filteredArray.filter(product => product.price > priceValue)
    }

    switch (sortValue) {
        case "popularity":
        filteredArray = filteredArray.sort((a,b)=> b.rating.count - a.rating.count)
        break;
        
        case "pricelow":
        filteredArray = filteredArray.sort((a,b)=> a.price - b.price)
        break;    
        
        case "pricehigh":
        filteredArray = filteredArray.sort((a,b)=> b.price-a.price )
        break;
    
        case "ratinglow":
        filteredArray = filteredArray.sort((a,b)=> a.rating.rate - b.rating.rate)
        break;
        
        case "ratinghigh":
        filteredArray = filteredArray.sort((a,b)=> b.rating.rate -a.rating.rate )
        break;
        
        
        default:
        filteredArray = filteredArray.sort((a,b)=> b.rating.count - a.rating.count)
        break;
    }

    item.setProducts(filteredArray)
}
  
useEffect(()=>{
    applyFilters()
},[sortValue,categoryValue,priceValue])

const handleCategory = (e)=>{
    const categoryList = categoryValue
    const checkedCategory = categoryList.map((item)=> item.id == e.target.id?{...item,isChecked:!item.isChecked}:item)
    setCategoryValue(checkedCategory)
}
 
const handleFilterMenu = (e)=>{
    e.nativeEvent.path[3].childNodes[1].classList.toggle('show')
    e.nativeEvent.path[2].children[1].classList.toggle('show')
}

  return (
    
    <div className='sidebar'>
        <button onClick={handleFilterMenu} className='sidebar-toggleFilters'><span className="material-symbols-outlined">menu</span></button>
    <div className='sidebar-container show'>
        <h3 className='sidebar-title'>Filters</h3>
        <DataList setSortValue={setSortValue}/>
        <form className="sidebar-category">
            <h3>Category <span className='product-array-length'>({item.products.length})</span></h3>
            <div className='sidebar-category-option'>
                <label htmlFor="mensclothing">Men's clothing</label>
                <input type="checkbox" className='mensclothing checkbox'  id="men's clothing" onChange={handleCategory} />
            </div>
            <div className='sidebar-category-option'>
                <label htmlFor="Jewelery">Jewelery</label>
                <input type="checkbox" className='Jewelery checkbox' id='jewelery' onChange={handleCategory} />
            </div>
            <div className='sidebar-category-option'>
                <label htmlFor="Electronics">Electronics</label>
                <input type="checkbox" className='Electronics checkbox' id='electronics' onChange={handleCategory}/>
            </div>
           <div className='sidebar-category-option'>
                <label htmlFor="womensclothing">Women's clothing</label>
                <input type="checkbox" className='womensclothing checkbox' id="women's clothing" onChange={handleCategory}/>
           </div>
        </form>
       
        <h3 className='sidebar-price'>Price {'>'} {priceValue}$ <span className='product-array-length'>({item.products.length})</span></h3>
        <input type="range" className='sidebar-price' min={min} max={max} step={10} value={priceValue} onChange={(e)=>setPriceValue(e.target.value)}/>
      
    </div>
    </div>
  )
}
