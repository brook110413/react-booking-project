import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

const Layout = (props) => {
  return (
    <StyledWrapper>
      <Header />
      {props.children}
      <Footer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
