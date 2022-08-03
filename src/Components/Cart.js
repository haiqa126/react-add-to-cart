import React, { Component,useState,useEffect} from 'react';


export default function Cart(){
    const [cart_items, setcart_items] = useState([]);
    const get_items=()=>{
    console.log("to check whats in the cart")
console.log(localStorage.getItem("cart"))
console.log("setting the local storage to the cart")
console.log("to test")
setcart_items(localStorage.getItem("cart"))

    }
    useEffect(()=>{
        get_items()
      },[])
   
   return(
    <>
    <h1>Welcome to the Cart</h1>

{

    cart_items && cart_items.length>0 && cart_items.map((item)=>
      console.log()
       
       )
     }

    </>

  
  
    )
    }