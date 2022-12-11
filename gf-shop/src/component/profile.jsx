import React from 'react'
import jwt_decode from 'jwt-decode'
import Posts from "./Posts.jsx"
import './profile.css'
import axios from 'axios'
const Profile = (props) => {
console.log(jwt_decode(localStorage.getItem('token')));
  return (
    <>  <section>
  <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
    {" "}
    <div className="card p-4">
      {" "}
      <div className=" image d-flex flex-column justify-content-center align-items-center">
        {" "}
        <button className="btn btn-secondary">
          {" "}
          <img src="https://res.cloudinary.com/dqz0n291c/image/upload/v1670754542/2289_SkVNQSBGQU1PIDEwMjgtMTIy_nrflzd.jpg" height={100} width={100} />
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
        
        <Posts e={e} key={i}/>
  )})}
  </div>
  </section>
  </>

  )
}

export default Profile