import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function Cart() {

    const data = [
        {
            id:1,
            img:"https://img.ltwebstatic.com/images3_pi/2023/05/12/1683880981004709e19faf8eb29e8c6715249ca31d_thumbnail_600x.webp",
            img2:"https://img.ltwebstatic.com/images3_pi/2023/05/12/16838809841d19df5daffeb5864a2bb44e0048b9e3_thumbnail_600x.webp",
            title:"t1",
            description:"bblla blla blla",
            isNew: true,
            oldPrice:15,
            price:10
        },
        {
            id:2,
            img:"https://img.ltwebstatic.com/images3_pi/2023/05/12/1683880981004709e19faf8eb29e8c6715249ca31d_thumbnail_600x.webp",
            img2:"https://img.ltwebstatic.com/images3_pi/2023/05/12/16838809841d19df5daffeb5864a2bb44e0048b9e3_thumbnail_600x.webp",
            title:"t1",
            description:"bblla blla blla",
            isNew: true,
            oldPrice:15,
            price:10
        }
    ]
  return (
    <div className='cart'>

        <h1>Products in your cart </h1>

        {
            data?.map(item=>(
                <div className="item" key={item.key}>

                <img src={item.img} alt="" />

                <div className="details">
                    <h1>{item.title}</h1>
                    <div>{item.description?.substring(0,50)}</div>
                    <div className="price">1 X ${item.price}</div>
                </div>

                <DeleteOutlineIcon className='delete-icon'/>
                </div>
            ))
        }

        <div className="total">
            <span>SUBTOTAL</span>
            <span>$555</span>
        </div>

        <button>Checkout</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart