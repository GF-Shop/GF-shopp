import React,{useState} from 'react'
import axios from 'axios'

import Update from "./Update.jsx"

const Posts = ({e}) => {
  const[card,setCard]=useState('')
  const [show,setShow]=useState(false)
  
const toggle=()=>{
let she=!show
setShow(she)
}
if (show===true) {
    return <Update   card={card} />
  }
  else {

  return (
    <div  className="card grid-item h-100 d-flex align-items-center justify-content-center " style={{width: "18rem"}}>
      

    <img className="card-img-top " src={e.ImageUrl} alt="Card image cap"/>

    <div className="card-body">
      <h5 className="card-title">{e.Product}</h5>
      <h5 className="card-title">{e.Price} DT</h5>
     

    <button id='update' onClick={()=>{toggle() ; setCard(e);}}  >update</button>


    <button id='delete' onClick={()=>{console.log("hello");
      

      axios.delete(`http://localhost:5000/prod/${e._id}`)
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
}}

export default Posts