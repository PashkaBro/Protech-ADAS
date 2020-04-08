import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';


function Header() {
  return (
    <div className="Header" >

      <Navbar variant='dark' bg='dark' expand="lg" fixed='top'>
        <Navbar.Brand href="#home" ul='Search'>ADAS Calibration Requirements</Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/*<Nav.Link href="#home">link</Nav.Link>*/}
            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
            {/*  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
            {/*  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
            {/*  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
            {/*  <NavDropdown.Divider />*/}
            {/*  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
            {/*</NavDropdown>*/}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
}

export default Header;
