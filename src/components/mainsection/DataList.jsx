import React,{useState,useContext,useEffect} from 'react'
import StoreContext from '../../StoreContext'
import '../../styles/datalist.css'
export default function DataList({}) {

    const item = useContext(StoreContext)
    const [sortOption,setSortOption] = useState("")
    const [sortArray,setSortArray] = useState([])


    useEffect(()=>{
        //checkareto kai me if thn prwth fora douleuei tis upoloipes xreiazetai kapoio refresh


        switch (sortOption) {
            case "popularity":
                setSortArray(item.getProducts.sort((a,b)=> b.rating.count - a.rating.count))
                item.setFilteredArray(sortArray)
                item.setProducts(item.filteredArray)
                break;
        
            case "pricelow":
            setSortArray(item.getProducts.sort((a,b)=> a.price - b.price))
            item.setFilteredArray(sortArray)
            item.setProducts(item.filteredArray)
                break;    
            
            case "pricehigh":
                setSortArray(item.getProducts.sort((a,b)=> b.price-a.price ))
                item.setFilteredArray(sortArray)
                item.setProducts(item.filteredArray)
                break;
            case "ratinglow":
                setSortArray(item.getProducts.sort((a,b)=> a.rating.rate - b.rating.rate))
                item.setFilteredArray(sortArray)
                item.setProducts(item.filteredArray)
                
            break;

            case "ratinghigh":
                setSortArray(item.getProducts.sort((a,b)=> b.rating.rate -a.rating.rate ))
                item.setFilteredArray(sortArray)
                item.setProducts(item.filteredArray)
                break;
                  
            
            default:
                setSortArray(item.getProducts.sort((a,b)=> b.rating.count - a.rating.count))
                item.setFilteredArray(sortArray)
                item.setProducts(item.filteredArray)
                break;
        }

    },[sortOption,sortArray])
    
   

    const handleOption = (e)=>{
    setSortOption(e.target.value)
    }
  return (
        <div className="datalist-options">
            <label htmlFor="option">Sort by:</label>
            <select onChange={handleOption} id="option">
                <option value="popularity">Popularity</option>
                <option value="pricelow">Price low to high</option>
                <option value="pricehigh">Price high to low</option>
                <option value="ratinglow">Rating low to high</option>
                <option value="ratinghigh">Rating high to low</option>
            </select>
        </div>
  )
}
