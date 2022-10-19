import React,{useState,useContext,useEffect} from 'react'

import '../../styles/datalist.css'
export default function DataList({setSortValue}) {


  return (
        <div className="datalist-options">
            <label htmlFor="option">Sort by:</label>
            <select onChange={(e)=>{setSortValue(e.target.value)}} id="option">
                <option value="popularity">Popularity</option>
                <option value="pricelow">Price low to high</option>
                <option value="pricehigh">Price high to low</option>
                <option value="ratinglow">Rating low to high</option>
                <option value="ratinghigh">Rating high to low</option>
            </select>
        </div>
  )
}
