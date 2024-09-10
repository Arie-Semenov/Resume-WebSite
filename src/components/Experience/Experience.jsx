import { useState } from 'react'
import './experience.css'
import deliveryContact from '../../images/delivery-contact.png'
import deliveryHome from '../../images/delivery-home.png'
import deliveryLogin from '../../images/delivery-login.png'
import deliveryPrice from '../../images/delivery-price.png'
import shop from '../../images/shop.png'
import shopCheckOut from '../../images/shop-checkout.png'
import shopPay from '../../images/shop-pay.png'

export default function Experience(props){
    return(

        <section className="experience" id='experience'>
                        <div className='shop-app'>
                <h2>Basic Web Store</h2>
                <p>This project I builded a simple web store to understand the fundamentals of react js</p>
                <img src={shop} alt='shop'id='shop'/>
                <img src={shopCheckOut} alt='check-out'/>
                <img src={shopPay} alt='pay'/>
            </div>
            <div className="delivery-app">
            <h2>Complex Delivery App</h2>
                <p> This project I builded a complex delivery app.<br/>
                    This delivery ap allows you to add orders re added them by the phone number see what orders are done in process or canceled<br/>
                    The app also allows you to see how many orders has been completed and canceled in a specific month, Also allows you to see on the map where the orders located<br/>
                    In this project I had to work with a SQL DataBase and created my own DataBase and designed it mySelf 
                </p>
                <img src={deliveryHome} alt='home' id='delivery-home'/>
                <div className="image-container-del">
                    <img src={deliveryLogin} alt='login'/>
                    <img src={deliveryContact} alt='contact-us'/>
                    <img src={deliveryPrice} alt='prices'/>
                </div>
            </div>
        </section>

    );
}