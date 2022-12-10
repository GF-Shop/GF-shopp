
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import AddProduct from "./component/AddProduct.jsx";
import Login from "./component/Login.jsx";
import Help from "./component/Help.jsx";
import Footer from "./component/Footer.jsx";
import NavBar from "./component/NavBar.jsx";
import Phones from "./component/Phones.jsx";
import Clothes from "./component/Clothes.jsx";
import Home from "./component/Home.jsx";
import Signup from "./component/Signup.jsx";
import RealEstate from "./component/RealEstate.jsx";
import axios from "axios";
import Vehicle from "./component/Vehicle.jsx";
import { Routes, Route } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import ProductCard from "./component/ProductCard";

function App() {
  const [data, setData] = useState([]);
  const [filtred, setFiltred] = useState([]);
const [userLoggedIn,setUser]=useState('')
  const [phones, setPhones] = useState([]);
  const [clothes, setClothes] = useState([]);
  const [realEstate, setRealEstate] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [card,setCard]=useState('')
 console.log(userLoggedIn,'hi');
  const ChangeCard=async(optin)=>{
    console.log(optin);
await setCard(optin)
  }
  console.log(data);
  console.log(filtred);
  useEffect(() => {
const token=localStorage.getItem('token')
console.log(token,'token');
if(token){
  const username=jwt_decode(token)
  console.log(username,'user')
  if(!username){
    localStorage.removeItem('token')
  }
  else{
    axios.get(`http://localhost:5000/prod/${username.User}`).then(res=>{
      console.log(res.data,'res.dataata');
setUser(res.data)
    })
  }
}


    axios.get("http://localhost:5000/prod/prod").then(async (res) => {
      await setData(res.data);

      await setPhones(
        res.data.filter((element) => {
          return element.Category === "phone";
        })
      );
      await setVehicle(
        res.data.filter((element) => {
          return element.Category === "vehicle";
        })
      );
      await setClothes(
        res.data.filter((element) => {
          return element.Category === "clothes";
        })
      );
      await setRealEstate(
        res.data.filter((element) => {
          return element.Category === "real estate";
        })
      );
    });
  }, []);

  const searchBar= (prod)=>{  
    setFiltred(data.filter((e)=>e.Product.includes(prod)))
  }

  return (
  
  
    
  

    
      
      

    <div className="App"  >
      <body className="main" style={{ 

    backgroundImage: `url("https://st3.depositphotos.com/2101611/15493/i/600/depositphotos_154935546-stock-photo-white-blur-abstract-background.jpg")` 

  }}>
  <NavBar searchBar={searchBar} />
     

      <Routes>
        <Route>
          <Route path="" element={<Home filtred={filtred}/>} />
          <Route path="/phones" element={<Phones phones={phones} ChangeCard={ChangeCard} />} />

          <Route path="/login" element={<Login />} />
          <Route path="/vehicle" element={<Vehicle vehicle={vehicle} />} />
          <Route path="/realEstate"element={<RealEstate realEstate={realEstate} />}/>
          <Route path="/clothes" element={<Clothes clothes={clothes} />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/help" element={<Help />} />

          <Route path="/productcard" element={<ProductCard card={card}/>} />


        </Route>
      </Routes>
     
      <Footer /> </body>
    </div>
    
  );
}

export default App;
