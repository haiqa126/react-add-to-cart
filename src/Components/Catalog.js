import React,{useState,useEffect} from 'react';
import Item from './Item';
import '../assets/css/Catalog.css';
import NavBar from './NavBar';


function Catalog() {
  const [data,setData]=useState([]);
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
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson.products)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
<NavBar/>
     {
       data && data.length>0 && data.map((item)=>
       <>
       <div className="items">
       <Item key={item.style} data={item}/>

       </div>
       
       </>
       
       )
     }
    </>
     
    
  );
}

export default Catalog;