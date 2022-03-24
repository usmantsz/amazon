import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './css/Header.css';
import { useStateValue } from './Data/StateProvider';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

function Header() {
  const [{basket,user}]=useStateValue();
  const handelAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className='header'>
        {/* Image header__logo amazon */}
        <Link to='/'>
        <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=""/>
        </Link>
        {/* header__searchInput amazon */}
        <div className='header__search'>
            <input type='text' className='header__searchInput'/>
           <SearchIcon className='header__searchIcon'/>
        </div>
 
        {/* header__nav */}
        <div className='header__nav'>
        <Link to={!user && '/login'}>
            <div onClick={handelAuthentication} className='header__option'>
                    <span className='header__optionLineOne'>Hello, {user?.email}</span>
                    <span className='header__optionLineTwo'>{user?'Sign Out':'Sign In'}</span>
            </div>
        </Link>
            <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
            </div>
            <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
            </div>
            <Link to='/checkout'>
            <div className='header__optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
            </div>
            </Link>
        </div>

    </div>
  )
}

export default Header