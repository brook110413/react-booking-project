import React from 'react';
import styled from 'styled-components';
import { Container, Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import SearchBox from '@Basic/SearchBox';
import color from '@Style/color';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Detail = () => {
  const imgList = ['Rachada1', 'Rachada2', 'Rachada3', 'Rachada4'];

  return (
    <StyledWrapper>
      <StyledSearchBoxWrapper>
        <Container>
          <SearchBox />
        </Container>
      </StyledSearchBoxWrapper>

      <StyledContainer>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          wrapperTag="ul"
        >
          {imgList.map((img, i) => (
            <SwiperSlide key={`img-${i}`} tag="li">
              <Image src={`images/${img}.jpg`} className="imgList" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hotelTitle">
          <div>
            <div className="hotelTitle">Rachada Hotel</div>
          </div>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .imgList {
    height: 300px;
    object-position: center 75%;
    object-fit: cover;
    border-radius: 10px;
  }

  .hotelTitle {
    .hotelTitle {
      font-size: 32px;
      font-weight: bold;
    }
  }
`;

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
