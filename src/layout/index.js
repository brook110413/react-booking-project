import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const Layout = (props) => {
  return (
    <StyledWrapper>
      <Header />
      <Main />
      <Footer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

Layout.propTypes = {};

export default Layout;
