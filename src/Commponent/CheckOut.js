import React, { useState } from 'react'
import CheckOutProduct from './CheckOutProduct'
import './css/CheckOut.css'
import Products from './Data/Products'
import { useStateValue } from './Data/StateProvider'
import Subtotal from './Subtotal';

function CheckOut() {
    const [{basket,user}]=useStateValue();
    const [products]=useState(Products);
  return (
    <div className="checkout">
        
        <div className="checkout__left">
            <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg' alt=""/>
            <div>
            <h2 className='checkout__title'>
                <h4>Hello, {user?.email}</h4>
                Shoping Basket
            </h2>
            {
                basket.map((product,i)=>(
                    <CheckOutProduct
                    key={i}
                    id={product.id}
                    title={products[product.id].title}
                    price={products[product.id].price}
                    rating={products[product.id].rate}
                    img={products[product.id].imageUrl}
                    />
                ))
            }
        </div>
        </div>
        <div className='checkout__right' >
            <h2><Subtotal/></h2>
            </div>
        
    </div>
  )
}

export default CheckOut