import React, {useState,useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../assets/css/Catalog.css';
import Cart from './Cart';



export default function Item(props){

  //defining the cart 
 //Cart is an array of items
 // const [cart, setCart] = useState([]);
  // const addToCart = (cart => setCart( [...cart, el]));
  //console.log(cart);



//  useEffect(()=>{
//   //console.log("I am the cart")
//   console.log(cart)
//   //localStorage.setItem('cart',JSON.stringify(cart));
//   //console.log("the local storage print is below")
//   //console.log(localStorage.getItem('cart'))
// },[cart])
    return(
    <>
    {/* {console.log("value of props:"+props)} */}
    
   
    <Box sx={{width:200}}>
    <Card variant="outlined">
 <CardContent>
  <img src={props.data.image}></img>
      <Typography sx={{ fontSize: 14,color:'Black' }} >
        Name:{props.data.name}
      </Typography>
      
      <Typography sx={{fontSize: 14,color:'Blue'  }} >
      Price:{props.data.actual_price}
      </Typography >


      {props.data.sizes.map((size)=>
      <>
      <Typography className='size'>
{size.size}
</Typography>
      </>

      )}
      

    </CardContent>
     </Card>
    </Box>

    
    </>

  
  
    )
    }
