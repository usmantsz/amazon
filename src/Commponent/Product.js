import React from 'react';
import Button from '@mui/material/Button';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './css/Product.css';
import { useStateValue } from './Data/StateProvider';
function Product(props) {
    const [state,dispatch]=useStateValue();
    const addBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:props.id,
                price:props.price

            }
        })
    }
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{props.title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className='product__rating'>
                {Array(props.rating).fill().map((_)=>(
                    <p>⭐</p>))}
            </div>
            <img className='product__img' src={props.img} alt=""/>

           <center>
           <Button className='product__button' style={{background:"orange",color:"black"}} onClick={addBasket}>
               <ShoppingBasketIcon/>
                - Add to cart</Button>
           </center>
        </div>
    </div>
  )
}

export default Product