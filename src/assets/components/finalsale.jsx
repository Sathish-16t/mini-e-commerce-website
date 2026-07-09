import getProducts from '../js/protuct'
import '../css/finalsale.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Finalsale(){
    const [show,setShow]=useState(false)
    const product =getProducts()
    const finalsale=product.filter((p)=>p.category==='finalsale')
    const displayFinalSale=show?finalsale:finalsale.slice(0,4)
    return(
        <div className='final-sale'>
        <small>LIMITED OFFER</small>
        <h4>Final Sale</h4>
        <div className='final-box'>
        {
            displayFinalSale.map((p)=>(
<Link className='final-image-box' key={p.id} to={`/products/${p.id}`}>
            <img src={p.image[0]} alt=""  className='final-image'/>
            <h4>{p.name}</h4>
            <div className='price'>
            <span>USD ${p.price}</span><span className='offer'>$199</span></div>
        </Link>
            ))
        }
        </div>
        
        
        <div className='show-box'>
        <button onClick={()=>setShow(!show)} className='show-btn'>{show?'Show less':'Show more'}</button>
        </div>
        </div>
    )
}
 export default Finalsale