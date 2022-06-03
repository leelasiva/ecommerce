import React from 'react'

function Cart({cart}) {
  return (
    <div>
      {cart.map((item)=>{
          return(
              <div>
              {item.image}</div>
          )
      })}
    </div>
  )
}

export default Cart