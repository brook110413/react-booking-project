import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import color from '@Style/color';

const Home = (props) => {
  return (
    <StyledWrapper>
      <div className="banner">Discover your ideal hotel</div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .banner {
    height: 320px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(images/index-banner.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color.white};
    font-size: 48px;
    font-family: 'Raleway', sans-serif;
  }
`;

Home.propTypes = {};

export default Home;
