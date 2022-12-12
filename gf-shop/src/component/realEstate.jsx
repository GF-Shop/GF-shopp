import React from 'react'
import { useState, useEffect } from "react";
import ProductCard from './ProductCard.jsx';

const RealEstate = (props) => 
  {const[card,setCard]=useState('')
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
      {props.realEstate.map((e,i)=>{
         return(
          
      <div class="card grid-item" style={{width: "18rem"}}>
        
    <img class="card-img-top" src={e.ImageUrl} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{e.Product}</h5>
      <p class="card-text"></p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{e.Price}</li>
      <li class="list-group-item">{e.User}</li>
      
    </ul>
    <div class="card-body">
      <a onClick={()=>{
      setCard(e)
      toggle()}} class="card-link" >more details</a>
      
    </div><div>
    
    </div>
  </div>
    )})}
    </div>)
  
  }
}
export default RealEstate