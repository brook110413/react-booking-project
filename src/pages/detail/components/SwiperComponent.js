import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperComponent = (props) => {
  const chosenHotel = useSelector((state) => state.global.chosenHotel);

  const imgList = ['Rachada1', 'Rachada2', 'Rachada3', 'Rachada4'];

  return (
    <StyledWrapper>
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
  }
`;

SwiperComponent.propTypes = {};

export default SwiperComponent;
