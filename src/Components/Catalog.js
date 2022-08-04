import React,{useState,useEffect} from 'react';
import Item from './Item';
import '../assets/css/Catalog.css';
import NavBar from './NavBar';
import Button from '@mui/material/Button';


function Catalog() {

  const [data,setData]=useState([]);
  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(()=>{
    getData()
    //console.log(JSON.parse(localStorage.getItem("cart")));
    setCart( JSON.parse(localStorage.getItem("cart")));
    setTotal(parseFloat(localStorage.getItem('total')));
    //console.log(total);
  },[])

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart));
  },[cart])

  useEffect(()=>{
   localStorage.setItem('total',total)
  },[total])

  const getData=()=>{
    
    fetch('products.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        //console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        //console.log(myJson);
        setData(myJson.products)
      });
  }


  return (
    <>
<NavBar/>
     {
       data && data.length>0 && data.map((item, key)=>
       <>
       <div key={key}  className="items">
       <Item key={key}  data={item}/>
        <Button sx={{ fontSize: 14,color:'Black',borderStyle:'solid'}} onClick={()=>{
        setCart( (cr) => [...cr, {
          Name:item.name,
          Price:item.actual_price,
          ImageUrl:item.image
        }])

        setTotal(item.actual_price+total);
      }}>Add to Cart</Button>
       </div>
       
       </>
       
       )
     }
    </>
     
    
  );
}

export default Catalog;
