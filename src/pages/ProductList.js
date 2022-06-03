import React, {  useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

import Card from '../components/Card';
import Navbar from '../components/Navbar'
import '../styles/home.css';
import ProductDetails from './ProductDetails';

function ProductList() {
  const [data,setData]=useState([]);
 function getdata(){
 fetch('https://fakestoreapi.com/products')
  .then((res)=>res.json())
  .then(json=>setData(json))
 }
 useEffect(()=>{
    getdata();
 },[])
  
  console.log(data);
  function handleDetails(data){
      return <ProductDetails id={data.id} image={data.image} 
                                           description={data.description}
                                           title={data.title} data={data}></ProductDetails>
  }
  return (
    <div>
    <Navbar/>
    <Link to='/productDetails' onClick={()=>handleDetails(data)} style={{display:'flex',justifyContent:'center',alignItems:'center',textDecoration:'none'}}>
    <div className='card__container'>
    {
        data.map((item,index)=>{
          return <Card category={item.category}
                      image={item.image}
                       price={item.price}
                       title={item.title}
                       key={index}/>
        })
      }

    </div>
    </Link>
    </div>
  )
}

export default ProductList