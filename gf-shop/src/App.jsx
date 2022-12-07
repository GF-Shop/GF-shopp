
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
import { CDBFooter } from 'cdbreact';
import { Routes, Route } from "react-router-dom";
function App() {
  const [data, setData] = useState([]);
  const [phones, setPhones] = useState([]);
  const [clothes, setClothes] = useState([]);
  const [realEstate, setRealEstate] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  console.log(data);
  console.log(phones);
  console.log(vehicle);
  useEffect(() => {
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

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route>
          <Route path="/home" element={<Home />} />
          <Route path="/phones" element={<Phones phones={phones} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vehicle" element={<Vehicle vehicle={vehicle} />} />
          <Route path="/realEstate"element={<RealEstate realEstate={realEstate} />}/>
          <Route path="/clothes" element={<Clothes clothes={clothes} />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/help" element={<Help />} />

        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
