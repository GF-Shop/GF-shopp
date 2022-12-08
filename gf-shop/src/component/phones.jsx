import React from 'react'

const Phones = ({phones}) => {
 ;
  return (<div class="grid-container ">
    {phones.map((e,i)=>{
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
    <a href="#" class="card-link">more details</a>
    
  </div>
</div>
  )})}
  </div>)

}

export default Phones