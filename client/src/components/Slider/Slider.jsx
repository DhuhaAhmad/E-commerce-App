import React, { useState } from 'react'
import './Slider.scss'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
export const Slider = () => {

    const [currentSlide,setCurrentSlide] = useState(0)
    const imgData = [
        "https://i.pinimg.com/564x/21/b8/a8/21b8a8d5b88152c85bd7bf5d86d57a89.jpg",
        "https://i.pinimg.com/564x/ab/8b/c2/ab8bc2869213f593d27b4b6bbfc6bbd1.jpg",
        "https://i.pinimg.com/564x/57/9c/e7/579ce7945f204bda943d1870a79c17b1.jpg"
    ]


    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0? 2 : prev => prev -1 )
        // ************************************* currentSlide-1 **

    }

    const nextSlide = () =>{
        setCurrentSlide(currentSlide === 2?0: prev => prev + 1)

    }
  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={imgData[0]} alt="" />
            <img src={imgData[1]} alt="" />
            <img src={imgData[2]} alt="" />
        </div>

        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <NavigateBeforeIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <NavigateNextIcon/>
            </div>
        </div>
        </div>
  )
}
