import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import SearchBox from '@Components/SearchBox';
import color from '@Style/color';
import { device } from '@/style/browser';

import AsideFilterComponent from './components/AsideFilterComponent';
import HotelItem from './components/HotelItem';

const SearchResult = () => {
  const searchCondition = useSelector((state) => state.global.searchCondition);

  const isDesktop = useMediaQuery({
    query: '(max-width: 991px)',
  });

  return (
    <StyledWrapper>
      <StyledSearchBoxWrapper>
        <Container>
          <SearchBox />
        </Container>
      </StyledSearchBoxWrapper>

      <Container>
        <Row>
          <Col lg={4}>
            <StyledStickyAside>
              <div className="h2 fw-bold py-4 m-0">
                {searchCondition.destination}
              </div>
              <AsideFilterComponent />
            </StyledStickyAside>
          </Col>
          <Col lg={8}>
            {!isDesktop && (
              <div
                className="h2 fw-bold py-4 m-0 "
                style={{ visibility: 'hidden' }}
              >
                {searchCondition.destination}
              </div>
            )}

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

      ${device.wideMobile} {
        width: 150px;
        height: 150px;
      }
    }

    .hotelItemMain {
      padding: 16px 16px 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;

      ${device.wideMobile} {
        padding: 8px 8px 0;
      }

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

    .hotelItemName {
      font-size: 24px;

      ${device.wideMobile} {
        font-size: 16px;
        margin-top: 8px;
      }
    }

    .hotelCost {
      font-size: 24px;

      ${device.wideMobile} {
        font-size: 16px;
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

const StyledStickyAside = styled.div`
  position: sticky;
  top: 190px;

  ${device.desktop} {
    text-align: center;
  }
`;

SearchResult.propTypes = {};

export default SearchResult;
