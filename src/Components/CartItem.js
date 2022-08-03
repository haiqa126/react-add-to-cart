import React, {useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../assets/css/Catalog.css';




export default function CartItem(props){


    return(
    <>
    <Box sx={{width:200}}>
    <Card variant="outlined">
 <CardContent>
  <img src={props.data.ImageUrl}></img>
      <Typography sx={{ fontSize: 14,color:'Black' }} >
        Name:{props.data.Name}
      </Typography>
      
      <Typography sx={{fontSize: 14,color:'Blue'  }} >
      Price:{props.data.Price}
      </Typography >
    </CardContent>
     </Card>
    </Box>


    
    </>

  
  
    )
    }
