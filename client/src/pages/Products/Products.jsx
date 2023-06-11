import React, { useState } from 'react'
import './Products.scss'
import { List } from '../../components/List/List'
import { useParams } from 'react-router-dom'
export const Products = () => {
  const categoryId = parseInt( useParams().id)
  const [maxPrice, setMaxPrice]=useState(1000)
  const [sort,setSort]=useState(null)

 
  return (
    
    <div className='products'>

      <div className="left">
<div className="filterItem">
  <h2>Product Categories</h2>

  <div className="inputItem">
    <input type="checkbox"  id="1" value={1} />
    <label htmlFor='1'>Boy</label>
  </div>
  <div className="inputItem">
    <input type="checkbox"  id="2" value={2} />
    <label htmlFor='1'>Girl</label>
  </div>
  <div className="inputItem">
    <input type="checkbox"  id="3" value={3} />
    <label htmlFor='1'>New season</label>
  </div>
</div>
<div className="filterItem">
  <h2>Filter by price</h2>

  <div className="inputItem">
    <span>0</span>
    <input type="range" min={0} max={1000}
    
    onChange={e => setMaxPrice(e.target.value)}
    />
    <span>{maxPrice}</span>
  </div>
</div>
<div className="filterItem">
  <h2>Sort by</h2>

  <div className="inputItem">
    <input type="radio" name="price" id="asc"  value="asc" 
    onChange={e=>setSort("asc")}
    />
    <label htmlFor="asc">Price (Low to high)</label>
  </div>
  <div className="inputItem">
    <input type="radio" name="price" id="desc"  value="desc" 
     onChange={e=>setSort("desc")}
    />
    <label htmlFor="desc">Price (High to Low)</label>
  </div>
</div>
      </div>

      <div className="right">
        <img src="https://i.pinimg.com/564x/f3/7c/89/f37c896b542332d872a0df0735aa72d8.jpg"
         alt="" className="categryImg" />

    <List
    categoryId={categoryId}
    maxPrice={maxPrice}
    sortBy={sort}
    />
      </div>
    </div>
  )
}
