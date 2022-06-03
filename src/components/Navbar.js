import React from 'react'
import { useState } from 'react';
import { FaList, FaSearch, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
function Navbar({cart}) {
  const [showlinks, setShowLinks] = useState(false)
  return (
    <div >
      <div className='Navbar'>
        <div className='leftside'>
          <div className='links' id={showlinks ? "hidden" : ""}>
             <span className='bag'><FaShoppingBag/></span>
            <a href='/home'>Home</a>
            <a href='/home'>ShopByCategory</a>
            <a href='/home'>YourOrders</a>
          </div>
          <button onClick={() => setShowLinks(!showlinks)}><FaList/></button>
          {" "}
        </div>
        <div className='rightside'>
          <input type='text' placeholder='search...' />
          <button><FaSearch /></button>
          <Link to='/Cart.js'>Cart
          <span className='cart'><FaShoppingCart/></span></Link><span className="badge rounded-pill badge-light" style={{backgroundColor:'white',color:'black',margin:'0px 10px 10px 0px'}}>{cart}</span>
          <a href='/'>LogOut</a>
        </div>
      </div>
    </div>

  )
}

export default Navbar