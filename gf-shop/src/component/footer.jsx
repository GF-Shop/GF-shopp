import React from 'react'



import { MDBFooter } from 'mdb-react-ui-kit'
const Footer = () => {

  return (
    <footer className='footer'>
    <section class="quick-links">

    <a href="/home" class="logo"> <img className="logoo"  src="https://images-ext-1.discordapp.net/external/HBEF4ywVpohZSvii-6juUSNp2WexorEJKxt67lF4UXU/https/res.cloudinary.com/duqxezt6m/image/upload/v1670271803/Capture_d_%25C3%25A9cran_2022-12-05_211952-removebg-preview_w0lxlt.png"/> Green Field Shop </a>

    <div class="links">
        <a href="/home"> home </a>
        <a href="Help"> about </a>
        <a href="/login"> login </a>
        <a href="/signup"> register </a>
       
    </div>

    <div class="share">
        <a href="#" class="fab fa-facebook-f"></a>
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fab fa-instagram"></a>
        <a href="#" class="fab fa-linkedin"></a>
    </div>

</section>

<section class="credit">

    <p> created by <span>A.W.A</span> | all rights reserved! </p>

    <img src="images/card_img.png" alt=""/>

</section>
</footer>
  )
}

export default Footer