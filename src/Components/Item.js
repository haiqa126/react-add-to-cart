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

    return(
    <>
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
