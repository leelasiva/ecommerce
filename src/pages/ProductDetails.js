import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/productDetails.css';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
function ProductDetails({ id}) {
  
  const [data, setData] = useState([]);
  const [cart,setCart]=useState([]);
  function getdata() {
    fetch(`https://fakestoreapi.com/products/1`)
      .then((res) => res.json())
      .then(json => setData(json))
  }
  useEffect(() => {
    getdata();
  }, [])
 console.log(data);
 function addToCart(data){
   setCart([...cart,data])
 }
  return (
    <div>
    {<Link to='/Cart'>
    <Navbar cart={cart.length}/>
   </Link>}
    <div className='main__container'>
      <div className='product__img'>
        <img src={data.image} alt=''></img>
      </div>
      <div className='product__data'>
        <h3 className='product__title'>{data.title}</h3>
        <p className='product__description'>{data.description}</p>
        <h3 className='sectionHeading'>Select Color</h3>
        <div>
        <img src={data.image} className='imgs' alt=''></img>
        <img src={data.image} className='imgs' alt=''></img>
        <img src={data.image} className='imgs' alt=''></img>
        </div>
        <button className='add' onClick={()=>addToCart(data)}>Add to Cart</button>
        <button className='wishList'>Add to WishList</button>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails