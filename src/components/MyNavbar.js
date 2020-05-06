import React from 'react'
import {Navbar,Nav,Form} from "react-bootstrap";
import{Link} from "react-router-dom";

//render navbar
function MyNavbar() {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
             <Link to="/">
              <Navbar.Brand>Candidate Selection</Navbar.Brand>
             </Link>
             
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
              </Nav>
              <Form inline>
                <Nav.Link href="/logout">Logout</Nav.Link>
              </Form>
            </Navbar>
  
        </div>
    )
}

export default MyNavbar
