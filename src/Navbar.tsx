// src/Navbar.tsx

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const NavbarComponent: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src="/logo-color.png" alt="FlosyHomeGroup Logo" className="logo me-2" />
          FlosyHomeGroup
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Use ms-auto for margin-start auto (right alignment) */}
            <Nav.Link href='https://wa.me/40739564737'>Număr: +0739564737</Nav.Link>
            <a 
              href="https://wa.me/40739564737?text=Sunt%20interesat%20de%20un%20deviz%20gratuit:"
              className="btn btn-outline-success my-2 my-sm-0 ms-2">
              Deviz Gratuit
            </a> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;