import React from 'react'
import jwt_decode from 'jwt-decode'

const profile = (props) => {
 
  return (
    <>  <section>
      {console.log(jwt_decode(localStorage.getItem('token')).User)}
  <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
    {" "}
    <div className="card p-4">
      {" "}
      <div className=" image d-flex flex-column justify-content-center align-items-center">
        {" "}
        <button className="btn btn-secondary">
          {" "}
          <img src="https://i.imgur.com/wvxPV9S.png" height={100} width={100} />
        </button>{" "}
        <span className="name mt-3">{jwt_decode(localStorage.getItem('token')).User}</span>{" "}
       
       
        
        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
          {" "}
          <span className="idd1"></span>{" "}
          
       
          
        </div>{" "}
        
     
      </div>{" "}
    </div>
  </div>
  </section>
  <section>
  <div className="grid-container ">
     {props.profile.map((e,i)=>{

       return(
        
    <div key={i} className="card grid-item" style={{width: "18rem"}}>
      
  <img className="card-img-top" src={e.ImageUrl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{e.Product}</h5>
    <h5 className="card-title">{e.Price} DT</h5>

    <p className="card-text"></p>
  </div>

  <div className="card-body">
   

    
  </div><div>
  
  </div>
</div>
  )})}
  </div>
  </section>
  </>

  )
}

export default profile