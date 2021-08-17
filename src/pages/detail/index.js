import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import SearchBox from '@Basic/SearchBox';
import color from '@Style/color';

const Detail = (props) => {
  return (
    <StyledWrapper>
      <StyledSearchBoxWrapper>
        <Container>
          <SearchBox />
        </Container>
      </StyledSearchBoxWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

const StyledSearchBoxWrapper = styled.div`
  background-color: ${color.secondary};
  position: sticky;
  top: 85px;
  z-index: 10;
`;

Detail.propTypes = {};

export default Detail;
