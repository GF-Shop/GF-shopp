import React from 'react'




const Footer = () => {

  return (
    <footer className='footer'>
    <section className="quick-links">

    <a href="/home" className="logo"> <img className="logoo"  src="https://images-ext-1.discordapp.net/external/HBEF4ywVpohZSvii-6juUSNp2WexorEJKxt67lF4UXU/https/res.cloudinary.com/duqxezt6m/image/upload/v1670271803/Capture_d_%25C3%25A9cran_2022-12-05_211952-removebg-preview_w0lxlt.png"/> Green Field Shop </a>

    <div className="links">
        <a href="/home"> home </a>

        
        <a href="Help"> about </a>
        <a href="/login"> login </a>
        <a href="/signup"> register </a>
       
    </div>

    <div className="share">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
    </div>

</section>

<section className="credit">

    <p> created by <span>A.W.A</span> | all rights reserved! </p>
<img src="https://res.cloudinary.com/drd0uckic/image/upload/v1670420455/qcdauudpnadpxituim1b.png" alt=""/>

</section>
</footer>
  )
}

export default Footer