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
            width="70"
            height="60"
            className="d-inline-block align-top"
          />{'Green Field Store '}
          
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
        <Nav.Link href="home" title='home'  style={{fontSize:"35px",color:"white"}} ><img  src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,h_30,w_30/v1670503386/ko2xsiobi3tjplihsyny.png"></img></Nav.Link>
            <Nav.Link href="help" title='help' style={{fontSize:"35px",color:"white"}} ><i class="fa fa-info-circle" aria-hidden="true"></i></Nav.Link>
            <Nav.Link href="add" title='add product' style={{fontSize:"35px",color:"white"}}><i class="fa fa-plus" aria-hidden="true"></i></Nav.Link>
      </Container>
    </Navbar>
  </>
   
  )
}

export default NavBar