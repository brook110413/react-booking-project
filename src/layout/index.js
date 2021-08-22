import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { setCount } from '@Actions/globalAction';

import Header from './components/Header';
import Footer from './components/Footer';

const Layout = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const initCount = () => {
    dispatch(setCount(0));
  };

  useEffect(() => {
    initCount();
  }, [location.pathname]);

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
  min-height: 100vh;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
