import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Catalog from './Catalog';
import NavBar from './NavBar';
import Cart from './Cart';
//import Context from '../';




export default function App(){


  return(
    <>
 
  <Routes>

<Route path="/" element={<Catalog />} exact />
<Route path="/Cart" element={<Cart />} />
</Routes>
 

    </>
  



  )
}




