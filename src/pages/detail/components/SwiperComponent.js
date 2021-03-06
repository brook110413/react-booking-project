import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { device } from '@/style/browser';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperComponent = (props) => {
  const chosenHotel = useSelector((state) => state.global.chosenHotel);

  const imgList = ['Rachada1', 'Rachada2', 'Rachada3', 'Rachada4'];

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const isWideMobile = useMediaQuery({
    query: '(max-width: 525px)',
  });

  const renderSidesPerView = () => {
    if (isWideMobile) return 1;
    if (isTablet) return 2.6;
    return 4;
  };

  return (
    <StyledWrapper>
      <Swiper
        spaceBetween={30}
        slidesPerView={renderSidesPerView()}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        wrapperTag="ul"
      >
        {imgList.map((img, i) => (
          <SwiperSlide key={`img-${i}`} tag="li">
            {i === 0 ? (
              <Image
                src={`images/${chosenHotel.img}.jpg`}
                className="imgList"
              />
            ) : (
              <Image src={`images/${img}.jpg`} className="imgList" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .imgList {
    height: 300px;
    object-position: center 75%;
    object-fit: cover;
    border-radius: 10px;

    ${device.desktop} {
      height: 150px;
    }
  }
`;

SwiperComponent.propTypes = {};

export default SwiperComponent;
