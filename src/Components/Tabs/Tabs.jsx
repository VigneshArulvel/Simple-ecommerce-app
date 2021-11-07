import * as ReactBootstrap from "react-bootstrap";
import './Tabs.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Tabs({tabClicked}) {
  return (
    <ReactBootstrap.Container fluid id = "navBarTabs">
        <>
          <Navbar collapseOnSelect id = "navbarHeader" expand = "sm" bg="primary" variant="dark">
            <ReactBootstrap.Container id = "baseNavBar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" onClick={() => {tabClicked("Home");}}>HOME</Nav.Link>
                <Nav.Link href="#products" onClick={() => {tabClicked("Products");}}>PRODUCTS</Nav.Link>
                <Nav.Link href="#aboutus" onClick={() => {tabClicked("AboutUs");}}>ABOUT US</Nav.Link>
                <Nav.Link href="#contactus" onClick={() => {tabClicked("ContactUs");}}>CONTACT US</Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </ReactBootstrap.Container>
          </Navbar>
        </>
    </ReactBootstrap.Container>
  );
}

export default Tabs;
