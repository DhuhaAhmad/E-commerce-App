import React from 'react'
import './FeaturedProducts.scss'
import { Card } from '../Card/Card'
export const FeaturedProducts = ({type}) => {

    const data = [
        {
            id:1,
            img:"https://img.ltwebstatic.com/images3_pi/2023/05/12/1683880981004709e19faf8eb29e8c6715249ca31d_thumbnail_600x.webp",
            img2:"https://img.ltwebstatic.com/images3_pi/2023/05/12/16838809841d19df5daffeb5864a2bb44e0048b9e3_thumbnail_600x.webp",
            title:"t1",
            isNew: true,
            oldPrice:15,
            price:10
        },
        {
            id:2,
            img:"https://img.ltwebstatic.com/images3_pi/2022/11/19/16688278857090cff97c194b1d968754388793e22f_thumbnail_600x.webp",
            img2:"https://img.ltwebstatic.com/images3_pi/2022/11/19/16688278883ee172d5ea2fc9edb0bf9f92fb4b14d8_thumbnail_600x.webp",
            title:"t2",
            isNew: true,
            oldPrice:18,
            price:12
        },
        {
            id:3,
            img:"https://img.ltwebstatic.com/images3_pi/2022/12/29/16722777330cece2eb76b4e18ac200b1ea8f0aee36_thumbnail_600x.webp",
            img2:"https://img.ltwebstatic.com/images3_pi/2022/12/29/1672277735f1d0317b711630f639679d6b7d358a64_thumbnail_600x.webp",
            title:"t3",
            isNew: true,
            oldPrice:20,
            price:15
        },
        {
            id:4,
            img:"https://img.ltwebstatic.com/images3_pi/2023/01/09/16732272360f735e36e1c4572af8ad9deb0f39f981_thumbnail_600x.webp",
            img2:"https://img.ltwebstatic.com/images3_pi/2023/01/09/1673227242bf68e8c956121187cbad9ebaab7141ad_thumbnail_600x.webp",
            title:"t4",
            isNew: true,
            oldPrice:17,
            price:8
        },

    ]
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

        </div>
        <div className="bottom">
        {
            data.map(item=>{
                return <Card item={item} key={item.id}/>
            })
        }

        </div>
        </div>
  )
}
