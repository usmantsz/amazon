import React, { useState } from 'react'
import Product from './Product';
import './css/Home.css';
import Products from './Data/Products';
function Home() {
    const [products]=useState(Products);

  return (
    <div className='home'>
            
            <div className='home__container'>
                <img className='home__image' src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg' alt=""/>
               <div className='row__container'>
               <div className='home__row'>
               <Product 
                key={products[0].id} 
                id={products[0].id}
                title={products[0].title} 
                img={products[0].imageUrl} 
                rating={products[0].rate} 
                price={products[0].price}
                
                />
                <Product 
                key={products[1].id} 
                id={products[1].id}
                title={products[1].title} 
                img={products[1].imageUrl} 
                rating={products[1].rate} 
                price={products[1].price}
                
                />
                </div>
                <div className='home__row'>
                <Product 
                key={products[2].id} 
                id={products[2].id}
                title={products[2].title} 
                img={products[2].imageUrl} 
                rating={products[2].rate} 
                price={products[2].price}
                
                />
                 <Product 
                key={products[3].id} 
                id={products[3].id}
                title={products[3].title} 
                img={products[3].imageUrl} 
                rating={products[3].rate} 
                price={products[3].price}
                
                />

                <Product 
                key={products[4].id} 
                id={products[4].id}
                title={products[4].title} 
                img={products[4].imageUrl} 
                rating={products[4].rate} 
                price={products[4].price}
                
                />

                <Product 
                key={products[5].id} 
                id={products[5].id}
                title={products[5].title} 
                img={products[5].imageUrl} 
                rating={products[5].rate} 
                price={products[5].price}
                
                />
                </div>
                <div className='home__row'>
                <Product 
                key={products[6].id} 
                id={products[6].id}
                title={products[6].title} 
                img={products[6].imageUrl} 
                rating={products[6].rate} 
                price={products[6].price}
                
                />
                 <Product 
                key={products[7].id} 
                id={products[7].id}
                title={products[7].title} 
                img={products[7].imageUrl} 
                rating={products[7].rate} 
                price={products[7].price}
                
                />
                 <Product 
                key={products[8].id} 
                id={products[8].id}
                title={products[8].title} 
                img={products[8].imageUrl} 
                rating={products[8].rate} 
                price={products[8].price}
                
                />
                </div>
                <div className='home__row'>
                <Product 
                key={products[9].id} 
                id={products[9].id}
                title={products[9].title} 
                img={products[9].imageUrl} 
                rating={products[9].rate} 
                price={products[9].price}
                
                />
                </div>
               </div>

            </div>
    </div>
  )
}

export default Home