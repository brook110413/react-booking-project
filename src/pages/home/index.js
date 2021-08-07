import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Image } from 'react-bootstrap';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiFillStar } from 'react-icons/ai';

import color from '@Style/color';

// install Swiper modules
SwiperCore.use([Autoplay]);

const Home = (props) => {
  const topChoicesList = [
    {
      img: 'top1',
      title: 'Hotel Aqua',
      rank: 5,
      rankIcon: [
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
      ],
      reviews: '2K',
      price: '2,480',
    },
    {
      img: 'top2',
      title: 'Mr. Kawasaki Inn',
      rank: 4,
      rankIcon: [
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
      ],
      reviews: '500',
      price: '3,380',
    },
    {
      img: 'top3',
      title: 'Weekly Paradise',
      rank: 4,
      rankIcon: [
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
      ],
      reviews: '470',
      price: '4,780',
    },
    {
      img: 'top4',
      title: 'Beast Hotel',
      rank: 4,
      rankIcon: [
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
      ],
      reviews: 283,
      price: '1,980',
    },
  ];

  const popularDestinations = [
    {
      nation: 'Japan',
      city: 'Osaka',
      img: 'Osaka',
    },
    {
      nation: 'Japan',
      city: 'Kyoto',
      img: 'Kyoto',
    },
    {
      nation: 'iceland',
      city: 'Reykjavík',
      img: 'Reykjavic',
    },
    {
      nation: 'France',
      city: 'Paris',
      img: 'Paris',
    },
    {
      nation: 'Italy',
      city: 'Roma',
      img: 'Roman',
    },
    {
      nation: 'Thailand',
      city: 'Bangkok',
      img: 'Bangkok',
    },
  ];

  const inspirationList = [
    {
      title: 'The fifth most visited country',
      content:
        'Italy is the fifth most visited country in the world, with a total of 52.3 million…',
      img: 'italy',
    },
    {
      title: 'Visit Thailand for Bangkok',
      content:
        'Asian tourists primarily visit Thailand for Bangkok and the historical, natural, and…',
      img: 'Thailand',
    },
    {
      title: 'Lord of the Rings Tour',
      content:
        'The national cuisine has been described as Pacific Rim, incorporating the native Māori…',
      img: 'NewZealand',
    },
  ];

  return (
    <StyledWrapper>
      <div className="banner">Discover your ideal hotel</div>

      <StyledContainer>
        <div>
          <div className="title">Top Choices</div>

          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {topChoicesList.map((item) => (
              <SwiperSlide key={item.img} className="open-sans">
                <StyledTopChoicesContainer>
                  <Image src={`images/${item.img}.jpg`} className="mb-2" />
                  <div className="content">
                    <div>{item.title}</div>
                    <div className="rank">
                      <span>{item.rankIcon}</span>
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
        </div>

        <div>
          <div className="title">Popular Destinations</div>

          <StyledDestinationContainer className="open-sans">
            {popularDestinations.map((item) => (
              <div
                className="item"
                key={item.city}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(images/${item.img}.jpg)`,
                }}
              >
                <div className="nation">{item.nation}</div>
                <div className="city">{item.city}</div>
              </div>
            ))}
          </StyledDestinationContainer>
        </div>

        <div>
          <div className="title">Get Inspiration</div>

          <StyledInspirationContainer>
            {inspirationList.map((item) => (
              <div className="item">
                <div>
                  <Image src={`images/${item.img}.jpg`} />
                </div>
                <div>
                  <div className="itemTitle">{item.title}</div>
                  <div className="itemContent open-sans">{item.content}</div>
                </div>
              </div>
            ))}
          </StyledInspirationContainer>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .banner {
    height: 320px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
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
  padding: 60px 12px 72px;
  display: flex;
  flex-direction: column;
  gap: 72px;
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

const StyledDestinationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px 30px;

  .item {
    width: 31.79%;
    height: 78px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    .nation {
      color: #ffffff98;
      font-size: 16px;
      font-weight: bold;
    }
    .city {
      color: ${color.white};
      font-size: 28px;
    }
  }
`;

const StyledInspirationContainer = styled.div`
  display: flex;
  gap: 30px;

  .item {
    width: 31.79%;

    img {
      object-fit: cover;
      object-position: 50% 70%;
      height: 263px;
      width: 100%;
      border-radius: 8px;
      margin-bottom: 24px;
    }

    .itemTitle {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    .itemContent {
      color: #00000099;
      line-height: 1.5rem;
    }
  }
`;

Home.propTypes = {};

export default Home;
