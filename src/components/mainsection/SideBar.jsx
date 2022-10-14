import React, { useState , useContext, useEffect} from 'react'
import '../../styles/sidebar.css'
import StoreContext from '../../StoreContext'
export default function SideBar() {
    
    const item = useContext(StoreContext)
    const [min,setMin] = useState(0)
    const [max,setMax] = useState(1100)
    const [priceValue,setPriceValue] = useState(0)
    const [testArray,setTestArray] = useState([])
    const [category,setCategory] = useState([{index:0,id:"men's clothing" , isChecked:false},
    {index:1,id:"jewelery" , isChecked:false},
    {index:2,id:"electronics" , isChecked:false},
    {index:3,id:"women's clothing" , isChecked:false},
  ])

    useEffect(()=>{
        let categoryArray = category.filter(obj => obj.isChecked == true)
let myArray = []
   for(let i=0;i<categoryArray.length;i++){
   myArray[i]=item.products.filter(product => product.category == categoryArray[i].id)
  }    
  console.log(myArray);
  setTestArray(...myArray)

        let newArray = item.products.filter(product => product.price > priceValue)
        item.setProducts(newArray)
 
    },[priceValue,category])
    
  const handleCheck = (e)=>{
   
    setCategory(category.map(obj =>{
        if(obj.index == e.target.value){
            return {...obj, isChecked:!obj.isChecked}
        }else{
                return obj
            }
    }))
//  map to category k an einai checked tote pane sto products k ftiakse ena kainourgio array me filter 
    
    }

  
  return (
    <div className='sidebar-container'>
        <h3 className='sidebar-title'>Filters</h3>

        <form className="sidebar-category">
            <h3>Category <span className='product-array-length'>({item.products.length})</span></h3>
            <div className='sidebar-category-option'>
                <label htmlFor="mensclothing">Men's clothing</label>
                <input type="checkbox" className='mensclothing checkbox' id='mensclothing' onChange={handleCheck} value={category[0].index}/>
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
      
      <form className='sidebar-rating'>
        <h3>Rating <span className='product-array-length'>({item.products.length})</span></h3>
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
