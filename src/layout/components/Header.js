import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <Image src="images/logo-aloha.svg" />
          </Navbar.Brand>
          <StyledNav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Sign up</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </StyledNav>
        </Container>
      </Navbar>
    </div>
  );
};

const StyledNav = styled(Nav)`
  gap: 48px;
`;

Header.propTypes = {};

export default Header;
