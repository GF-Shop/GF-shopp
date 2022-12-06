import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';  

import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';

const NavBar = () => {
  return (

    <div>
<header class="header">

<a href="/home" class="logo"> <img className="logoo"  src="https://images-ext-1.discordapp.net/external/HBEF4ywVpohZSvii-6juUSNp2WexorEJKxt67lF4UXU/https/res.cloudinary.com/duqxezt6m/image/upload/v1670271803/Capture_d_%25C3%25A9cran_2022-12-05_211952-removebg-preview_w0lxlt.png"/> Green Field Shop </a>

<form action="" class="search-form">
    <input type="search" id="search-box" placeholder="search here..."/>
    <label for="search-box" class="fas fa-search"></label>
</form>

<div class="icons">
    <div id="menu-btn" class="fas fa-bars"></div>
    <div id="search-btn" class="fas fa-search"></div>
    <a href="login.html" class="fas fa-user"></a>
    <a href="#" class="fas fa-heart"></a>
    <a href="cart.html" class="fas fa-shopping-cart"></a>
</div>

</header>
<div class="side-bar">

    <div id="close-side-bar" class="fas fa-times"></div>

    <div class="user">
        <img src="images/user-img.png" alt=""/>
        <h3>shaikh anas</h3>
        <a href="#">log out</a>
    </div>

    <nav class="navbar">
        <a href="home.html"> <i class="fas fa-angle-right"></i> home </a>
        <a href="about.html"> <i class="fas fa-angle-right"></i> about </a>
        <a href="products.html"> <i class="fas fa-angle-right"></i> products </a>
        <a href="contact.html"> <i class="fas fa-angle-right"></i> contact </a>
        <a href="login.html"> <i class="fas fa-angle-right"></i> login </a>
        <a href="register.html"> <i class="fas fa-angle-right"></i> register </a>
        <a href="cart.html"> <i class="fas fa-angle-right"></i> cart </a>
    </nav>

</div>


</div>
  )
}

export default NavBar