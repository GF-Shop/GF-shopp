import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  



const NavBar = () => {
  return (

    <div><header class="header">

<a href="/home" class="logo"> <img className="logoo"  src="https://images-ext-1.discordapp.net/external/HBEF4ywVpohZSvii-6juUSNp2WexorEJKxt67lF4UXU/https/res.cloudinary.com/duqxezt6m/image/upload/v1670271803/Capture_d_%25C3%25A9cran_2022-12-05_211952-removebg-preview_w0lxlt.png"/> Green Field Shop </a>

<form action="" class="search-form">
    <input type="search" id="search-box" placeholder="search here..."/>
    <label for="search-box" class="fas fa-search"></label>
</form>

<div class="icons">
    <div id="search-btn" class="fas fa-search"></div>
    <a href="login" title='login' class="fa fa-user" aria-hidden="true" ></a>
    <a href="help" title='Help' class="fa fa-question-circle"></a>
    <a href="add" title='add product' class="fa fa-plus" ></a>
   
</div>

</header>



</div>
  )
}

export default NavBar