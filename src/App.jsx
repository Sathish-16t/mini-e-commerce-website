import Home from "./assets/pages/home"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from "./assets/pages/productdetails"
import Navbar from './assets/components/navbar'
import { useState } from "react"
import Contact from "./assets/components/contact"
import { useContext } from "react"
import { showcartContext } from "./assets/components/contextapi"
import { searchContext } from "./assets/components/contextapi"
function App() {
  const [search, setSearch] = useState(false)
  const [link, setLink] = useState(false)
  const [shop, setShop] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [showCart, setShowCart] = useState(false)


  return (
    <BrowserRouter>
      <searchContext.Provider value={{ searchValue, setSearchValue }}>
        <showcartContext.Provider value={{ showCart, setShowCart }}>
          <Navbar search={search} setLink={setLink} link={link} setSearch={setSearch} shop={shop} setShop={setShop} />
          <div onClick={() => { setLink(false), setSearch(false), setShop(false) }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
            <section id='contact'>
              <Contact />
            </section>
            <ToastContainer/>
          </div>
        </showcartContext.Provider>
      </searchContext.Provider>
    </BrowserRouter>
  )
}

export default App
