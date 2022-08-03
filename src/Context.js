import React from 'react'
import { createContext, useState} from 'react'


export const Cart=createContext();


export default function Context({children}) {
const [cart, setCart]=useState([]); //array of objects ia ssumed 


  return (
    <Cart.Provider value={{cart,setCart}}>
 
{children}

    </Cart.Provider>
  )
}
