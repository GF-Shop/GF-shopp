import React from 'react'
import "./footer.css"



const Footer = () => {

  return (
    <footer className='footer' >
    <section className="quick-links">

     
    <a href="/" className="d-inline-block align-top"> <img className="logoo"  src="https://images-ext-1.discordapp.net/external/HBEF4ywVpohZSvii-6juUSNp2WexorEJKxt67lF4UXU/https/res.cloudinary.com/duqxezt6m/image/upload/v1670271803/Capture_d_%25C3%25A9cran_2022-12-05_211952-removebg-preview_w0lxlt.png"/> </a>


    <div className="links">
        <a href="/home"> home </a>

        
        <a href="Help"> about </a>
        <a href="/login"> login </a>
        <a href="/signup"> register </a>
       
    </div>

    <div className="share">
        <a href="https://fr-fr.facebook.com/" className="fab fa-facebook-f"></a>
        <a href="https://twitter.com/?lang=fr" className="fab fa-twitter"></a>
        <a href="https://www.instagram.com/?hl=fr" className="fab fa-instagram"></a>
        <a href="https://www.linkedin.com/" className="fab fa-linkedin"></a>
    </div>

</section>

<section className="credit">

    <p > created by <span>A.W.A</span> | all rights reserved! </p>
<img src="https://res.cloudinary.com/drd0uckic/image/upload/v1670420455/qcdauudpnadpxituim1b.png" alt=""/>

</section>
</footer>
  )
}

export default Footer