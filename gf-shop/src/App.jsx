
import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import Login from "./component/Login.jsx"
import Footer from './component/Footer.jsx';
import NavBar from './component/NavBar.jsx';
<<<<<<< HEAD
import Phones from './component/Phones.jsx';
import Clothes from "./component/Clothes.jsx"
import Signup from "./component/Signup.jsx"
=======

import Phones from './component/phones.jsx';
import Clothes from "./component/clothes.jsx"
import Home from './component/Home.jsx';



>>>>>>> fbb8a2fed86061dfae72ed856dce5471fb058f72
import RealEstate from './component/RealEstate.jsx';
import axios from "axios";
import Vehicle from './component/Vehicle.jsx'
import {Routes,Route} from "react-router-dom"
function App() {

  const [data,setData]=useState([])
  const [phones,setPhones]=useState([])
  const [clothes,setClothes]=useState([])
  const [realEstate,setRealEstate]=useState([])

  const [vehicle,setVehicle]=useState([])
  console.log(data);
  console.log(phones);
  console.log(vehicle);
    useEffect(()=>{
      axios.get("http://localhost:5000/prod/prod").then(async res=>{
        
       await setData(res.data)
    
      await setPhones(res.data.filter((element)=>{return element.Category==="phone"}))
      await setVehicle(res.data.filter((element)=>{return element.Category==="vehicle"}))
      await setClothes(res.data.filter((element)=>{return element.Category==="clothes"}))
      await setRealEstate(res.data.filter((element)=>{return element.Category==="real estate"}))


    })
    },[])
  

  return (
    <div className="App">
    <NavBar />  
 <Routes>
   <Route>
   <Route path='/home' element={< Home />}/>
 <Route path='/phones' element={< Phones phones={phones} />}/>
 <Route path='/login' element={< Login />}/>
 <Route path='/vehicle' element={< Vehicle vehicle={vehicle}/>}/>
 <Route path='/realEstate' element={< RealEstate realEstate={realEstate}/>}/>
 <Route path='/clothes' element={< Clothes clothes={clothes}/>}/>
 <Route path='/signup' element={< Signup />}/>
 
   </Route>
 </Routes>
     < Footer/>
         </div>
  );
}

export default App;
