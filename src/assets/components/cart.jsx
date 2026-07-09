import { useState } from "react"
import { useContext } from "react"
import { cartContext, showcartContext } from "./contextapi"
import { countContext } from "./contextapi.jsx"
import { Link } from "react-router-dom"
import '../css/cart.css'
import { toast } from "react-toastify"
import {FaAngleLeft} from 'react-icons/fa'

function Cart(){
    const {cartitems,setcartitems}=useContext(cartContext)
    const {showCart,setShowCart}=useContext(showcartContext)
    
    console.log(cartitems)
     const {count,setCount}=useContext(countContext)
    const total=cartitems.reduce((sum,pro)=>{
        return sum+pro.price *pro.count},0)
    return(
        <div className="cart" id="cart">
            <span onClick={()=>setShowCart(false)} className="back-btn"> <FaAngleLeft/>Back</span>
            <div className="cart-container">
            {
              cartitems?  cartitems.map((p)=>(
               
                <Link className='cart-box' key={p.id} >
                <img src={p.image} alt="" className='cart-products'  />
                <h4>{p.name}</h4>
                <p> USD ${p.price} </p>  
                <p>Quantity :{p.count}</p>
                <div className="count-box"><button onClick={()=>setCount(count+1)} className="count-btn">+</button><span>{count}</span><button onClick={()=>setCount(count-1)} className="count-btn">-</button></div>
                <button onClick={(e)=>{setcartitems(cartitems.filter((s)=>s.id!==p.id)),toast.success('Product removed from the cart')}} className="remove-btn">Remove</button>
            </Link>
              ))

                :<h1 className="noitems"> No items selected</h1>
              
            }
            </div>
              <h4>Total price:$ {total}</h4>
              <button className="buy-btn2" onClick={()=>toast.success('Order place succsfully !')}>Buy Now $ {total}</button>
              
            

        </div>
    )
}

export default Cart