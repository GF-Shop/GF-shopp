import React from 'react'
import { useState, useEffect } from "react";
import ProductCard from './ProductCard.jsx';

const Phones = (props) => {
 console.log(props);
 const[card,setCard]=useState('')
 const [show,setShow]=useState(false)
const toggle=()=>{
let she=!show
setShow(she)
}

  if (show===true) {
    return <ProductCard toggle={toggle} card={card} />
  }
  else {
    return (<div class="grid-container ">
    {props.phones.map((e,i)=>{

       return(
        
    <div class="card grid-item" style={{width: "18rem"}}>
      
  <img class="card-img-top" src={e.ImageUrl} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{e.Product}</h5>
    <h5 class="card-title">{e.Price} DT</h5>

    <p class="card-text"></p>
  </div>

  <div class="card-body">
    <a  onClick={()=>{
      setCard(e)
      toggle()}} class="card-link" >more details</a>

    
  </div><div>
  
  </div>
</div>
  )})}
  </div>) 
  
}
  

}

export default Phones