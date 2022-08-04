import React, { Component,useState,useEffect} from 'react';
import CartItem from './CartItem';
import NavBar from './NavBar';
import '../assets/css/Catalog.css';

export default function Cart(){
    const [cart, setCart] = useState([]);
    const getItems=()=>{
    console.log("to check whats in the cart")
console.log(JSON.parse(localStorage.getItem("cart")))
console.log("setting the local storage to the cart")
console.log("to test")
setCart(JSON.parse(localStorage.getItem("cart")))
console.log("to check whats in the total:")
console.log(localStorage.getItem("total"))
    }
    useEffect(()=>{
        getItems()
      },[])

   return(
    <>
    <NavBar/>
    <h3>Welcome to the Cart</h3>

    <div className='container_cart_items'>
    {

cart && cart.length>0 && cart.map((item)=>
  //console.log(item)
   
     <CartItem data={item} />



   )
 }

    </div>


<h3 ><b>Your total is:</b>£{parseFloat(localStorage.getItem("total")).toFixed(2)} </h3>
    </>

  
  
    )
    }
