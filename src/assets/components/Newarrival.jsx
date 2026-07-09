
import '../css/newarrival.css'
import { useContext, useState } from 'react'
import { use } from 'react'
import getProducts from '../js/protuct.js'
import { Link } from 'react-router-dom'
import { searchContext } from './contextapi.jsx'

function Newarrival(){
    const [showRemain,SetShowRemain]=useState(false)
     const {searchValue,setSearchValue}=useContext(searchContext)
    const product=getProducts()
    const newArrival=product.filter((p)=>p.category=='newarrival')
    const searchProducts=product.filter((r)=>r.name.toLowerCase().includes(searchValue.toLowerCase()))
    const displayProduct=showRemain?newArrival:newArrival.slice(0,4)
    return(
        <div>

           <div className='arrival-text-box'>
            <h3>New Arrivals</h3>
           </div>

           <div className='product-box'>

            
          { (searchValue?searchProducts: displayProduct).map((p)=>(
            <Link className='product-info' key={p.id} to={`/products/${p.id}`}>
                <img src={p.image[0]} alt="" className='products' />
                <h4>{p.name}</h4>
                <p> USD ${p.price} </p>
            </Link>
            ))
            
          }
            
            
          </div>
          <div className='show-box1'>
          <button onClick={()=>SetShowRemain(!showRemain)}  className='show-btn'> {showRemain?'Show Less':'Show More'}</button>
</div>

<hr />
        </div>

    )
}

export default Newarrival