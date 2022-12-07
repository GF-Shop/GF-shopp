import React from 'react'
import "./home.css"
const Home = () => {
  return (
    <body>
        
   
    <div><section class="banner" >

    <div class="box-container">

        <a href="https://www.google.com/search?q=world+cup+result&sxsrf=ALiCzsbTN-RyAv6uEtIBCmW_ClNTDicgMQ%3A1670405787558&ei=m16QY67XIbaBi-gP5r6zmAQ&ved=0ahUKEwjukOS8muf7AhW2wAIHHWbfDEMQ4dUDCA8&uact=5&oq=world+cup+result&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIQCAAQgAQQsQMQgwEQRhD9ATILCAAQgAQQsQMQgwEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBDLAToKCAAQRxDWBBCwAzoHCAAQsAMQQzoKCAAQsQMQgwEQQzoECAAQQzoFCAAQgAQ6BQguEIAEOhAIABCABBCHAhCxAxCDARAUSgQIQRgASgQIRhgAUIYEWKwOYJcPaAFwAHgAgAFxiAGmBZIBAzUuMpgBAKABAcgBCsABAQ&sclient=gws-wiz-serp#sie=lg;/m/0fp_8fm;2;/m/030q7;mt;fp;1;;;" class="box">
            <img  src="http://res.cloudinary.com/duqxezt6m/image/upload/c_scale,h_600,w_1900/v1670273152/1200x0_rz1gn1.jpg" alt="greenfieldshop" />
            <div class="content">
                
            </div>
        </a>

        
        
    </div>

</section>



<section class="arrivals">

    <h1 class="heading"> Our <span>Categories</span> </h1>

    <div hr class="box-container">

        <div class="box" onClick={() => {
                            console.log("cliked");
                            window.location.href = "/phones";
                          }} > 
        
            <div class="image">
                <img  src="https://res.cloudinary.com/drd0uckic/image/upload/v1670406878/iu4vm34czonmlo9iioz2.jpg" class="main-img" alt=""/>
                <img src="https://res.cloudinary.com/drd0uckic/image/upload/v1670406878/ubua1eu9sclgtr8lcrdm.jpg" class="hover-img" alt=""/>
            </div>
            <div class="content">
                <h3>PHONES</h3>
                
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>
        </div>

        <div class="box" onClick={() => {
                            console.log("cliked");
                            window.location.href = "/vehicle";
                          }}>
            <div class="image">
                <img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,h_304,w_304/v1670407499/sl8vlhp3jqvshxtrlieh.jpg" class="main-img" alt=""/>
                <img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,w_304/v1670407499/c4zaascyiyfuztew1jmo.jpg" class="hover-img" alt=""/>
            </div>
            <div class="content">
                <h3>VEHICLE</h3>
                
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>
        </div>
 
        <div class="box" onClick={() => {
                            console.log("cliked");
                            window.location.href = "/clothes";
                          }}>
            <div class="image">
                <img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,w_404/v1670408759/tkzlijk8r7nuupliwsyc.png" class="main-img" alt=""/>
                <img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,h_404,w_404/v1670409287/yewua6c7v7jmqita0dba.png" class="hover-img" alt=""/>
            </div>
            <div class="content">
                <h3>CLOTHES</h3>
                
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>
        </div>

        <div class="box" onClick={() => {
                            console.log("cliked");
                            window.location.href = "/realEstate";
                          }}>
            <div class="image">
                <img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,h_404,w_404/v1670409641/liuqppy6gji9txmjqyaf.png" class="main-img" alt=""/>
                <img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,h_404,w_404/v1670409641/x6fxfwzsu9aertrujbug.png" class="hover-img" alt=""/>
            </div>
            <div class="content">
                <h3> REAL ESTATE</h3>
                
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>
        </div>

       
        

    </div>

</section>
</div>
</body>
  )
}

export default Home