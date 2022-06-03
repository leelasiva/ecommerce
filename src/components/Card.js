import React from 'react'
import '../styles/card.css';

function Card({category,image,price,title}) {
  return (
    <div className='card'>{category}
    <div className='card__img'>
    <img src={image} alt=""></img>
   </div>
    <div className='card__info'>
    
    {price}
      <p className='category'>{title}</p>
    </div>
    
    </div>
  )
}

export default Card