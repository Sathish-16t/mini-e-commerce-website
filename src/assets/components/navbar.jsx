import { FaSearch, FaBars, FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import {HashLink} from 'react-router-hash-link'
import { IoClose, } from 'react-icons/io5'
import '../css/navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import getProducts from '../js/protuct'
import { searchContext, showcartContext } from './contextapi'
import { useContext } from 'react'

function Navbar({search,setSearch,link,setLink,shop,setShop}) {
    const products=getProducts()
   const {searchValue,setSearchValue}=useContext(searchContext)
   const {showCart,setShowCart}=useContext(showcartContext)
    return(
        <div className='main-container' onClick={()=>{setSearch(false)}}  >
            <header>
                 <nav  >
                    <h1 className='title2'>Cartile</h1>
                      <div className= {search?'search-box':'search-close'}>
                        <input type="search"  placeholder='Search' onClick={(e)=>e.stopPropagation()} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
                    </div>
                      <p className='close-btn' style={{display:link?'flex':'none'}}><span style={{ visibility: !shop ? 'hidden' : 'visible' }}><FaAngleLeft onClick={(e) =>{e.stopPropagation(), setShop(false)}} /></span> <IoClose onClick={() => { setLink(false),setShop(false) }} />
                    </p>
                    <div className={link?'di active':'di'}>
                  
                    {!shop && <div className='link-box' >
                       <HashLink smooth to={'/#hero'} onClick={()=>setLink(false)}> Home</HashLink>
                        <a href='#contact' onClick={()=>setLink(false)}>About</a>
                        <a style={{ display: 'flex', alignItems: 'center' }} onClick={(e) =>{e.stopPropagation() ,setShop(true)}}>Shop <FaAngleRight /> </a>
                        <Link to={`/products/$id`} onClick={()=>{setLink(false),setShowCart(true)}}>Cart</Link>

                    </div> }
                    {shop && <div className='inside'>
                        <div className='link-box'>
                            <a style={{color:'gray'}}onClick={()=>setLink(false)}>SHOP</a>
                            <Link to={'/'} onClick={()=>setLink(false)}>All</Link>
                            <HashLink smooth to={'/#finalsale'}onClick={()=>setLink(false)}>Finalesale</HashLink>
                            <HashLink smooth to={'/#finalsale'} onClick={()=>setLink(false)}>Best Sellers</HashLink>
                            <HashLink smooth to='/#newarrival'onClick={()=>setLink(false)} >New Arrivels</HashLink>
                        </div>
                        <div className='link-box'>
                            <a style={{color:'gray'}}>COLLECTIONS</a>
                            <HashLink smooth to='/#collection'  onClick={()=>setLink(false)}>Fall Collections</HashLink>
                            <HashLink smooth to='/#collection' onClick={()=>setLink(false)}>The Essentials</HashLink>
                            <HashLink smooth to='/#collection' onClick={()=>setLink(false)}>After Dark</HashLink>
                            <HashLink smooth to='/#collection' onClick={()=>setLink(false)}>Studio Edit</HashLink>
                        </div>
                    </div>}
                    </div>
                </nav>
            </header>

                <div className='title-box'>
                    <h1>Cartile</h1>
                    <div className='title-icons'>
                       <span className='bar'> <FaBars onClick={(e) => {
                            setLink(true)
                            e.stopPropagation()

                        }} /></span>
                        <FaSearch onClick={(e)=>{setSearch(true), e.stopPropagation()}}/>
                    </div>
                </div>
        
        </div>
    )
}
export default Navbar 
// https://github.com/Sathish-16t/mini-e-commerce-website.git