import React from 'react'
import ProductCard from './ProductCard.jsx'
import { useState } from 'react'
const Searchh = ({filtred}) => {
    console.log(filtred,'props');
    const[card,setCard]=useState('')
 const [show,setShow]= useState(false)
const toggle=()=>{
let she=!show
setShow(she)
}

  if (show===true) {
    return <ProductCard toggle={toggle} card={card} />
  }
  else {
    return (<div className="grid-container ">
    {filtred && filtred.map((e,i)=>{

       return(
        
    <div className="card grid-item" style={{width: "18rem"}}>
      
  <img className="card-img-top" src={e.ImageUrl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{e.Product}</h5>
    <h5 className="card-title">{e.Price} DT</h5>

    <p className="card-text"></p>
  </div>

  <div className="card-body">
    <a  onClick={()=>{
      setCard(e)
      toggle()}} className="card-link" >more details</a>

    
  </div><div>
  
  </div>
</div>
  )})}
  </div>) 
}}

export default Searchh