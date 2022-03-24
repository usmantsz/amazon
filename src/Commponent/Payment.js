import React,{useEffect, useState} from 'react'
import './css/Payment.css'
import Products from './Data/Products'
import { useStateValue } from './Data/StateProvider'
import CheckOutProduct from './CheckOutProduct'
import { Link } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format';
import Button from '@mui/material/Button';
import { getSubTotal } from './Data/reducer';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
function Payment() {
    const [{basket,user}]=useStateValue();
    const [products]=useState(Products);
    const stripe=useStripe();
    const element=useElements();
    const [succeeded,setSucceeded]=useState(null);
    const [processing,setProcessing]=useState(null);
    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);
    const [clientSecret,setClientSecret]=useState(true);
    const valueSub=getSubTotal(basket);
    const history=useNavigate();
    useEffect(()=>{
        const getClientSecret=async()=>{
                    const response=await axios({
                        //stripe expects the total in a curencies subunits 
                        method:"post",
                        url:`/payment/create?total=${getSubTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    },[basket])

    console.log("the client screct ==>",clientSecret);
    
    const handleSubmit= async (event) =>{
        event.preventDefault();
        setDisabled(event.empty);
        setProcessing(true);
        const payload= await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                    card:element.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            history.replace('/orders')
        })
    }

    const handleChange=e=>{

    }

  return (
    <div className='payment__container'>
    <div className='payment__heading'>
        <h1>Checkout (<Link to='/checkout'>{basket.length} items</Link>)</h1>
    </div>
    <div  className='payment__section'>
     <div className='payment__title'>
            <h2>Delivery Address</h2>
     </div>
    <div className='payment__address'>
    <h4>Hello, {user?.email}</h4>
    <p>Hoise no 5 walk land street</p>
    <p>Ali town lahore</p>
    </div>
    </div>
     <div className='payment__section'>
     <div className='payment__title'>
            <h2>Reviews items and delivery</h2>
     </div>
     <div className='payment__items'>
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
     <div  className='payment__section'>
     <div className='payment__title'>
            <h2>Payment Method</h2>
     </div>
     <div className='payment__details'>
            <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>
                <div className='payment__pricecontainer'>
                <CurrencyFormat
                className='currency__format'
                renderText={(value)=>(
                    <>
                        <h3>Order Total : {value}</h3>
                    </>
                )}

                decimalScale={2}
                value={valueSub}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                    />
                </div>
               <center>
               <Button onClick={processing || disabled || succeeded} style={{background:"orange",color:"black",marginTop:"7px"}}>
                    {
                        processing? "Processing" : "Buy Now"
                    }
                </Button>
               </center>
            </form>
     </div>
     </div>
    </div>
  )
}

export default Payment