import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

import color from '@Style/color';

// install Swiper modules
SwiperCore.use([Autoplay]);

const TopChoiceComponent = (props) => {
  const topChoicesList = [
    {
      img: 'top1',
      title: 'Hotel Aqua',
      rank: 5,
      rankIcon: ['\u2605', '\u2605', '\u2605', '\u2605', '\u2605'],
      reviews: '2K',
      price: '2,480',
    },
    {
      img: 'top2',
      title: 'Mr. Kawasaki Inn',
      rank: 4,
      rankIcon: ['\u2605', '\u2605', '\u2605', '\u2605'],
      reviews: '500',
      price: '3,380',
    },
    {
      img: 'top3',
      title: 'Weekly Paradise',
      rank: 4,
      rankIcon: ['\u2605', '\u2605', '\u2605', '\u2605'],
      reviews: '470',
      price: '4,780',
    },
    {
      img: 'top4',
      title: 'Beast Hotel',
      rank: 4,
      rankIcon: ['\u2605', '\u2605', '\u2605', '\u2605'],
      reviews: 283,
      price: '1,980',
    },
  ];

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const isWideMobile = useMediaQuery({
    query: '(max-width: 525px)',
  });

  const renderSidesPerView = () => {
    if (isWideMobile) return 1.4;
    if (isTablet) return 2.6;
    return 4;
  };

  return (
    <StyledWrapper>
      <div className="title">Top Choices</div>

      <Swiper
        spaceBetween={30}
        slidesPerView={renderSidesPerView()}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {topChoicesList.map((item, i) => (
          <SwiperSlide className="open-sans" key={`slide-${i}`}>
            <StyledTopChoicesContainer>
              <Image src={`images/${item.img}.jpg`} className="mb-2" />
              <div className="content">
                <div>{item.title}</div>
                <div className="rank">
                  <div>
                    {item.rankIcon.map((icon, i) => (
                      <span key={`icon-${i}`}>{icon}</span>
                    ))}
                  </div>
                  <span style={{ color: color.gray }}>
                    {`${item.rank}.0`} ・
                  </span>
                  <span style={{ color: color.gray }}>
                    {item.reviews} reviews
                  </span>
                </div>
                <div style={{ color: color.gray, fontSize: 14 }}>
                  TWD
                  <span>{item.price}</span>
                </div>
              </div>
            </StyledTopChoicesContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .swiper-container {
    z-index: -1;
  }
`;

const StyledTopChoicesContainer = styled.div`
  img {
    width: 100%;
    height: 175px;
    object-fit: cover;
    border-radius: 8px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .rank {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

TopChoiceComponent.prototype = {};

export default TopChoiceComponent;
