import React from 'react'
import './css/CheckOutProduct.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateValue } from './Data/StateProvider';
function CheckOutProduct(props) {
    const [{basket},dispatch]=useStateValue();
    const deleteItem=()=>{
        dispatch({
            type:'REMOVE_PRODUCT',
            id:props.id,
        })   
    }

  return (
    <div className='checkoutproduct'>
        <img className='checkOutProduct__image' src={props.img} alt=""/>
        <div className='checkOutProduct__info'>
            <div className='checkOutProduct__info'>   
                    <p className='checkOutProduct__title'>
                    {props.title}
                    </p>
                    <p className='checkOutProduct__price'>
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className='checkOutProduct__rating'>
                    {Array(props.rating).fill().map((_)=>(
                    <p>⭐</p>))}
                    </div>
                    <br></br>
                    <Button className='product__button' style={{background:"orange",color:"black"}} onClick={deleteItem}>
               <DeleteIcon/>
                - Remove Product</Button>

            </div>
        </div>
    </div>
  )
}

export default CheckOutProduct