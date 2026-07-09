import { useParams } from "react-router-dom"
import getProducts from "../js/protuct.js"
import { useState } from "react"
import '../css/productinfo.css'
import {FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa'
import {HashLink} from 'react-router-hash-link'
import { useContext } from "react"
import { cartContext, searchContext, showcartContext } from "./contextapi.jsx"
import { countContext } from "./contextapi.jsx"
import { Link } from "react-router-dom"
import {FaAngleLeft} from 'react-icons/fa'
import { toast } from "react-toastify"



function ProductInfo( ){
    const {id}=useParams()
    const product =getProducts()
    const selectedProduct=product.filter((p)=>p.id==id)
    const relatedProduct=product.filter((p)=>p.id!==id)
    const [cartno,setCartno]=useState(0)
    const {count,setCount}=useContext(countContext)
    const {showCart,setShowCart}=useContext(showcartContext)
     if(count<1){
        setCount(1)
    }
    const [current,setCurrent]=useState(0)
    const next=(data)=>{
        setCurrent((current+1)%data.length)
    }
    const prev=(data)=>{
        setCurrent((current-1+data.length)%data.length)
    }
    const {cartitems,setcartitems}=useContext(cartContext)
    const {searchValue,setSearchValue}=useContext(searchContext)
    console.log(searchValue)
    const searchProducts=product.filter((r)=>r.name.toLowerCase().includes(searchValue.toLowerCase()))

    return(
        <div id="select" className="select">
            <Link to={'/'} className="back-btn"> <FaAngleLeft/>Back</Link>
        <div className="selected-box">
        {
        !searchValue && selectedProduct.map((p)=>(
                <div key={p.id} className="select-product-box">
                    <div className="p-image-box">
                    <img src={p.image[current]} alt="" className="selected-image" />
                    </div>
                     <span className="left-angle" onClick={()=>prev(p.image)}><FaAngleDoubleLeft/></span>
                     <span className="right-angle" onClick={()=>next(p.image)}><FaAngleDoubleRight/></span>
                     <h4>{p.name}</h4>
                     <p>USD ${p.price}</p>
                     <p>{p.description}</p>
                     <div className="count-box"><button onClick={()=>setCount(count+1)} className="count-btn">+</button><span>{count}</span><button onClick={()=>setCount(count-1)} className="count-btn">-</button></div>
        <button className="addcart-btn" onClick={()=>{setCartno(cartno+1),toast.success('Added to cart successfully !'),setcartitems([...cartitems,{id:p.id,
        name:p.name,price:p.price,description:p.description,image:p.image[0],count:count}]),console.log(cartitems)}}>
        Add to Cart</button>
                     <button className="buy-btn" onClick={()=>setShowCart(true)}>Place Order</button>
                </div>
            ))
        }
        </div>
            <div className="related-box" >

        {
           (searchValue?searchProducts:relatedProduct).map((p)=>(
                <HashLink smooth to={`/products/${p.id}#select`} key={p.id} className="related-image-box" onClick={()=>{setCount(1),setSearchValue('')}}>
                <img src={p.image[0]} alt="" className="r-image" />
                <h3>{p.name}</h3>
                <p>USD${p.price}</p>
                </HashLink>
         ))
        }
            </div>
          <span className="cart-icon" onClick={()=>setShowCart(true)}>🛒{cartno}</span>
        </div>
    )
}
export default ProductInfo