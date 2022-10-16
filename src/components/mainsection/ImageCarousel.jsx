import React, {useEffect,useState,useContext} from 'react'
import { Next } from 'react-bootstrap/esm/PageItem'
import StoreContext from '../../StoreContext'
import '../../styles/imagecarousel.css'
export default function ImageCarousel() {

    const item = useContext(StoreContext)
    const Images = item.getProducts.map(image => {return image.image})
    const [imageIndex,setImageIndex] = useState(0)
    

    const previousImage = (e)=>{
        if(imageIndex>0){
            setImageIndex(imageIndex - 1)
        }else if(imageIndex<=0){
            setImageIndex(Images.length)
        }
    }

   
 
    const nextImage = (e)=>{
        if(imageIndex<Images.length){
            setImageIndex(imageIndex + 1)
        }else if(imageIndex==Images.length){
            setImageIndex(0)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
         if(imageIndex<Images.length){
            setImageIndex(imageIndex+1)
         }else if(imageIndex>=Images.length){
            setImageIndex(0)
         }
            
    
        }, 5000);
        return () => clearInterval(interval);
      }, [imageIndex,Images]);

    
  return (
    <div className='imagecarousel-container'>
   <button className='imagecarousel-previous' onClick={previousImage}><span className="material-symbols-outlined">arrow_back</span></button>
   <img src={Images[imageIndex]} alt="" className='imagecarousel-image' />
   <button className='imagecarousel-next' onClick={nextImage}><span className="material-symbols-outlined">arrow_forward</span></button>
    </div>
  )
}
