import React from 'react'
import jwt_decode from 'jwt-decode'
import Posts from "./posts.jsx"
import './profile.css'
import axios from 'axios'
const Profile = (props) => {

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
        
        <Posts e={e} key={i}/>
  )})}
  </div>
  </section>
  </>

  )
}

export default Profile