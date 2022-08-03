import React, {useState,useEffect} from 'react';
import CartItem from './CartItem';

export default function Cart(){
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState([]);
    const getItems=()=>{
  
console.log(JSON.parse(localStorage.getItem("cart")))
console.log("setting the local storage to the cart")

setCart(JSON.parse(localStorage.getItem("cart")))


    }
    useEffect(()=>{
        getItems()
        console.log("to check whats in the cart")
        console.log(cart);
//   setTotal(cart.map=(p)=>{
// total=p.Price+total;
//   })
  console.log(total);

      
      },[])
   
   return(
    <>
    <h1>Welcome to the Cart</h1>

{
 
//calculating the total
 cart && cart.length>0 && cart.map((i)=>
    
       
     
    setTotal(total+i.Price)
   
     
       
       )

}
{

    cart && cart.length>0 && cart.map((i)=>
    
       
        <CartItem data={i} total={total} />
    
   
     
       
       )
     }

    </>

  
  
    )
    }
