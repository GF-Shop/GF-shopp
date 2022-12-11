import React from 'react'
import axios from 'axios'
const Posts = (props) => {
  return (
    <div  className="card grid-item" style={{width: "18rem"}}>
      
    <img className="card-img-top" src={props.e.ImageUrl} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.e.Product}</h5>
      <h5 className="card-title">{props.e.Price} DT</h5>
     
    <button id='update'>update</button>
    <button id='delete' onClick={()=>{console.log(props.e._id)
      
      axios.delete(`http://localhost:5000/prod/${props.e._id}`)
      window.location.reload()
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