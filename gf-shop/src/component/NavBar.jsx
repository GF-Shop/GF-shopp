import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./navbar.css"



const NavBar = (props) => {

  const[fil,setFil]=useState("")
 
  return (
    <>
    <Navbar bg="success" variant="success">
      <Container>
        
        <Navbar.Brand style={{fontSize:"35px",color:"white"}} className='' href="/home">
          <img
            alt=""
            src="https://res.cloudinary.com/duqxezt6m/image/upload/v1670271803/Capture_d_écran_2022-12-05_211952-removebg-preview_w0lxlt.png"
            width="80"
            height="50"
            className="d-inline-block align-top"
          />{''}
          
        </Navbar.Brand>
        <div className="container">

            <div className="row height d-flex justify-content-center align-items-center">

              <div className="col-md-6">

                <div className="form">
                  <input type="text" className="form-control form-input" placeholder="Search anything..." onChange={(e)=>{setFil(e.target.value)}}/>
                  <button className="fa fa-search" onClick={()=>{
                    props.toggle()
                    props.searchBar(fil) }}> </button>

                  
                </div>
                
              </div>
              
            </div>
            
          </div>
      </Container>
      <Container>

        <Nav.Link href="/home" title='home'  style={{fontSize:"35px",color:"white"}} ><img  src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,w_38/v1670510023/b11itd9covkktj30nnut.png"></img></Nav.Link>

        <Nav.Link href="profile" title='help' style={{fontSize:"35px",color:"white"}} ><img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,w_38/v1670624242/p45ezik5icqufpletfwm.png"></img></Nav.Link>

            <Nav.Link href="help" title='profile' style={{fontSize:"35px",color:"white"}} ><img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,w_38/v1670512244/th95h6nnv6j1jtrgljvy.png"></img></Nav.Link>
            <Nav.Link href="add" title='add product' style={{fontSize:"35px",color:"white"}}><img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,w_38/v1670510017/yclxc3kkbe2gdrbllji0.png"></img></Nav.Link>
            

            <Nav.Link href="/" title='add product' style={{fontSize:"35px",color:"white"}} onClick={()=>{window.localStorage.clear()
            }}><img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,w_38/v1670624242/a3msn5btuh4wbbfwikir.png"></img></Nav.Link>

            
      </Container>
    </Navbar>
  </>
   
  )
}

export default NavBar