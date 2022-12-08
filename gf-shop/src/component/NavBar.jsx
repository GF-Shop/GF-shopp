import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./navbar.css"


const NavBar = ({searchBar}) => {

  const[fil,setFil]=useState("")
  console.log(fil);
  return (
    <>
    <Navbar bg="success" variant="success">
      <Container>
        
        <Navbar.Brand style={{fontSize:"35px",color:"white"}} className='' href="home">
          <img
            alt=""
            src="https://res.cloudinary.com/duqxezt6m/image/upload/v1670271803/Capture_d_écran_2022-12-05_211952-removebg-preview_w0lxlt.png"
            width="80"
            height="50"
            className="d-inline-block align-top"
          />{''}
          
        </Navbar.Brand>
        <div class="container">

            <div class="row height d-flex justify-content-center align-items-center">

              <div class="col-md-6">

                <div class="form">
                  <input type="text" class="form-control form-input" placeholder="Search anything..." onChange={(e)=>{setFil(e.target.value)}}/>
                  <i class="fa fa-search" onClick={()=>{searchBar(fil)}}> </i>

                  
                </div>
                
              </div>
              
            </div>
            
          </div>
      </Container>
      <Container>

        <Nav.Link href="/" title='home'  style={{fontSize:"35px",color:"white"}} ><img  src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,w_38/v1670510023/b11itd9covkktj30nnut.png"></img></Nav.Link>

            <Nav.Link href="help" title='help' style={{fontSize:"35px",color:"white"}} ><img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,w_38/v1670512244/th95h6nnv6j1jtrgljvy.png"></img></Nav.Link>
            <Nav.Link href="add" title='add product' style={{fontSize:"35px",color:"white"}}><img src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,w_38/v1670510017/yclxc3kkbe2gdrbllji0.png"></img></Nav.Link>
      </Container>
    </Navbar>
  </>
   
  )
}

export default NavBar