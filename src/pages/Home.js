import React, {  useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/Navbar'
import '../styles/home.css';
import '../styles/Navbar.css';

function Home() {
  const [data,setData]=useState([]);
 function getdata(){
 fetch('https://fakestoreapi.com/products/categories')
  .then((res)=>res.json())
  .then(json=>setData(json))
 }
 useEffect(()=>{
    getdata();
 },[])
  
  console.log(data);
  return (
    <div>
    <div>
    <Navbar/>
    <div/>
    <div className='card__container'>
    <Link to='/productList' style={{fontSize:'20px',alignContent:'center',textDecoration:'none',color:'black',display:'flex'}}>
      {
        data.map((item,index)=>{
          return <Card  category={item}
                      image={item.image}
                       price={item.price}
                       title={item.title}
                       key={index} 
                          />
        })
      }
      </Link>
    </div>
    </div>
    </div>
  )
}

export default Home