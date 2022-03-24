import React from 'react';
import CurrencyFormat from 'react-currency-format';
import Button from '@mui/material/Button';
import './css/Subtotal.css';
import { getSubTotal } from './Data/reducer';
import { useStateValue } from './Data/StateProvider';
import { useNavigate } from 'react-router-dom';
function Subtotal() {
    const [{basket}]=useStateValue();
    const valueSub=getSubTotal(basket);
    const history=useNavigate();
  return (
    <div className='subtotal'>
        <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>Subtotal  ({basket.length} items) :  <strong>{value}</strong></p>
                        <small className='subtotal__gift'>
                            <input type="checkbox"/> 
                            This order contain a gift. 
                        </small>
                      <Button style={{background:"orange",color:"black"}} onClick={()=>{history('../payment')}}>Proceed a checkout</Button>
                    </>
                )}

                decimalScale={2}
                value={valueSub}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
        />
    </div>
  );
}

export default Subtotal