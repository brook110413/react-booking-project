import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import Home from '@Pages/home';

const Main = (props) => {
  return (
    <StyledWrapper>
      <Home />
      <Container></Container>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  flex: 1;
`;

Main.propTypes = {};

export default Main;
