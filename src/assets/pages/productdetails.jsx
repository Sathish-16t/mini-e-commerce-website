import { useContext, useState } from "react";
import ProductInfo from "../components/productinfo";
import Cart from "../components/cart";
import { countContext, showcartContext } from "../components/contextapi";
import { cartContext } from "../components/contextapi";
function ProductDetails(){
    const [cartitems,setcartitems]=useState([])
    const[count,setCount]=useState(1)
    const {showCart,setShowCart}=useContext(showcartContext)
    return(
        <div>
            <cartContext.Provider value={{cartitems,setcartitems}}>
                <countContext.Provider value={{count,setCount}}>
                 {showCart ?  <Cart setShowCart={setShowCart}   /> 
                 : < ProductInfo showCart={showCart} setShowCart={setShowCart} />}
                 </countContext.Provider>
            </cartContext.Provider>
       
        </div>
    )
}
export default ProductDetails