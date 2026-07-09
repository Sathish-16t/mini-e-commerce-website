import '../css/hero.css'
import { useEffect, useState } from 'react'
import banner1 from '../eimages/banner1.jpeg'
import banner2 from '../eimages/banner2.jpeg'
import banner3 from '../eimages/banner3.jpeg'



function Hero() {
    return (
        <div>
        <div className='slide'>
            <div className='banner-box'>
                <img src={banner1} alt="" className='banner1' />
                <img src={banner2} alt="" className='banner1' />
                <img src={banner3} alt="" className='banner1' />
                <img src={banner1} alt="" className='banner1' />
                <img src={banner2} alt="" className='banner1' />
                <img src={banner3} alt="" className='banner1' />

            </div>
        </div>
        <div className='text-box'>
             <h3 className='fall-text'>Fall Collections</h3>
             <button className='shop-btn'><a href="#collection">Shop</a></button>
        </div>
    
    </div>
    )


}

export default Hero