import React from "react";
import "./Help.css";

const Help = () => {
  return (
    <div>
      <div className="about-section">
        <h1>About Us </h1>
        <h5>
          G-F-S :
          Green Field Shop is a platform that allows the users to buy and
          sell all the categories of products this is a project whish is
          Customer to customer (C2C) is a business model whereby customers can
          trade with each other, typically in an online environment. Two
          implementations of C2C markets are auctions and classified
          advertisements. C2C marketing has soared in popularity with the
          arrival of the internet prices .
        </h5>
        <p>
          Your Confort is Our Priority
        </p>
      </div>

      <h2>Our Team</h2>
      <div className="">
        <div className="column"  style={{ width: "33%"  }}>
          <div className="card" >
            <img
              src="https://res.cloudinary.com/duqxezt6m/image/upload/v1670418836/IMG_0166_wewvtd.jpg"
              alt=""
              style={{ width: "100%" , height:"70%" }}
            />
            <div className="container">
              <h2>Walid Slim</h2>
              <p className="title">CEO & Founder</p>
              
              <p>walid-sliim@gmail.com</p>
              
            </div>
          </div>
        </div>

        <div className="column"  style={{ width: "33%" }}>
          <div className="card">
            <img src="https://res.cloudinary.com/duqxezt6m/image/upload/v1670418835/IMG_0168_jjtbyu.jpg" alt="" style={{ width: "100%" }} />
            <div className="container">
              <h2>Aziz Selini</h2>
              <p className="title">Art Director</p>
         
              <p>aziz.selini@gmail.com</p>
            
            </div>
          </div>
        </div>

        <div className="column"  style={{ width: "33%" }}>
          <div className="card">
            <img
              src="https://res.cloudinary.com/duqxezt6m/image/upload/v1670418835/IMG_0167_lyaqbp.jpg"
              alt=""
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Abderrahim Ouertani</h2>
              <p className="title">Scrum Master</p>
             
              <p>Abderrahim.Ouertani@gmail.com</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
