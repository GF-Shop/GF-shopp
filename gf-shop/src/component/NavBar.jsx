import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'



const NavBar = () => {
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
          />{' '}
        </Navbar.Brand>
        
      </Container>
      <Container>
        <Nav.Link href="home" title='home'  style={{fontSize:"35px",color:"white"}} ><i  class="fa fa-user-circle" aria-hidden="true"></i></Nav.Link>
            <Nav.Link href="help" title='help' style={{fontSize:"35px",color:"white"}} ><i class="fa fa-info-circle" aria-hidden="true"></i></Nav.Link>
            <Nav.Link href="add" title='add product' style={{fontSize:"35px",color:"white"}}><i class="fa fa-plus" aria-hidden="true"></i></Nav.Link>
      </Container>
    </Navbar>
  </>
   
  )
}

export default NavBar