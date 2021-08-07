import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { AiOutlineGlobal } from 'react-icons/ai';

import color from '@Style/color';
import { device } from '@Style/browser';

const Header = (props) => {
  return (
    <div>
      <StyledNavbar expand="md">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand href="#">
          <Image src="images/logo-aloha.svg" />
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <StyledNav>
            <NavDropdown
              title={<AiOutlineGlobal size={20} />}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Sign up</Nav.Link>
          </StyledNav>
        </Navbar.Collapse>
        <StyledLoginLink href="#action2" class="login">
          Login
        </StyledLoginLink>
      </StyledNavbar>
    </div>
  );
};

const StyledNavbar = styled(Navbar)`
  padding: 24px 85px;

  ${device.tablet} {
    padding: 24px 40px;
  }

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

Header.propTypes = {};

export default Header;
