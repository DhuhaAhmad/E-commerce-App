import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';


export const Product = () => {

  const [selectedImg,setSelectedImg]=useState(0)
  const [quantity,setQuantity]=useState(1)
  const images=[
  "https://img.ltwebstatic.com/images3_pi/2023/05/12/1683880981004709e19faf8eb29e8c6715249ca31d_thumbnail_600x.webp",
    "https://img.ltwebstatic.com/images3_pi/2023/05/12/16838809841d19df5daffeb5864a2bb44e0048b9e3_thumbnail_600x.webp"
  ]
  return (
    <div className='product'>
      <div className="left">

    <div className="images">
      <img src={images[0]} alt="" onMouseOver={e=>{setSelectedImg(0)}}/>
      <img src={images[1]} alt="" onMouseOver={e=>{setSelectedImg(1)}}/>
    </div>
    <div className="mainImg">
      <img src={images[selectedImg]}  alt="" />
    </div>
      </div>
      <div className="right">

<h1>Title</h1>
<span className='price'>99$</span>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</p>

<div className="quantity">
  <button
  onClick={e=>{setQuantity(prev => prev === 1? 1: prev-1)}}
  >-</button>
{quantity}
  <button
  onClick={e=>{setQuantity(prev => prev+1)}}
  >+</button>
</div>

<button className='add'>
  <AddShoppingCartIcon/> Add to cart
</button>

<div className="link">
  <div className="item"> <FavoriteBorderIcon/> Add to wish list</div>
  <div className="item"> <BalanceIcon/> Add to compare</div>
</div>



      </div>
    </div>
  )
}
