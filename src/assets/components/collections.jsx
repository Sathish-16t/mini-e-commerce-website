import '../css/collection.css'
import getProducts from '../js/protuct.js'
import { Link } from 'react-router-dom'
function Collection(){
    const product=getProducts()
    const collection=product.filter((p)=>p.category==='collection')
    return(
      <div>
            <h3 className='coll-text'>Collections</h3>
         
        <div className="collection-box">

              {
                collection.map((p)=>(
                <Link className="collectionImage-info" key={p.id}  to={`/products/${p.id}`}>
                <img src={p.image[0]} alt=""  className='collection-image'/>
                <h4 className="subtitle">{p.text}</h4>
                </Link>
                ))
                 
              }
               
               
            </div>
        </div>
    )
}

export default Collection