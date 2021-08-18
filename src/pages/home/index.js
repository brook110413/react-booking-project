import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import color from '@Style/color';
// import SearchBox from '../../components/basic/SearchBox';
import SearchBox from '@Basic/SearchBox';
import TopChoiceComponent from './components/TopChoiceComponent';
import PopularDestinationComponent from './components/PopularDestinationComponent';
import GetInspirationComponent from './components/GetInspirationComponent';

const Home = (props) => {
  return (
    <StyledWrapper>
      <div className="banner">Discover your ideal hotel</div>

      <SearchBox />

      <StyledContainer>
        <TopChoiceComponent />

        <PopularDestinationComponent />

        <GetInspirationComponent />
      </StyledContainer>
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
    font-weight: bold;
  }

  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px;
  }
`;

const StyledContainer = styled(Container)`
  padding: 0 12px 72px;
  display: flex;
  flex-direction: column;
  gap: 72px;
`;

export default Home;
