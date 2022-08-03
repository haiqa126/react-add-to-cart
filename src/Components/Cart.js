import React, { Component,useState,useEffect} from 'react';
import CartItem from './CartItem';

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
    <h1>Welcome to the Cart</h1>

{

    cart && cart.length>0 && cart.map((item)=>
      //console.log(item)
       
         <CartItem data={item} />



       )
     }
<h2>Your total is:{localStorage.getItem("total")} </h2>
    </>

  
  
    )
    }
