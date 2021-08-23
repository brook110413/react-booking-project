import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import SearchBox from '@Components/SearchBox';
import PopOutComponent from '@Components/PopOutComponent';
import color from '@Style/color';

import SwiperComponent from './components/SwiperComponent';
import Main from './components/Main';
import RoomType from './components/RoomType';

const Detail = () => {
  return (
    <StyledWrapper>
      <StyledSearchBoxWrapper>
        <Container>
          <SearchBox />
        </Container>
      </StyledSearchBoxWrapper>

      <StyledContainer>
        <SwiperComponent />

        <Main />

        <RoomType />
      </StyledContainer>
      <PopOutComponent />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

const StyledContainer = styled(Container)`
  padding-top: 24px;
`;

const StyledSearchBoxWrapper = styled.div`
  background-color: ${color.secondary};
  position: sticky;
  top: 85px;
  z-index: 10;
`;

Detail.propTypes = {};

export default Detail;
