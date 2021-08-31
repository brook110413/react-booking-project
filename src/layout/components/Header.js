import React from 'react';
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import styled from 'styled-components';

import color from '@Style/color';

const Header = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledNavbar expand="md">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Brand href="#">
            <Image src="images/logo-aloha.svg" />
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <StyledNav>
              {/* <NavDropdown
                title={<AiOutlineGlobal size={20} />}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item>CN</NavDropdown.Item>
                <NavDropdown.Item>EN</NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link>Sign up</Nav.Link>
            </StyledNav>
          </Navbar.Collapse>
          <StyledLoginLink>Login</StyledLoginLink>
        </StyledNavbar>
      </Container>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: ${color.white};
  z-index: 10;
`;

const StyledNavbar = styled(Navbar)`
  padding: 24px 0;

  .nav-link {
    color: ${color.black} !important;
    padding: 0 !important;
  }
`;

const StyledNav = styled(Nav)`
  gap: 48px;
  margin-left: auto;
  align-items: center;

  .dropdown-toggle {
    display: flex;
    align-items: center;
  }
`;

const StyledLoginLink = styled(Nav.Link)`
  color: ${color.black};
  margin-left: 48px;
`;

export default Header;
