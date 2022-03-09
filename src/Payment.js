import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import { useNavigate } from "react-router-dom";


function Payment() {
  const navigate = useNavigate ();
  const [{basket, user}, dispatch] = useStateValue();
  const routeChange = () =>{
      navigate("/paymentProcess")
  }

  return (
    <div className='payment'>
 

        <div className='payment__container'>

            <h1>
                Checkout (<Link to="/checkout">{basket?.length} items</Link>) {/*Will display checkout + How many items are in the cart*/}
            </h1>
            
            <div className='payment__section'>
             {/*payment section - address*/}
               
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                
                <div className='payment__address'>
                    <h4> Email: {!user? 'guest': user.email}</h4> <h4> Address: 123 fake address</h4><h4> City: Toronto</h4><h4> Province/State: ON</h4>
                    
                   
                </div>
            </div>

            <div className='payment__section'>
            {/*payment section - items*/}
                
                <div className='payment__title'>
                    <h3>Review Items and Delivery</h3>
                </div>
               
                <div className='payment__items'>
                    {/*All the products in cart shown*/}
                    {basket.map(item => (
                        <CheckoutProduct
                        id ={item.id}
                        title ={item.title}
                        image ={item.image}
                        price ={item.price}
                        rating ={item.rating}
                        />
                    ))}
                </div>

            </div>
            
            <div className='payment__section'>
            {/*payment section - payment method*/}
                
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>

                <div className='payment__details'>
                    {/*Stripe code required for further payment implementation*/}
                        <button onClick={routeChange}className='card'>Buy Now</button> {/*when pressed will run const routeChange  */} 
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment