import React from 'react'
import axios from 'axios'
const Posts = ({e}) => {
  return (
    <div  className="card grid-item" style={{width: "18rem"}}>
      
    <img className="card-img-top" src={e.ImageUrl} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{e.Product}</h5>
      <h5 className="card-title">{e.Price} DT</h5>
     
    <button id='update'>update</button>
    <button id='delete' onClick={()=>{console.log("hello");
      
      axios.delete(`http://localhost:5000/prod/63948c4c25963a27f1aeddef`)
}
}
    >delete</button>
    
  
      <p className="card-text"></p>
    </div>
  
    <div className="card-body">
     
  
      
    </div><div>
    
    </div>
  </div>
  )
}

export default Posts