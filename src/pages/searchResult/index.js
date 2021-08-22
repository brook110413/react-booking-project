import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import SearchBox from '@Basic/SearchBox';
import color from '@Style/color';

import AsideFilterComponent from './components/AsideFilterComponent';
import HotelItem from './components/HotelItem';

const SearchResult = () => {
  return (
    <StyledWrapper>
      <StyledSearchBoxWrapper>
        <Container>
          <SearchBox />
        </Container>
      </StyledSearchBoxWrapper>

      <Container>
        <div className="h2 fw-bold py-4 m-0">Bangkok</div>
        <Row>
          <Col lg={4}>
            <AsideFilterComponent />
          </Col>
          <Col lg={8}>
            <HotelItem />
          </Col>
        </Row>
      </Container>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .hotelItemWrapper {
    border-bottom: 1px solid ${color.secondary};
    margin-bottom: 24px;

    &:last-child {
      border-bottom: none;
    }

    .hotelItemImg {
      object-fit: cover;
      object-position: center;
      width: 235px;
      height: 175px;
      border-radius: 8px 0px 0px 8px;
    }

    .hotelItemMain {
      padding: 16px 16px 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;

      .hotelItemLocation {
        font-size: 12px;
      }

      .hotelTag {
        background-color: ${color.secondary};
        border-radius: 13px;
        font-size: 12px;
        padding: 8px;
        margin-right: 4px;
      }
    }
  }
`;

const StyledSearchBoxWrapper = styled.div`
  background-color: ${color.secondary};
  position: sticky;
  top: 85px;
  z-index: 10;
`;

SearchResult.propTypes = {};

export default SearchResult;
