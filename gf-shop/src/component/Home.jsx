import React from 'react'
import { useState } from 'react'
import "./home.css"
const Home = ({view,filtred}) => {
    console.log(filtred,'dsqsqd');

    if(view===false){
        return(
<div className='MainDiv'>
        
   
        <div><section className="banner" >
    
        <div className="box-container">
    
            <a href="https://us.budweiser.com/" className="box">
                <img  src="https://www.oneills.co.uk/content/dam/oneills/images/2022/worldcup/hs-2022-worldcup-banner-nocta.gif.asset/1663236395590.gif" alt="greenfieldshop" />
                <div className="content">
                    
                </div>
            </a>
    
            
            
        </div>
    
    </section>
    
    
    
    <section className="arrivals">
    
        <h1 className="heading"> <span> Categories</span> </h1>
    
        <div  className="box-container">
    
    
            <div className="box" onClick={() => {
                                // console.log("cliked");
                                window.location.href = "/phones";
                              }} > 
            
                <div className="image">
                    <img  src="https://res.cloudinary.com/drd0uckic/image/upload/v1670406878/iu4vm34czonmlo9iioz2.jpg" class="main-img" alt=""/>
                    <img src="https://res.cloudinary.com/drd0uckic/image/upload/v1670406878/ubua1eu9sclgtr8lcrdm.jpg" class="hover-img" alt=""/>
                </div>
                <div className="content">
                    <h3>PHONES</h3>
                    
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
    
            <div className="box" onClick={() => {
                                // console.log("cliked");
                                window.location.href = "/vehicle";
                              }}>
                <div className="image">
                    <img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,h_304,w_304/v1670407499/sl8vlhp3jqvshxtrlieh.jpg" className="main-img" alt=""/>
                    <img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,w_304/v1670407499/c4zaascyiyfuztew1jmo.jpg" className="hover-img" alt=""/>
                </div>
                <div className="content">
                    <h3>VEHICLE</h3>
                    
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
     
            <div className="box" onClick={() => {
                                // console.log("cliked");
                                window.location.href = "/clothes";
                              }}>
                <div className="image">
                    <img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,w_404/v1670408759/tkzlijk8r7nuupliwsyc.png" className="main-img" alt=""/>
                    <img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,h_404,w_404/v1670409287/yewua6c7v7jmqita0dba.png" className="hover-img" alt=""/>
                </div>
                <div className="content">
                    <h3>CLOTHES</h3>
                    
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
    
            <div className="box" onClick={() => {
                                // console.log("cliked");
                                window.location.href = "/realEstate";
                              }}>
                <div className="image">
                    <img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,h_404,w_404/v1670409641/liuqppy6gji9txmjqyaf.png" className="main-img" alt=""/>
                    <img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,h_404,w_404/v1670409641/x6fxfwzsu9aertrujbug.png" className="hover-img" alt=""/>
                </div>
                <div className="content">
                    <h3> REAL ESTATE</h3>
                    
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
               {/* all product */}
         
    
    </div>
    
    </section>
    <section>
        <center>
        <div className='publicité' onClick={()=>window.open("https://www.orange.tn/",'_Blank')}>
    
        </div>
        </center>
    </section>
    </div>
    </div>
        )
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
      
     }} className="card-link" >more details</a>

    
  </div><div>
  
  </div>
</div>
  )})}
  </div>
  )}
}

export default Home