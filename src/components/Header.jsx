import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Navbar,
  Offcanvas,
  NavDropdown,
  Nav,
  Form,
  Container,
  Badge,
} from 'react-bootstrap';
import { IoCartOutline } from 'react-icons/io';

const Header = () => {
  let expand = false;
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/">Shopping Cart</NavLink>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /> */}
        <Navbar.Text className="search">
          <Form.Control
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <NavDropdown alignRight>
            <NavDropdown.Toggle variant="success">
              <IoCartOutline color="white" fontSize="25px" />
            </NavDropdown.Toggle>
            {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
