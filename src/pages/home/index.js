import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useMediaQuery } from 'react-responsive';

import color from '@Style/color';
import { device } from '@/style/browser';
import SearchBox from '@Components/SearchBox';

import TopChoiceComponent from './components/TopChoiceComponent';
import PopularDestinationComponent from './components/PopularDestinationComponent';
import GetInspirationComponent from './components/GetInspirationComponent';

import { setInitState } from '@Actions/globalAction';

const Home = () => {
  const dispatch = useDispatch();
  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const isCheckOutValidate = useSelector(
    (state) => state.global.isCheckOutValidate
  );

  useEffect(() => {
    dispatch(setInitState());
  }, []);

  return (
    <StyledWrapper>
      <div className="banner">
        Discover your {isTablet && <br />} ideal hotel
      </div>

      <SearchBox />

      <StyledContainer>
        <TopChoiceComponent />

        <PopularDestinationComponent />

        <GetInspirationComponent />
      </StyledContainer>

      {!isCheckOutValidate && (
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .banner {
    height: 300px;
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
    text-align: center;
    line-height: 1.2;

    ${device.wideMobile} {
      font-size: 32px;
      line-height: 1.5;
    }
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

Home.prototype = {};

export default Home;
