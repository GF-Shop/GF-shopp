
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
import ProductCard from "./component/ProductCard.jsx";
import Profile from "./component/Profile.jsx";
import Update from "./component/Update";
import Searchh from "./component/Searchh.jsx";

function App() {
  const [data, setData] = useState([]);
  const [filtred, setFiltred] = useState([]);
const [userLoggedIn,setUser]=useState({})
  const [phones, setPhones] = useState([]);
  const [clothes, setClothes] = useState([]);
  const [realEstate, setRealEstate] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [card,setCard]=useState('')
  const [profile,setProfile]=useState([])
  const [username,setUsername]=useState([])
  const [show,setShow]=useState(false)
console.log(filtred,'filtred');

  
const toggle=()=>{
  let she=!show
  setShow(she)
  }

  const ChangeCard=async(optin)=>{
 
 await setCard(optin)
  }

  
  useEffect(() => {
const token=localStorage.getItem('token')
// console.log(token);
if(token){
  setUsername(jwt_decode(token))
  
  if(!username){
    localStorage.removeItem('token')
  }
  else{
    axios.get(`http://localhost:5000/prod/${username.User}`).then( (res)=>{
     
  setUser(res.data)
    
})
  }
}


    axios.get("http://localhost:5000/prod/prod").then( (res) => {
       setData(res.data);

       setPhones(
        res.data.filter((element) => {
          return element.Category === "phone";
        })
      );
       setVehicle(
        res.data.filter((element) => {
          return element.Category === "vehicle";
        })
      );
       setClothes(
        res.data.filter((element) => {
          return element.Category === "clothes";
        })
      );
       setRealEstate(
        res.data.filter((element) => {
          return element.Category === "real estate";
        })
      );
       setProfile(
        res.data.filter((element) => {
          return element.User == jwt_decode(token).User
        })
      );
    });
  }, []);

  const searchBar= (prod)=>{ 
    setFiltred(data.filter((e)=>e.Product.includes(prod)))
 
    
  }



  return (
  
      

    <div className="App"  >
      <div className="main" style={{ 

    backgroundImage: `url("https://st3.depositphotos.com/2101611/15493/i/600/depositphotos_154935546-stock-photo-white-blur-abstract-background.jpg")` 

  }}>
  <NavBar toggle={toggle} searchBar={searchBar}  />
     

      <Routes>
        <Route>
          <Route path="/home" element={<Home toggle={toggle} view={show}  filtred={filtred}/> } />

          <Route path="/phones" element={<Phones phones={phones} ChangeCard={ChangeCard} />} />
         

          <Route path="/" element={<Login />} />
          <Route path="/vehicle" element={<Vehicle vehicle={vehicle} />} />
          <Route path="/realEstate"element={<RealEstate realEstate={realEstate} />}/>
          <Route path="/clothes" element={<Clothes clothes={clothes} />} />
          <Route path="/add" element={<AddProduct userLoggedIn={userLoggedIn}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/help" element={<Help />} />
          <Route path="/profile" element={<Profile profile={profile} user={userLoggedIn}  />} />
          <Route path="/productcard" element={<ProductCard card={card}/>} />
          <Route path="/search" element={<Searchh filtred={filtred}/>} />
          

        </Route>
      </Routes>
     
      <Footer /> </div>
    </div>
    
  );
}

export default App;
