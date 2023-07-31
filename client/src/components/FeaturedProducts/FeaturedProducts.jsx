import React, { useEffect, useState } from 'react'
import './FeaturedProducts.scss'
import { Card } from '../Card/Card'
import axios from "axios"
export const FeaturedProducts = ({type}) => {

  

    const [products,setProducts] = useState([])

    useEffect(()=>{

        const fetchData = async ()=>{
            try {
                // populate=*" IS TO FETCH ALL DATA FROM API INCLUDING MEDIA 
                const res = await axios.get(
                    import.meta.env.VITE_API_URL+"/products?populate=*", {
                    headers:{ Authorization: "bearer "+ import.meta.env.VITE_API_KEY }
                })

               
                setProducts(res.data.data)
                 console.log("data =>",products)
            } catch (error) {
              console.log("error =>",error)  
            }
        }

        fetchData()
    },[])
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
            products.map(item=>{
                return <Card item={item} key={item.id}/>
            })
        }

        </div>
        </div>
  )
}
