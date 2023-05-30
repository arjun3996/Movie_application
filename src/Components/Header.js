import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MovieList</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Sign In</Nav.Link>
            <Nav.Link href="/companyinfo">Company Info</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
