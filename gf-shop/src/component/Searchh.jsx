import React from 'react'
import ProductCard from './ProductCard.jsx'
import { useState } from 'react'
const Searchh = ({filtred}) => {
    console.log(filtred);
    const[card,setCard]=useState('')
 const [show,setShow]= useState(false)
const togtog=()=>{
let she=!show
setShow(she)
}

  if (show===true) {
    return <ProductCard togtog={togtog} card={card} />
  }
  else {
    return (<div class="grid-container ">
    {filtred.map((e,i)=>{

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
      togtog()}} class="card-link" >more details</a>

    
  </div><div>
  
  </div>
</div>
  )})}
  </div>) 
}}

export default Searchh